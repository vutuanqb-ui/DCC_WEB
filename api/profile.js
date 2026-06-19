// Vercel serverless: TRA CỨU TIẾN ĐỘ HỒ SƠ của khách (học viên & đối tác).
// Nhận email / số điện thoại / mã tra cứu → trả về TẤT CẢ hồ sơ khớp, kèm "Tình trạng xử lý".
//   - Học viên: đọc DB "Hồ sơ học viên (nội bộ)" (mới) + DB Lead (hồ sơ cũ) + DB Thành viên.
//   - Đối tác: đọc DB "Hồ sơ đối tác gửi (nội bộ)" theo email/SĐT/Mã đối tác/Mã hồ sơ.
//
// Dùng chung NOTION_TOKEN. DB:
//   NOTION_STUDENT_INTERNAL_DB_ID (Hồ sơ học viên nội bộ) mặc định bb1f8121ec17495e828b227a9b1ebfe1
//   NOTION_DATABASE_ID            (Lead, hồ sơ cũ)        mặc định ccd3012c59ce49cb819088f50ff13612
//   NOTION_MEMBERS_DB_ID          (Thành viên)            mặc định 0057067441c7480999b74cce9a00ea38
//   NOTION_PARTNER_INTERNAL_DB_ID (Hồ sơ đối tác gửi)     mặc định 727dfb302a92474aa94ecf23aec09d29

const NOTION_VERSION = '2022-06-28';
const STUDENT_INTERNAL_DB = process.env.NOTION_STUDENT_INTERNAL_DB_ID || 'bb1f8121ec17495e828b227a9b1ebfe1';
const LEAD_DB = process.env.NOTION_DATABASE_ID || 'ccd3012c59ce49cb819088f50ff13612';
const MEMBERS_DB = process.env.NOTION_MEMBERS_DB_ID || '0057067441c7480999b74cce9a00ea38';
const PARTNER_INTERNAL_DB = process.env.NOTION_PARTNER_INTERNAL_DB_ID || '727dfb302a92474aa94ecf23aec09d29';

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

// Một dòng học viên có khớp với khách đang tra cứu không?
function matchRow(props, { email, phone, code }) {
  const rowEmail = readText(props['Email']).toLowerCase();
  const rowPhone = normalizePhone(readText(props['Số điện thoại']));
  const rowCode = readText(props['Mã tra cứu']).toLowerCase();
  if (email && rowEmail && rowEmail === email) return true;
  if (phone && rowPhone && rowPhone === phone) return true;
  if (code && rowCode && rowCode === code) return true;
  return false;
}

// Một dòng hồ sơ đối tác gửi có khớp không? (email/SĐT đối tác thật + Mã đối tác + Mã hồ sơ)
function matchPartnerRow(props, { email, phone, code }) {
  const rowEmail = readText(props['Email đối tác']).toLowerCase();
  const rowPhone = normalizePhone(readText(props['SĐT đối tác']));
  const rowPartnerCode = readText(props['Mã đối tác']).toLowerCase();
  const rowFileCode = readText(props['Mã hồ sơ']).toLowerCase();
  if (email && rowEmail && rowEmail === email) return true;
  if (phone && rowPhone && rowPhone === phone) return true;
  if (code && rowPartnerCode && rowPartnerCode === code) return true;
  if (code && rowFileCode && rowFileCode === code) return true;
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
  const seenCodes = new Set();
  let customerName = '';

  try {
    // 1) DB Hồ sơ học viên (nội bộ) — nguồn chính cho học viên, có "Tình trạng xử lý".
    const studentInternal = await notion(token, `databases/${STUDENT_INTERNAL_DB}/query`, {
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      page_size: 100,
    });
    if (studentInternal.ok && Array.isArray(studentInternal.data.results)) {
      for (const page of studentInternal.data.results) {
        const props = page.properties || {};
        if (!matchRow(props, keys)) continue;
        customerName = customerName || readText(props['Họ và tên']);
        const rowCode = readText(props['Mã tra cứu']);
        if (rowCode) seenCodes.add(rowCode.toLowerCase());
        records.push({
          kind: 'student',
          source: 'Hồ sơ học viên',
          program: readText(props['Chương trình']) || 'Tư vấn chung',
          stage: readText(props['Tình trạng xử lý']) || 'Đã tiếp nhận',
          level: readText(props['Trình độ tiếng Đức']),
          location: readText(props['Tỉnh/thành']),
          code: rowCode,
          date: page.created_time || '',
        });
      }
    }

    // 2) Lead DB — hồ sơ CŨ (trước khi có DB nội bộ); bỏ qua dòng đã có ở DB nội bộ (trùng Mã tra cứu).
    const lead = await notion(token, `databases/${LEAD_DB}/query`, {
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      page_size: 100,
    });
    if (lead.ok && Array.isArray(lead.data.results)) {
      for (const page of lead.data.results) {
        const props = page.properties || {};
        if (!matchRow(props, keys)) continue;
        const rowCode = readText(props['Mã tra cứu']);
        if (rowCode && seenCodes.has(rowCode.toLowerCase())) continue;
        if (rowCode) seenCodes.add(rowCode.toLowerCase());
        customerName = customerName || readText(props['Họ và tên']);
        records.push({
          kind: 'student',
          source: 'Đăng ký nguyện vọng',
          program: readText(props['Chương trình']) || 'Tư vấn chung',
          stage: readText(props['Tình trạng xử lý']) || readText(props['Giai đoạn hồ sơ']) || 'Mới đăng ký',
          level: readText(props['Trình độ tiếng Đức']),
          location: readText(props['Tỉnh/thành']),
          code: rowCode,
          date: page.created_time || '',
        });
      }
    }

    // 3) Member DB — tài khoản thành viên + chương trình quan tâm.
    const mem = await notion(token, `databases/${MEMBERS_DB}/query`, { page_size: 100 });
    if (mem.ok && Array.isArray(mem.data.results)) {
      for (const page of mem.data.results) {
        const props = page.properties || {};
        if (!matchRow(props, keys)) continue;
        customerName = customerName || readText(props['Họ và tên']);
        const program = readText(props['Chương trình quan tâm']);
        if (program) {
          records.push({
            kind: 'student',
            source: 'Tài khoản thành viên',
            program,
            stage: readText(props['Tình trạng xử lý']) || readText(props['Giai đoạn hồ sơ']) || 'Mới đăng ký',
            level: readText(props['Trình độ tiếng Đức']),
            location: readText(props['Tỉnh/thành']),
            code: readText(props['Mã thành viên']),
            date: page.created_time || '',
          });
        }
      }
    }

    // 4) DB Hồ sơ đối tác gửi (nội bộ) — đối tác tra theo email/SĐT/Mã đối tác/Mã hồ sơ.
    const partner = await notion(token, `databases/${PARTNER_INTERNAL_DB}/query`, {
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      page_size: 100,
    });
    if (partner.ok && Array.isArray(partner.data.results)) {
      for (const page of partner.data.results) {
        const props = page.properties || {};
        if (!matchPartnerRow(props, keys)) continue;
        customerName = customerName || readText(props['Đối tác gửi']);
        const candidate = readText(props['Họ tên ứng viên']) || 'Hồ sơ ứng viên';
        const career = readText(props['Ngành / nghề']) || readText(props['Diện']);
        records.push({
          kind: 'partner',
          source: 'Hồ sơ ứng viên đã gửi',
          program: candidate,
          career,
          stage: readText(props['Tình trạng xử lý']) || 'Đã tiếp nhận',
          level: readText(props['Trình độ tiếng Đức']),
          location: readText(props['Vị trí mong muốn']),
          code: readText(props['Mã hồ sơ']),
          date: page.created_time || '',
        });
      }
    }

    return res.status(200).json({ ok: true, found: records.length > 0, name: customerName, records });
  } catch (err) {
    console.error('Profile handler error', err);
    return res.status(500).json({ ok: false, error: 'Lỗi máy chủ khi tra cứu.' });
  }
};
