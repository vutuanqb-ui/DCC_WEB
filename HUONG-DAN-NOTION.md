# Hướng dẫn: nhận lead về Notion (cho website DCC)

Form đăng ký trên web giờ gửi lead về **Notion** thay cho Google Sheet, để sau này dễ tự động hoá
(gửi Zalo/email tự động, gắn nhắc việc, kết nối tool khác).

## Cách hoạt động (nói ngắn)
Khách điền form → trình duyệt gửi tới `/api/lead` (một hàm chạy trên Vercel) → hàm này dùng **token bí mật**
ghi thẳng vào database Notion. Token KHÔNG nằm trong code chạy ở máy khách nên không bị lộ.

- Database đã tạo sẵn: **"DCC – Lead đăng ký tư vấn"**
  - Link: https://app.notion.com/p/ccd3012c59ce49cb819088f50ff13612
  - **Database ID:** `ccd3012c59ce49cb819088f50ff13612`

## Việc anh cần làm 1 lần (khoảng 5 phút)

### Bước 1 — Tạo "integration" Notion để lấy token
1. Mở https://www.notion.so/my-integrations → **New integration**.
2. Đặt tên (vd: `DCC Website`), chọn workspace của anh → **Save**.
3. Vào integration vừa tạo → mục **Internal Integration Secret** → bấm **Show** → **Copy**.
   (Token bắt đầu bằng `ntn_...` hoặc `secret_...`.)

### Bước 2 — Cho integration quyền ghi vào database
1. Mở database **"DCC – Lead đăng ký tư vấn"** trong Notion.
2. Góc trên phải bấm **•••** → **Connections** (Kết nối) → **Add connections** → chọn `DCC Website`.
   (Không làm bước này thì hàm sẽ báo lỗi "không ghi được vào Notion".)

### Bước 3 — Dán token vào Vercel
1. Vào https://vercel.com → project của website DCC → **Settings → Environment Variables**.
2. Thêm 2 biến (cho cả Production + Preview):
   - `NOTION_TOKEN` = token đã copy ở Bước 1
   - `NOTION_DATABASE_ID` = `ccd3012c59ce49cb819088f50ff13612`
3. **Save**.

### Bước 4 — Deploy lại
- Đẩy code mới lên (push GitHub) **hoặc** chạy `vercel --prod` trong thư mục `dcc-website/`.
- Lưu ý: thư mục `api/` phải được deploy cùng (đã nằm sẵn trong `dcc-website/api/lead.js`).
- Vercel tự nhận `api/lead.js` thành serverless function, không cần cấu hình thêm.

## Kiểm tra
1. Mở web → vào trang **Đăng ký** → điền thử 1 lead → gửi.
2. Web hiện "Cảm ơn… Mã tra cứu của bạn: DCC-2026-XXXXXX".
3. Mở database Notion → thấy dòng lead mới.
- Nếu báo lỗi: kiểm tra lại đã làm **Bước 2** (Add connection) và đã điền đúng 2 biến môi trường chưa.
  Xem log lỗi ở Vercel: project → **Deployments → Functions → /api/lead → Logs**.

## File liên quan
- `api/lead.js` — hàm nhận lead, ghi vào Notion (giữ token bí mật).
- `app.js` — hàm `submitLeadToNotion(payload)` gửi form tới `/api/lead`.
- `config.js` — `LEAD_API: "/api/lead"` (chỉ đổi nếu muốn đổi đường dẫn).

## Tự động hoá sau này (gợi ý)
Khi đã có lead trong Notion, anh có thể bật **Notion Automations** hoặc nối **Make/Zapier/n8n**:
mỗi khi có dòng mới → gửi Zalo/email cho tư vấn viên, hoặc tạo nhắc việc gọi lại trong 24h.

---

# Đăng ký TÀI KHOẢN (học viên & đối tác) — 2 database mới

Trang **Đăng ký** giờ cho học viên/đối tác tự tạo tài khoản + đặt mật khẩu, lần sau đăng nhập bằng
**email hoặc số điện thoại + mật khẩu**. Mật khẩu được **băm (scrypt)** trước khi lưu — Notion KHÔNG thấy mật khẩu thật.

- Hàm xử lý: `api/account.js` (đăng ký `action:"register"` + đăng nhập `action:"login"`, `role:"member"|"partner"`).
- 2 database đã tạo sẵn:
  - **DCC – Thành viên đã đăng ký** — ID `0057067441c7480999b74cce9a00ea38`
    https://app.notion.com/p/0057067441c7480999b74cce9a00ea38
  - **DCC – Đối tác đã đăng ký** — ID `e8c2c2c5e83e4d1fa2fb63f9be9e1df0`
    https://app.notion.com/p/e8c2c2c5e83e4d1fa2fb63f9be9e1df0
  - 2 ID này đã **hardcode mặc định** trong `api/account.js`, nên KHÔNG bắt buộc thêm biến môi trường.
    (Tùy chọn: đặt `NOTION_MEMBERS_DB_ID` / `NOTION_PARTNERS_DB_ID` trên Vercel nếu sau này đổi DB.)

## Việc anh cần làm 1 lần (bắt buộc) — cấp quyền cho integration
Giống Bước 2 ở trên, nhưng làm cho **cả 2 database mới**:
1. Mở **DCC – Thành viên đã đăng ký** → góc trên phải **•••** → **Connections** (Kết nối) → **Add connections** → chọn đúng integration đang dùng cho Lead (vd `DCC Website`).
2. Làm y hệt với **DCC – Đối tác đã đăng ký**.
- Chưa làm bước này thì web báo *"Chưa tạo được tài khoản"* (lỗi 502) khi bấm đăng ký.

## Kiểm tra
- `GET /api/account` → trả **405** = hàm đã live.
- Vào web → **Đăng ký** → tạo thử 1 tài khoản học viên → thấy dòng mới trong DB "Thành viên đã đăng ký",
  cột **"Mật khẩu (đã mã hoá)"** ở dạng `salt:hash`. Sau đó vào **Đăng nhập** thử email/SĐT + mật khẩu vừa đặt.
