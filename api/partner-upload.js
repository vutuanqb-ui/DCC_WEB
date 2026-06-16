// Vercel serverless function: nhận HỒ SƠ ỨNG VIÊN do ĐỐI TÁC (đã đăng nhập) gửi → ghi vào 2 database Notion.
//
// Vì Vercel giới hạn body ~4.5MB/request, KHÔNG gửi tất cả file trong 1 lần. Luồng 2 bước:
//   1) action='upload_file': client gửi LẦN LƯỢT từng file (base64) → server upload lên Notion
//      (2 bản: nội bộ + chia sẻ Đức vì mỗi file_upload id chỉ gắn 1 nơi) → trả {internalId, sharedId}.
//   2) action='create' (mặc định): client gửi thông tin hồ sơ + mảng uploaded[] → tạo 2 trang Notion.
//
// Nhận MỌI loại file, tối đa 50 file, mỗi file ≤ ~4MB. Email/SĐT đối tác CHE BỚT ở cả 2 DB.
//
// Env: NOTION_TOKEN, NOTION_PARTNER_INTERNAL_DB_ID, NOTION_PARTNER_SHARED_DB_ID.
// BẮT BUỘC Share CẢ HAI database với integration NOTION_TOKEN, nếu không → 502.

const NOTION_PAGES = 'https://api.notion.com/v1/pages';
const NOTION_FILE_UPLOADS = 'https://api.notion.com/v1/file_uploads';
const NOTION_VERSION = '2022-06-28';
const DEFAULT_INTERNAL_DB_ID = '727dfb302a92474aa94ecf23aec09d29';
const DEFAULT_SHARED_DB_ID = 'f29910bf2b6c4678ba3f1dff7d52fdf1';

const LEVELS = ['Chưa học', 'A1', 'A2', 'B1', 'B2'];
const DIEN = ['Du học nghề', '18B', '18A', 'Au-pair', 'Thời vụ 8 tháng', 'Khác'];

const MAX_FILES = 50;
const MAX_FILE_BYTES = 4 * 1024 * 1024; // mỗi file ~4MB (dưới hạn body 4.5MB của Vercel)

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
  return `${e.slice(0, at).slice(0, 2)}•••@${e.slice(at + 1)}`;
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

// Upload 1 file lên Notion (single-part), nhận MỌI định dạng. Trả { id, name } hoặc null nếu lỗi.
async function uploadOneFile(token, file) {
  try {
    const name = (clean(file && file.name) || 'ho-so').slice(0, 200);
    const base64 = String((file && file.data) || '').replace(/^data:[^;]+;base64,/, '');
    const buffer = Buffer.from(base64, 'base64');
    if (!buffer.length || buffer.length > MAX_FILE_BYTES) return null;

    const createRes = await fetch(NOTION_FILE_UPLOADS, {
      method: 'POST',
      headers: notionHeaders(token),
      body: JSON.stringify({ mode: 'single_part', filename: name }),
    });
    if (!createRes.ok) { console.error('file_upload create', createRes.status, await createRes.text()); return null; }
    const created = await createRes.json();
    const uploadUrl = created.upload_url || `${NOTION_FILE_UPLOADS}/${created.id}/send`;

    const form = new FormData();
    form.append('file', new Blob([buffer], { type: clean(file.type) || 'application/octet-stream' }), name);
    const sendRes = await fetch(uploadUrl, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Notion-Version': NOTION_VERSION },
      body: form,
    });
    if (!sendRes.ok) { console.error('file_upload send', sendRes.status, await sendRes.text()); return null; }
    return { id: created.id, name };
  } catch (err) {
    console.error('uploadOneFile error', err);
    return null;
  }
}

function filesProp(list) {
  return { files: list.map((u) => ({ type: 'file_upload', file_upload: { id: u.id }, name: u.name })) };
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

  // ===== BƯỚC 1: upload 1 file (gửi lên cả 2 DB) =====
  if (payload.action === 'upload_file') {
    const f = payload.file;
    if (!f || !f.data) return res.status(400).json({ ok: false, error: 'Thiếu dữ liệu file.' });
    // Upload 2 bản (nội bộ + chia sẻ Đức) SONG SONG để nhanh gấp đôi.
    const [internal, shared] = await Promise.all([uploadOneFile(token, f), uploadOneFile(token, f)]);
    if (!internal) {
      return res.status(502).json({ ok: false, error: 'Tải file lên Notion thất bại (file quá lớn hoặc chưa kết nối Notion).' });
    }
    return res.status(200).json({ ok: true, file: { name: internal.name, internalId: internal.id, sharedId: shared ? shared.id : null } });
  }

  // ===== BƯỚC 2: tạo trang hồ sơ =====
  const partnerName = clean(payload.partner_name);
  if (!partnerName) {
    return res.status(400).json({ ok: false, error: 'Thiếu thông tin đối tác (vui lòng đăng nhập lại).' });
  }
  const partnerCode = clean(payload.partner_code);

  const lookupCode = clean(payload.lookup_code) || `DCC-HS-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const candidateName = clean(payload.candidate_name);
  const title = (candidateName || `Hồ sơ ${lookupCode}`).slice(0, 200);
  const level = selectValue(payload.german_level, LEVELS);
  const dien = selectValue(payload.dien, DIEN);
  const career = clean(payload.career);
  const location = clean(payload.desired_location);
  const kmk = clean(payload.kmk_zab);
  const naric = clean(payload.naric);
  const note = clean(payload.note);
  const emailMasked = maskEmail(payload.partner_email);
  const phoneMasked = maskPhone(payload.partner_phone);

  const uploaded = Array.isArray(payload.uploaded) ? payload.uploaded.slice(0, MAX_FILES) : [];
  const internalFiles = uploaded.filter((u) => u && u.internalId).map((u) => ({ id: u.internalId, name: clean(u.name) || 'ho-so' }));
  const sharedFiles = uploaded.filter((u) => u && u.sharedId).map((u) => ({ id: u.sharedId, name: clean(u.name) || 'ho-so' }));

  // ===== DB NỘI BỘ =====
  const internalProps = {
    'Họ tên ứng viên': { title: [{ text: { content: title } }] },
    'Đối tác gửi': { rich_text: richText(partnerName) },
    'Mã đối tác': { rich_text: richText(partnerCode) },
    'Email đối tác': { rich_text: richText(emailMasked) },
    'SĐT đối tác': { rich_text: richText(phoneMasked) },
    'Ngành / nghề': { rich_text: richText(career) },
    'Vị trí mong muốn': { rich_text: richText(location) },
    'KMK/ZAB': { rich_text: richText(kmk) },
    'NARIC': { rich_text: richText(naric) },
    'Ghi chú': { rich_text: richText(note) },
    'Mã hồ sơ': { rich_text: richText(lookupCode) },
    'Trạng thái': { select: { name: 'Mới nhận' } },
  };
  if (dien) internalProps['Diện'] = { select: dien };
  if (level) internalProps['Trình độ tiếng Đức'] = { select: level };
  if (internalFiles.length) internalProps['Hồ sơ đính kèm'] = filesProp(internalFiles);

  // ===== DB CHIA SẺ ĐỐI TÁC ĐỨC (email/SĐT cũng đã che) =====
  const sharedProps = {
    'Họ tên ứng viên': { title: [{ text: { content: title } }] },
    'Đối tác giới thiệu': { rich_text: richText(partnerName) },
    'Email': { rich_text: richText(emailMasked) },
    'Số điện thoại': { rich_text: richText(phoneMasked) },
    'Ngành / nghề': { rich_text: richText(career) },
    'Vị trí mong muốn': { rich_text: richText(location) },
    'KMK/ZAB': { rich_text: richText(kmk) },
    'NARIC': { rich_text: richText(naric) },
    'Ghi chú': { rich_text: richText(note) },
    'Mã hồ sơ': { rich_text: richText(lookupCode) },
    'Trạng thái': { select: { name: 'Mới' } },
  };
  if (dien) sharedProps['Diện'] = { select: dien };
  if (level) sharedProps['Trình độ tiếng Đức'] = { select: level };
  if (sharedFiles.length) sharedProps['Hồ sơ đính kèm'] = filesProp(sharedFiles);

  try {
    const internalOk = await createPage(token, internalDbId, internalProps);
    if (!internalOk) {
      return res.status(502).json({ ok: false, error: 'Không ghi được vào Notion (DB nội bộ).' });
    }
    const sharedOk = await createPage(token, sharedDbId, sharedProps);
    if (!sharedOk) console.error('Partner-upload: ghi DB chia sẻ đối tác Đức thất bại (code', lookupCode, ')');

    return res.status(200).json({ ok: true, lookup_code: lookupCode, files_uploaded: internalFiles.length });
  } catch (err) {
    console.error('Partner-upload handler error', err);
    return res.status(500).json({ ok: false, error: 'Lỗi máy chủ khi gửi hồ sơ.' });
  }
};
