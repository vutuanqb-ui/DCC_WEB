// Vercel serverless function: nhận hồ sơ "Chuyển việc / chuyển chủ tại Đức" → ghi vào Notion.
// Dành cho ứng viên ĐANG Ở ĐỨC (Azubi hoặc 18A/18B) muốn chuyển việc, chuyển chủ hoặc đổi nghề học mới.
// Form web POST JSON tới /api/job-transfer (cùng domain). Token Notion giữ BÍ MẬT ở env Vercel.
//
// Biến môi trường (Settings → Environment Variables):
//   NOTION_TOKEN            = secret integration Notion (đã có sẵn cho /api/lead)
//   NOTION_JOBTRANSFER_DB_ID= (tuỳ chọn) ID database; mặc định hardcode bên dưới.
//
// BẮT BUỘC: Share database "DCC – Chuyển việc / chuyển chủ tại Đức" với integration NOTION_TOKEN
// (••• → Connections → Add). Chưa share → trả 502.

const NOTION_PAGES = 'https://api.notion.com/v1/pages';
const NOTION_FILE_UPLOADS = 'https://api.notion.com/v1/file_uploads';
const NOTION_VERSION = '2022-06-28';
const DEFAULT_DB_ID = '79e4044ffc0a45cca2207a4a7645ab17';

const DIEN = ['Azubi', '18A', '18B'];
const LEVELS = ['Chưa học', 'A1', 'A2', 'B1', 'B2'];

// Giới hạn upload: tối đa 3 file, tổng ~3MB (giữ dưới hạn body 4.5MB của Vercel sau khi base64).
const MAX_FILES = 3;
const MAX_TOTAL_BYTES = 3 * 1024 * 1024;
const ALLOWED_EXT = ['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx', 'heic', 'webp'];

function clean(value) {
  return (value == null ? '' : String(value)).trim();
}

function selectValue(value, allowed) {
  const v = clean(value);
  if (!v) return null;
  if (allowed && !allowed.includes(v)) return null;
  return { name: v.slice(0, 100) };
}

function richText(value) {
  const v = clean(value);
  return v ? [{ text: { content: v.slice(0, 2000) } }] : [];
}

function notionHeaders(token) {
  return {
    'Authorization': `Bearer ${token}`,
    'Notion-Version': NOTION_VERSION,
    'Content-Type': 'application/json',
  };
}

// Upload 1 file lên Notion (single-part). Trả về { id, name } nếu thành công, null nếu lỗi.
async function uploadOneFile(token, file) {
  try {
    const name = clean(file.name) || 'ho-so';
    const ext = name.split('.').pop().toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) return null;
    const base64 = String(file.data || '').replace(/^data:[^;]+;base64,/, '');
    const buffer = Buffer.from(base64, 'base64');
    if (!buffer.length || buffer.length > MAX_TOTAL_BYTES) return null;

    // B1: tạo file upload object.
    const createRes = await fetch(NOTION_FILE_UPLOADS, {
      method: 'POST',
      headers: notionHeaders(token),
      body: JSON.stringify({ mode: 'single_part', filename: name.slice(0, 200) }),
    });
    if (!createRes.ok) { console.error('file_upload create', createRes.status, await createRes.text()); return null; }
    const created = await createRes.json();
    const uploadUrl = created.upload_url || `${NOTION_FILE_UPLOADS}/${created.id}/send`;

    // B2: gửi nội dung file (multipart/form-data).
    const form = new FormData();
    form.append('file', new Blob([buffer], { type: clean(file.type) || 'application/octet-stream' }), name.slice(0, 200));
    const sendRes = await fetch(uploadUrl, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Notion-Version': NOTION_VERSION },
      body: form,
    });
    if (!sendRes.ok) { console.error('file_upload send', sendRes.status, await sendRes.text()); return null; }
    return { id: created.id, name: name.slice(0, 200) };
  } catch (err) {
    console.error('uploadOneFile error', err);
    return null;
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_JOBTRANSFER_DB_ID || DEFAULT_DB_ID;
  if (!token) {
    return res.status(500).json({ ok: false, error: 'Server chưa cấu hình Notion (thiếu NOTION_TOKEN).' });
  }

  let payload = req.body;
  if (typeof payload === 'string') { try { payload = JSON.parse(payload); } catch { payload = {}; } }
  payload = payload || {};

  const fullName = clean(payload.full_name);
  const whatsapp = clean(payload.whatsapp);
  if (!fullName || !whatsapp) {
    return res.status(400).json({ ok: false, error: 'Thiếu họ tên hoặc số WhatsApp.' });
  }

  const lookupCode = clean(payload.lookup_code) || `DCC-CV-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  // Upload các file hồ sơ (nếu có), tổng không quá MAX_TOTAL_BYTES.
  const uploaded = [];
  if (Array.isArray(payload.files) && payload.files.length) {
    let total = 0;
    for (const f of payload.files.slice(0, MAX_FILES)) {
      const raw = String(f && f.data || '').replace(/^data:[^;]+;base64,/, '');
      total += Math.floor(raw.length * 3 / 4);
      if (total > MAX_TOTAL_BYTES) break;
      const result = await uploadOneFile(token, f);
      if (result) uploaded.push(result);
    }
  }

  const extraLines = [
    ['Số điện thoại khác', payload.other_phone],
    ['Đã upload hồ sơ', uploaded.length ? `${uploaded.length} file` : ''],
    ['Ghi chú', payload.note],
  ].filter(([, v]) => clean(v)).map(([k, v]) => `${k}: ${clean(v)}`).join('\n');

  const properties = {
    'Họ và tên': { title: [{ text: { content: fullName.slice(0, 200) } }] },
    'WhatsApp': { phone_number: whatsapp },
    'Mã tra cứu': { rich_text: richText(lookupCode) },
    'Nghề / ngành hiện tại': { rich_text: richText(payload.current_career) },
    'Nghề / công việc mong muốn': { rich_text: richText(payload.desired_career) },
    'Bang / thành phố hiện tại': { rich_text: richText(payload.current_location) },
    'Bang / thành phố muốn chuyển tới': { rich_text: richText(payload.desired_location) },
    'Thời gian mong muốn chuyển': { rich_text: richText(payload.desired_time) },
    'Lý do muốn chuyển': { rich_text: richText(payload.reason) },
    'Thông tin thêm': { rich_text: richText(extraLines) },
    'Trạng thái': { status: { name: 'Chưa bắt đầu' } },
  };

  const otherPhone = clean(payload.other_phone);
  if (otherPhone) properties['Số điện thoại khác'] = { phone_number: otherPhone };

  const email = clean(payload.email);
  if (email) properties['Email'] = { email };

  const dien = selectValue(payload.dien, DIEN);
  if (dien) properties['Diện'] = { select: dien };

  const level = selectValue(payload.german_level, LEVELS);
  if (level) properties['Trình độ tiếng Đức'] = { select: level };

  const docLink = clean(payload.doc_link);
  if (/^https?:\/\//i.test(docLink)) properties['Link hồ sơ / CV'] = { url: docLink.slice(0, 2000) };

  if (uploaded.length) {
    properties['Hồ sơ đính kèm'] = {
      files: uploaded.map((u) => ({ type: 'file_upload', file_upload: { id: u.id }, name: u.name })),
    };
  }

  try {
    const notionRes = await fetch(NOTION_PAGES, {
      method: 'POST',
      headers: notionHeaders(token),
      body: JSON.stringify({ parent: { database_id: databaseId }, properties }),
    });

    if (!notionRes.ok) {
      const detail = await notionRes.text();
      console.error('Notion error', notionRes.status, detail);
      return res.status(502).json({ ok: false, error: 'Không ghi được vào Notion.' });
    }

    return res.status(200).json({ ok: true, lookup_code: lookupCode, files_uploaded: uploaded.length });
  } catch (err) {
    console.error('Job-transfer handler error', err);
    return res.status(500).json({ ok: false, error: 'Lỗi máy chủ khi gửi hồ sơ.' });
  }
};
