// Vercel serverless function: nhận lead từ form web → ghi vào Notion.
// Trình duyệt khách POST JSON tới /api/lead (cùng domain, không vướng CORS).
// Token Notion được giữ BÍ MẬT ở biến môi trường Vercel, không lộ ra client.
//
// Cần đặt 2 biến môi trường trên Vercel (Settings → Environment Variables):
//   NOTION_TOKEN        = secret của Notion internal integration (bắt đầu bằng "ntn_" hoặc "secret_")
//   NOTION_DATABASE_ID  = ccd3012c59ce49cb819088f50ff13612
//
// Và nhớ Share database "DCC – Lead đăng ký tư vấn" với integration đó (Connections → chọn integration).

const NOTION_API = 'https://api.notion.com/v1/pages';
const NOTION_VERSION = '2022-06-28';
// DB chia sẻ cho ĐỐI TÁC TẠI ĐỨC (email/SĐT đã che). Bản nội bộ đầy đủ vẫn ở DB Lead.
const DEFAULT_STUDENT_SHARED_DB_ID = 'f43d0200bbaf48fdb48cb2b3910eaab7';
// DB NỘI BỘ riêng cho hồ sơ học viên (email/SĐT THẬT + file + Tình trạng xử lý để khách tra cứu).
const DEFAULT_STUDENT_INTERNAL_DB_ID = 'bb1f8121ec17495e828b227a9b1ebfe1';
const SHARED_LEVELS = ['Chưa học', 'A1', 'A2', 'B1', 'B2'];

// Các lựa chọn hợp lệ của ô SELECT trong Notion (Notion báo lỗi nếu có dấu phẩy).
const PROGRAMS = ['Du học nghề Đức', 'Chuyển đổi văn bằng 18B', '18A', 'Au-pair Đức', 'Thời vụ 8 tháng', 'Học tiếng Đức', 'Chưa biết – cần tư vấn'];
const LEVELS = ['Chưa học', 'A1', 'A2', 'B1', 'B2'];

function clean(value) {
  return (value == null ? '' : String(value)).trim();
}

// Notion SELECT không nhận dấu phẩy → thay bằng " –". Trả null nếu rỗng.
function selectValue(value) {
  const v = clean(value).replace(/,/g, ' –').replace(/\s+/g, ' ').trim();
  return v ? { name: v.slice(0, 100) } : null;
}

function richText(value) {
  const v = clean(value);
  return v ? [{ text: { content: v.slice(0, 2000) } }] : [];
}

// Che bớt SĐT: giữ 2 số đầu + 2 số cuối, vd 0912345678 → 09••••78.
function maskPhone(value) {
  const digits = clean(value).replace(/\D/g, '');
  if (!digits) return '';
  if (digits.length <= 4) return (digits[0] || '') + '•••';
  return `${digits.slice(0, 2)}••••${digits.slice(-2)}`;
}

// Che bớt email: giữ 2 ký tự đầu + tên miền, vd nguyen@gmail.com → ng•••@gmail.com.
function maskEmail(value) {
  const e = clean(value);
  if (!e) return '';
  const at = e.indexOf('@');
  if (at < 1) return (e[0] || '') + '•••';
  return `${e.slice(0, at).slice(0, 2)}•••@${e.slice(at + 1)}`;
}

// Ghi bản che cho DB học viên chia sẻ đối tác Đức (phụ — lỗi chỉ log, không chặn lead chính).
async function writeStudentShared(token, payload, fullName, lookupCode) {
  const dbId = process.env.NOTION_STUDENT_SHARED_DB_ID || DEFAULT_STUDENT_SHARED_DB_ID;
  const sharedNote = [
    ['Ngành mong muốn', payload.desired_career],
    ['Nơi mong muốn', payload.desired_location],
    ['Ghi chú', payload.note],
  ].filter(([, v]) => clean(v)).map(([k, v]) => `${k}: ${clean(v)}`).join('\n');

  const props = {
    'Họ và tên': { title: [{ text: { content: fullName.slice(0, 200) } }] },
    'Email': { rich_text: richText(maskEmail(payload.email)) },
    'Số điện thoại': { rich_text: richText(maskPhone(payload.phone)) },
    'Chương trình': { rich_text: richText(clean(payload.program_interest).replace(/,/g, ' –')) },
    'Tỉnh / thành': { rich_text: richText(payload.province) },
    'Ghi chú': { rich_text: richText(sharedNote) },
    'Mã tra cứu': { rich_text: richText(lookupCode) },
    'Trạng thái': { select: { name: 'Mới' } },
  };
  const lv = clean(payload.german_level);
  if (SHARED_LEVELS.includes(lv)) props['Trình độ tiếng Đức'] = { select: { name: lv } };

  try {
    const r = await fetch(NOTION_API, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Notion-Version': NOTION_VERSION, 'Content-Type': 'application/json' },
      body: JSON.stringify({ parent: { database_id: dbId }, properties: props }),
    });
    if (!r.ok) console.error('Student-shared write', r.status, await r.text());
  } catch (err) {
    console.error('Student-shared error', err);
  }
}

// Ghi bản NỘI BỘ đầy đủ (email/SĐT thật) cho DB "Hồ sơ học viên (nội bộ)" (phụ — lỗi chỉ log, không chặn lead chính).
async function writeStudentInternal(token, payload, fullName, lookupCode, extraLines) {
  const dbId = process.env.NOTION_STUDENT_INTERNAL_DB_ID || DEFAULT_STUDENT_INTERNAL_DB_ID;
  const props = {
    'Họ và tên': { title: [{ text: { content: fullName.slice(0, 200) } }] },
    'Số điện thoại': { phone_number: clean(payload.phone) },
    'Tỉnh/thành': { rich_text: richText(payload.province) },
    'Mã tra cứu': { rich_text: richText(lookupCode) },
    'Thông tin thêm': { rich_text: richText(extraLines) },
    'Nguồn': { select: selectValue(payload.source || 'Website') },
    'Tình trạng xử lý': { select: { name: 'Đã tiếp nhận' } },
  };
  const email = clean(payload.email);
  if (email) props['Email'] = { email };
  const program = selectValue(payload.program_interest);
  if (program) props['Chương trình'] = { select: program };
  const level = selectValue(payload.german_level);
  if (level) props['Trình độ tiếng Đức'] = { select: level };

  try {
    const r = await fetch(NOTION_API, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Notion-Version': NOTION_VERSION, 'Content-Type': 'application/json' },
      body: JSON.stringify({ parent: { database_id: dbId }, properties: props }),
    });
    if (!r.ok) console.error('Student-internal write', r.status, await r.text());
  } catch (err) {
    console.error('Student-internal error', err);
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (!token || !databaseId) {
    return res.status(500).json({ ok: false, error: 'Server chưa cấu hình Notion (thiếu NOTION_TOKEN / NOTION_DATABASE_ID).' });
  }

  // Đọc body (Vercel thường đã parse JSON sẵn; phòng trường hợp chưa parse).
  let payload = req.body;
  if (typeof payload === 'string') { try { payload = JSON.parse(payload); } catch { payload = {}; } }
  payload = payload || {};

  const fullName = clean(payload.full_name);
  const phone = clean(payload.phone);
  if (!fullName || !phone) {
    return res.status(400).json({ ok: false, error: 'Thiếu họ tên hoặc số điện thoại.' });
  }

  const lookupCode = clean(payload.lookup_code) || `DCC-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  // Gộp các trường phụ vào ô "Thông tin thêm" để không mất dữ liệu nào.
  const extraLines = [
    ['Ngày sinh', payload.birth_date],
    ['Zalo/Facebook', payload.social_contact],
    ['Bằng cấp cao nhất', payload.highest_education],
    ['Ngành/nghề hiện tại', payload.current_career],
    ['Kinh nghiệm làm việc', payload.work_experience],
    ['Tình trạng hộ chiếu', payload.passport_status],
    ['Tình trạng hồ sơ', payload.document_status],
    ['Muốn đi khi nào', payload.desired_departure],
    ['Ngành mong muốn', payload.desired_career],
    ['Nơi mong muốn', payload.desired_location],
    ['Đơn vị/công ty (đối tác)', payload.partner_company],
    ['KMK/ZAB', payload.kmk_zab],
    ['KMK/ZAB - đã làm bao lâu', payload.kmk_zab_time],
    ['NARIC', payload.naric],
    ['NARIC - đã làm bao lâu', payload.naric_time],
    ['Ghi chú', payload.note],
  ].filter(([, v]) => clean(v)).map(([k, v]) => `${k}: ${clean(v)}`).join('\n');

  const properties = {
    'Họ và tên': { title: [{ text: { content: fullName.slice(0, 200) } }] },
    'Số điện thoại': { phone_number: phone },
    'Mã tra cứu': { rich_text: richText(lookupCode) },
    'Tỉnh/thành': { rich_text: richText(payload.province) },
    'Thông tin thêm': { rich_text: richText(extraLines) },
    'Nguồn': { select: selectValue(payload.source || 'Website') },
    'Trạng thái lead': { status: { name: 'Chưa bắt đầu' } },
  };

  const email = clean(payload.email);
  if (email) properties['Email'] = { email };

  const program = selectValue(payload.program_interest);
  if (program) properties['Chương trình'] = { select: program };

  const level = selectValue(payload.german_level);
  if (level) properties['Trình độ tiếng Đức'] = { select: level };

  try {
    const notionRes = await fetch(NOTION_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Notion-Version': NOTION_VERSION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ parent: { database_id: databaseId }, properties }),
    });

    if (!notionRes.ok) {
      const detail = await notionRes.text();
      console.error('Notion error', notionRes.status, detail);
      return res.status(502).json({ ok: false, error: 'Không ghi được vào Notion.' });
    }

    // Ghi thêm bản NỘI BỘ đầy đủ + bản CHE cho đối tác Đức (phụ, không chặn kết quả lead chính).
    await writeStudentInternal(token, payload, fullName, lookupCode, extraLines);
    await writeStudentShared(token, payload, fullName, lookupCode);

    return res.status(200).json({ ok: true, lookup_code: lookupCode });
  } catch (err) {
    console.error('Lead handler error', err);
    return res.status(500).json({ ok: false, error: 'Lỗi máy chủ khi gửi lead.' });
  }
};
