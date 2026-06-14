// Vercel serverless function: ĐĂNG KÝ TÀI KHOẢN + ĐĂNG NHẬP cho học viên & đối tác.
// Ghi/đọc vào 2 database Notion riêng:
//   - Thành viên đã đăng ký  (NOTION_MEMBERS_DB_ID)
//   - Đối tác đã đăng ký      (NOTION_PARTNERS_DB_ID)
//
// Mật khẩu KHÔNG bao giờ lưu thô — được băm bằng scrypt (crypto của Node) theo dạng "salt:hash".
//
// Biến môi trường Vercel cần có:
//   NOTION_TOKEN           = secret của Notion internal integration (đã có sẵn)
//   NOTION_MEMBERS_DB_ID   = 0057067441c7480999b74cce9a00ea38  (mặc định bên dưới)
//   NOTION_PARTNERS_DB_ID  = e8c2c2c5e83e4d1fa2fb63f9be9e1df0  (mặc định bên dưới)
// Nhớ Share (Connections) 2 database mới đó với integration NOTION_TOKEN.

const crypto = require('crypto');

const NOTION_VERSION = '2022-06-28';
const MEMBERS_DB = process.env.NOTION_MEMBERS_DB_ID || '0057067441c7480999b74cce9a00ea38';
const PARTNERS_DB = process.env.NOTION_PARTNERS_DB_ID || 'e8c2c2c5e83e4d1fa2fb63f9be9e1df0';

const PROGRAMS = ['Du học nghề Đức', 'Chuyển đổi văn bằng 18B', '18A', 'Au-pair Đức', 'Thời vụ 8 tháng', 'Học tiếng Đức', 'Chưa biết – cần tư vấn'];
const LEVELS = ['Chưa học', 'A1', 'A2', 'B1', 'B2'];

function clean(value) {
  return (value == null ? '' : String(value)).trim();
}

// Notion SELECT không nhận dấu phẩy → thay bằng " –".
function selectValue(value) {
  const v = clean(value).replace(/,/g, ' –').replace(/\s+/g, ' ').trim();
  return v ? { name: v.slice(0, 100) } : null;
}

function richText(value) {
  const v = clean(value);
  return v ? [{ text: { content: v.slice(0, 2000) } }] : [];
}

function normalizePhone(value) {
  // Bỏ mọi ký tự không phải số (giữ dấu + đầu nếu có) để so khớp ổn định khi đăng nhập.
  const v = clean(value).replace(/[^\d+]/g, '');
  return v.replace(/(?!^)\+/g, '');
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(String(password), salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  const [salt, hash] = clean(stored).split(':');
  if (!salt || !hash) return false;
  const calc = crypto.scryptSync(String(password), salt, 64).toString('hex');
  const a = Buffer.from(hash, 'hex');
  const b = Buffer.from(calc, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function genCode(prefix) {
  return `${prefix}-${new Date().getFullYear()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
}

async function notion(token, path, body, method = 'POST') {
  const res = await fetch(`https://api.notion.com/v1/${path}`, {
    method,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

// Tìm tài khoản theo email hoặc số điện thoại trong 1 database.
async function findAccount(token, dbId, { email, phone }) {
  const filters = [];
  if (email) filters.push({ property: 'Email', email: { equals: email } });
  if (phone) filters.push({ property: 'Số điện thoại', phone_number: { equals: phone } });
  if (!filters.length) return null;
  const filter = filters.length > 1 ? { or: filters } : filters[0];
  const { ok, data } = await notion(token, `databases/${dbId}/query`, { filter, page_size: 1 });
  if (!ok || !data.results || !data.results.length) return null;
  return data.results[0];
}

function readText(prop) {
  if (!prop) return '';
  if (prop.type === 'title') return (prop.title || []).map((t) => t.plain_text).join('');
  if (prop.type === 'rich_text') return (prop.rich_text || []).map((t) => t.plain_text).join('');
  if (prop.type === 'email') return prop.email || '';
  if (prop.type === 'phone_number') return prop.phone_number || '';
  if (prop.type === 'select') return prop.select ? prop.select.name : '';
  return '';
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const token = process.env.NOTION_TOKEN;
  if (!token) return res.status(500).json({ ok: false, error: 'Server chưa cấu hình Notion (thiếu NOTION_TOKEN).' });

  let payload = req.body;
  if (typeof payload === 'string') { try { payload = JSON.parse(payload); } catch { payload = {}; } }
  payload = payload || {};

  const action = clean(payload.action);
  const role = clean(payload.role) === 'partner' ? 'partner' : 'member';
  const dbId = role === 'partner' ? PARTNERS_DB : MEMBERS_DB;

  try {
    if (action === 'login') return await handleLogin(res, token, dbId, role, payload);
    if (action === 'register') return await handleRegister(res, token, dbId, role, payload);
    return res.status(400).json({ ok: false, error: 'Hành động không hợp lệ.' });
  } catch (err) {
    console.error('Account handler error', err);
    return res.status(500).json({ ok: false, error: 'Lỗi máy chủ.' });
  }
};

async function handleRegister(res, token, dbId, role, payload) {
  const fullName = clean(payload.full_name);
  const phone = normalizePhone(payload.phone);
  const email = clean(payload.email).toLowerCase();
  const password = clean(payload.password);

  if (!fullName) return res.status(400).json({ ok: false, error: 'Vui lòng nhập họ tên.' });
  if (!phone) return res.status(400).json({ ok: false, error: 'Vui lòng nhập số điện thoại.' });
  if (password.length < 6) return res.status(400).json({ ok: false, error: 'Mật khẩu cần ít nhất 6 ký tự.' });

  // Chặn trùng tài khoản theo email hoặc số điện thoại.
  const existing = await findAccount(token, dbId, { email: email || null, phone });
  if (existing) {
    return res.status(409).json({ ok: false, error: 'Đã có tài khoản dùng email hoặc số điện thoại này. Vui lòng đăng nhập.' });
  }

  const passwordHash = hashPassword(password);

  let properties;
  let code;
  if (role === 'partner') {
    code = clean(payload.account_code) || genCode('DCC-PTN');
    const partnerType = clean(payload.partner_type) === 'company' ? 'Đối tác công ty' : 'Đối tác cá nhân';
    const extra = [
      ['Người liên hệ', payload.contact_name],
      ['Ghi chú', payload.note],
    ].filter(([, v]) => clean(v)).map(([k, v]) => `${k}: ${clean(v)}`).join('\n');
    properties = {
      'Họ tên / Người đại diện': { title: [{ text: { content: fullName.slice(0, 200) } }] },
      'Loại đối tác': { select: selectValue(partnerType) },
      'Tên công ty': { rich_text: richText(payload.company_name) },
      'Email': email ? { email } : { email: null },
      'Số điện thoại': { phone_number: phone },
      'Mật khẩu (đã mã hoá)': { rich_text: richText(passwordHash) },
      'Khu vực hoạt động': { rich_text: richText(payload.province) },
      'Mã số thuế / Giấy phép': { rich_text: richText(payload.tax_code) },
      'Mã đối tác': { rich_text: richText(code) },
      'Thông tin thêm': { rich_text: richText(extra) },
      'Trạng thái': { select: { name: 'Mới đăng ký' } },
    };
  } else {
    code = clean(payload.account_code) || genCode('DCC-MEM');
    const extra = [
      ['Bằng cấp cao nhất', payload.highest_education],
      ['Ngành/nghề hiện tại', payload.current_career],
      ['Tình trạng hộ chiếu', payload.passport_status],
      ['Mong muốn', payload.note],
    ].filter(([, v]) => clean(v)).map(([k, v]) => `${k}: ${clean(v)}`).join('\n');
    const program = selectValue(payload.program_interest);
    const level = selectValue(payload.german_level);
    properties = {
      'Họ và tên': { title: [{ text: { content: fullName.slice(0, 200) } }] },
      'Email': email ? { email } : { email: null },
      'Số điện thoại': { phone_number: phone },
      'Mật khẩu (đã mã hoá)': { rich_text: richText(passwordHash) },
      'Ngày sinh': { rich_text: richText(payload.birth_date) },
      'Tỉnh/thành': { rich_text: richText(payload.province) },
      'Mã thành viên': { rich_text: richText(code) },
      'Thông tin thêm': { rich_text: richText(extra) },
      'Trạng thái': { select: { name: 'Mới đăng ký' } },
    };
    if (program) properties['Chương trình quan tâm'] = { select: program };
    if (level) properties['Trình độ tiếng Đức'] = { select: level };
  }

  const { ok, status, data } = await notion(token, 'pages', { parent: { database_id: dbId }, properties });
  if (!ok) {
    console.error('Notion register error', status, JSON.stringify(data));
    return res.status(502).json({ ok: false, error: 'Chưa tạo được tài khoản. Vui lòng thử lại.' });
  }

  return res.status(200).json({ ok: true, role, code, name: fullName });
}

async function handleLogin(res, token, dbId, role, payload) {
  const identifier = clean(payload.identifier);
  const password = clean(payload.password);
  if (!identifier || !password) {
    return res.status(400).json({ ok: false, error: 'Vui lòng nhập email/số điện thoại và mật khẩu.' });
  }

  const isEmail = identifier.includes('@');
  const lookup = isEmail ? { email: identifier.toLowerCase() } : { phone: normalizePhone(identifier) };
  const account = await findAccount(token, dbId, lookup);
  if (!account) {
    return res.status(401).json({ ok: false, error: 'Không tìm thấy tài khoản. Kiểm tra lại hoặc đăng ký mới.' });
  }

  const props = account.properties || {};
  const stored = readText(props['Mật khẩu (đã mã hoá)']);
  if (!verifyPassword(password, stored)) {
    return res.status(401).json({ ok: false, error: 'Mật khẩu chưa đúng. Vui lòng thử lại.' });
  }

  const nameProp = role === 'partner' ? props['Họ tên / Người đại diện'] : props['Họ và tên'];
  const codeProp = role === 'partner' ? props['Mã đối tác'] : props['Mã thành viên'];
  return res.status(200).json({
    ok: true,
    role,
    name: readText(nameProp),
    code: readText(codeProp),
    email: readText(props['Email']),
    phone: readText(props['Số điện thoại']),
  });
}
