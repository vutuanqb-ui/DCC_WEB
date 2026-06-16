// Vercel serverless function: nhận HỒ SƠ ỨNG VIÊN do ĐỐI TÁC (đã đăng nhập) gửi → ghi vào 2 database Notion.
// Form web POST JSON tới /api/partner-upload (cùng domain). Token Notion giữ BÍ MẬT ở env Vercel.
//
// Đối tác ĐĂNG NHẬP rồi mới upload → tên/mã đối tác lấy từ tài khoản (không nhập tay).
// Email & SĐT đối tác được CHE BỚT (vd 09••••78) ở CẢ HAI DB; khi cần liên hệ đối tác để lấy đầy đủ.
//
// Ghi vào 2 nơi từ cùng 1 lần gửi:
//   1) DB NỘI BỘ:                NOTION_PARTNER_INTERNAL_DB_ID
//   2) DB CHIA SẺ ĐỐI TÁC ĐỨC:   NOTION_PARTNER_SHARED_DB_ID
//
// Biến môi trường (Settings → Environment Variables):
//   NOTION_TOKEN                 = secret integration Notion (dùng chung với /api/lead).
//   NOTION_PARTNER_INTERNAL_DB_ID= (tuỳ chọn) ID DB nội bộ; mặc định hardcode bên dưới.
//   NOTION_PARTNER_SHARED_DB_ID  = (tuỳ chọn) ID DB chia sẻ đối tác Đức; mặc định hardcode bên dưới.
//
// BẮT BUỘC: Share CẢ HAI database với integration NOTION_TOKEN (••• → Connections → Add).
// Chưa share → trả 502.

const NOTION_PAGES = 'https://api.notion.com/v1/pages';
const NOTION_FILE_UPLOADS = 'https://api.notion.com/v1/file_uploads';
const NOTION_VERSION = '2022-06-28';
const DEFAULT_INTERNAL_DB_ID = '727dfb302a92474aa94ecf23aec09d29';
const DEFAULT_SHARED_DB_ID = 'f29910bf2b6c4678ba3f1dff7d52fdf1';

const LEVELS = ['Chưa học', 'A1', 'A2', 'B1', 'B2'];

// Giới hạn upload: tối đa 5 file, tổng ~3MB (giữ dưới hạn body 4.5MB của Vercel sau base64).
const MAX_FILES = 5;
const MAX_TOTAL_BYTES = 3 * 1024 * 1024;
const ALLOWED_EXT = ['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx', 'heic', 'webp', 'zip', 'rar'];

function clean(value) {
  return (value == null ? '' : String(value)).trim();
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
  const local = e.slice(0, at);
  const domain = e.slice(at + 1);
  const head = local.slice(0, local.length >= 2 ? 2 : 1);
  return `${head}•••@${domain}`;
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
// Lưu ý: mỗi file_upload id chỉ gắn được vào MỘT nơi → muốn ghi vào 2 DB phải upload 2 lần.
async function uploadOneFile(token, file) {
  try {
    const name = clean(file.name) || 'ho-so';
    const ext = name.split('.').pop().toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) return null;
    const base64 = String(file.data || '').replace(/^data:[^;]+;base64,/, '');
    const buffer = Buffer.from(base64, 'base64');
    if (!buffer.length || buffer.length > MAX_TOTAL_BYTES) return null;

    const createRes = await fetch(NOTION_FILE_UPLOADS, {
      method: 'POST',
      headers: notionHeaders(token),
      body: JSON.stringify({ mode: 'single_part', filename: name.slice(0, 200) }),
    });
    if (!createRes.ok) { console.error('file_upload create', createRes.status, await createRes.text()); return null; }
    const created = await createRes.json();
    const uploadUrl = created.upload_url || `${NOTION_FILE_UPLOADS}/${created.id}/send`;

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

// Upload danh sách file (đã lọc dung lượng) 1 lần → trả mảng { id, name }.
async function uploadFiles(token, files) {
  const uploaded = [];
  let total = 0;
  for (const f of files.slice(0, MAX_FILES)) {
    const raw = String(f && f.data || '').replace(/^data:[^;]+;base64,/, '');
    total += Math.floor(raw.length * 3 / 4);
    if (total > MAX_TOTAL_BYTES) break;
    const result = await uploadOneFile(token, f);
    if (result) uploaded.push(result);
  }
  return uploaded;
}

function filesProp(uploaded) {
  return { files: uploaded.map((u) => ({ type: 'file_upload', file_upload: { id: u.id }, name: u.name })) };
}

async function createPage(token, databaseId, properties) {
  const res = await fetch(NOTION_PAGES, {
    method: 'POST',
    headers: notionHeaders(token),
    body: JSON.stringify({ parent: { database_id: databaseId }, properties }),
  });
  if (!res.ok) { console.error('Notion page', databaseId, res.status, await res.text()); return false; }
  return true;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const token = process.env.NOTION_TOKEN;
  const internalDbId = process.env.NOTION_PARTNER_INTERNAL_DB_ID || DEFAULT_INTERNAL_DB_ID;
  const sharedDbId = process.env.NOTION_PARTNER_SHARED_DB_ID || DEFAULT_SHARED_DB_ID;
  if (!token) {
    return res.status(500).json({ ok: false, error: 'Server chưa cấu hình Notion (thiếu NOTION_TOKEN).' });
  }

  let payload = req.body;
  if (typeof payload === 'string') { try { payload = JSON.parse(payload); } catch { payload = {}; } }
  payload = payload || {};

  // Tên/mã đối tác lấy từ tài khoản đã đăng nhập (client gửi kèm).
  const partnerName = clean(payload.partner_name);
  if (!partnerName) {
    return res.status(400).json({ ok: false, error: 'Thiếu thông tin đối tác (vui lòng đăng nhập lại).' });
  }
  const partnerCode = clean(payload.partner_code);

  const lookupCode = clean(payload.lookup_code) || `DCC-HS-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const candidateName = clean(payload.candidate_name);
  const title = (candidateName || `Hồ sơ ${lookupCode}`).slice(0, 200);
  const level = selectValue(payload.german_level, LEVELS);
  const career = clean(payload.career);
  const note = clean(payload.note);

  // Email & SĐT đối tác → CHE BỚT (cả nội bộ lẫn gửi Đức).
  const emailMasked = maskEmail(payload.partner_email);
  const phoneMasked = maskPhone(payload.partner_phone);

  const rawFiles = Array.isArray(payload.files) ? payload.files : [];

  // Upload file 2 lần (mỗi DB 1 bộ) vì file_upload id chỉ gắn được 1 nơi.
  let internalFiles = [];
  let sharedFiles = [];
  if (rawFiles.length) {
    internalFiles = await uploadFiles(token, rawFiles);
    sharedFiles = await uploadFiles(token, rawFiles);
  }

  // ===== DB NỘI BỘ =====
  const internalProps = {
    'Họ tên ứng viên': { title: [{ text: { content: title } }] },
    'Đối tác gửi': { rich_text: richText(partnerName) },
    'Mã đối tác': { rich_text: richText(partnerCode) },
    'Email đối tác': { rich_text: richText(emailMasked) },
    'SĐT đối tác': { rich_text: richText(phoneMasked) },
    'Ngành / nghề': { rich_text: richText(career) },
    'Ghi chú': { rich_text: richText(note) },
    'Mã hồ sơ': { rich_text: richText(lookupCode) },
    'Trạng thái': { select: { name: 'Mới nhận' } },
  };
  if (level) internalProps['Trình độ tiếng Đức'] = { select: level };
  if (internalFiles.length) internalProps['Hồ sơ đính kèm'] = filesProp(internalFiles);

  // ===== DB CHIA SẺ ĐỐI TÁC ĐỨC (email/SĐT cũng đã che) =====
  const sharedProps = {
    'Họ tên ứng viên': { title: [{ text: { content: title } }] },
    'Đối tác giới thiệu': { rich_text: richText(partnerName) },
    'Email': { rich_text: richText(emailMasked) },
    'Số điện thoại': { rich_text: richText(phoneMasked) },
    'Ngành / nghề': { rich_text: richText(career) },
    'Ghi chú': { rich_text: richText(note) },
    'Mã hồ sơ': { rich_text: richText(lookupCode) },
    'Trạng thái': { select: { name: 'Mới' } },
  };
  if (level) sharedProps['Trình độ tiếng Đức'] = { select: level };
  if (sharedFiles.length) sharedProps['Hồ sơ đính kèm'] = filesProp(sharedFiles);

  try {
    // DB nội bộ là nguồn chính. Lỗi ở đây → báo 502.
    const internalOk = await createPage(token, internalDbId, internalProps);
    if (!internalOk) {
      return res.status(502).json({ ok: false, error: 'Không ghi được vào Notion (DB nội bộ).' });
    }
    // DB chia sẻ là phụ — lỗi vẫn coi như thành công, chỉ ghi log.
    const sharedOk = await createPage(token, sharedDbId, sharedProps);
    if (!sharedOk) console.error('Partner-upload: ghi DB chia sẻ đối tác Đức thất bại (code', lookupCode, ')');

    return res.status(200).json({ ok: true, lookup_code: lookupCode, files_uploaded: internalFiles.length });
  } catch (err) {
    console.error('Partner-upload handler error', err);
    return res.status(500).json({ ok: false, error: 'Lỗi máy chủ khi gửi hồ sơ.' });
  }
};
