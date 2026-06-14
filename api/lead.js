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

    return res.status(200).json({ ok: true, lookup_code: lookupCode });
  } catch (err) {
    console.error('Lead handler error', err);
    return res.status(500).json({ ok: false, error: 'Lỗi máy chủ khi gửi lead.' });
  }
};
