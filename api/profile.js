// Vercel serverless: TRA CỨU TIẾN ĐỘ HỒ SƠ của khách.
// Nhận email / số điện thoại / mã tra cứu → trả về TẤT CẢ hồ sơ khách đã đăng ký
// (các đăng ký nguyện vọng/tư vấn trong Lead DB + tài khoản thành viên), kèm "Giai đoạn hồ sơ".
//
// Dùng chung NOTION_TOKEN. DB:
//   NOTION_DATABASE_ID      (Lead)        mặc định ccd3012c59ce49cb819088f50ff13612
//   NOTION_MEMBERS_DB_ID    (Thành viên)  mặc định 0057067441c7480999b74cce9a00ea38

const NOTION_VERSION = '2022-06-28';
const LEAD_DB = process.env.NOTION_DATABASE_ID || 'ccd3012c59ce49cb819088f50ff13612';
const MEMBERS_DB = process.env.NOTION_MEMBERS_DB_ID || '0057067441c7480999b74cce9a00ea38';

function clean(value) { return (value == null ? '' : String(value)).trim(); }
function normalizePhone(value) { return clean(value).replace(/[^\d+]/g, '').replace(/(?!^)\+/g, ''); }

async function notion(token, path, body) {
  const res = await fetch(`https://api.notion.com/v1/${path}`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Notion-Version': NOTION_VERSION, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

function readText(prop) {
  if (!prop) return '';
  if (prop.type === 'title') return (prop.title || []).map((t) => t.plain_text).join('');
  if (prop.type === 'rich_text') return (prop.rich_text || []).map((t) => t.plain_text).join('');
  if (prop.type === 'email') return prop.email || '';
  if (prop.type === 'phone_number') return prop.phone_number || '';
  if (prop.type === 'select') return prop.select ? prop.select.name : '';
  if (prop.type === 'status') return prop.status ? prop.status.name : '';
  return '';
}

// Một dòng có khớp với khách đang tra cứu không?
function matchRow(props, { email, phone, code }) {
  const rowEmail = readText(props['Email']).toLowerCase();
  const rowPhone = normalizePhone(readText(props['Số điện thoại']));
  const rowCode = readText(props['Mã tra cứu']).toLowerCase();
  if (email && rowEmail && rowEmail === email) return true;
  if (phone && rowPhone && rowPhone === phone) return true;
  if (code && rowCode && rowCode === code) return true;
  return false;
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

  // Gom các khoá tra cứu: identifier tự do hoặc email/phone tách sẵn.
  const idRaw = clean(payload.identifier);
  let email = clean(payload.email).toLowerCase();
  let phone = normalizePhone(payload.phone);
  let code = '';
  if (idRaw) {
    if (idRaw.includes('@')) email = idRaw.toLowerCase();
    else if (/^dcc-/i.test(idRaw)) code = idRaw.toLowerCase();
    else if (/\d/.test(idRaw) && idRaw.replace(/[^\d]/g, '').length >= 6) phone = normalizePhone(idRaw);
    else code = idRaw.toLowerCase();
  }
  if (!email && !phone && !code) {
    return res.status(400).json({ ok: false, error: 'Vui lòng nhập email, số điện thoại hoặc mã tra cứu.' });
  }

  const keys = { email, phone, code };
  const records = [];
  let customerName = '';

  try {
    // 1) Lead DB — các đăng ký nguyện vọng/tư vấn (nhiều loại hồ sơ).
    const lead = await notion(token, `databases/${LEAD_DB}/query`, {
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      page_size: 100,
    });
    if (lead.ok && Array.isArray(lead.data.results)) {
      for (const page of lead.data.results) {
        const props = page.properties || {};
        if (!matchRow(props, keys)) continue;
        customerName = customerName || readText(props['Họ và tên']);
        records.push({
          source: 'Đăng ký nguyện vọng',
          program: readText(props['Chương trình']) || 'Tư vấn chung',
          stage: readText(props['Giai đoạn hồ sơ']) || 'Mới đăng ký',
          status: readText(props['Trạng thái lead']),
          level: readText(props['Trình độ tiếng Đức']),
          location: readText(props['Tỉnh/thành']),
          code: readText(props['Mã tra cứu']),
          date: page.created_time || '',
        });
      }
    }

    // 2) Member DB — tài khoản thành viên + chương trình quan tâm.
    const mem = await notion(token, `databases/${MEMBERS_DB}/query`, { page_size: 100 });
    if (mem.ok && Array.isArray(mem.data.results)) {
      for (const page of mem.data.results) {
        const props = page.properties || {};
        if (!matchRow(props, keys)) continue;
        customerName = customerName || readText(props['Họ và tên']);
        const program = readText(props['Chương trình quan tâm']);
        if (program) {
          records.push({
            source: 'Tài khoản thành viên',
            program,
            stage: readText(props['Giai đoạn hồ sơ']) || 'Mới đăng ký',
            status: readText(props['Trạng thái']),
            level: readText(props['Trình độ tiếng Đức']),
            location: readText(props['Tỉnh/thành']),
            code: readText(props['Mã thành viên']),
            date: page.created_time || '',
          });
        }
      }
    }

    return res.status(200).json({ ok: true, found: records.length > 0, name: customerName, records });
  } catch (err) {
    console.error('Profile handler error', err);
    return res.status(500).json({ ok: false, error: 'Lỗi máy chủ khi tra cứu.' });
  }
};
