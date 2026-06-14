# Deutsch Connect Center — Website

Website public của Deutsch Connect Center (du học nghề Đức, 18B/18A, Au-pair, thời vụ 8 tháng, học tiếng Đức).
HTML/CSS/JavaScript **thuần, không framework**, deploy trên **Vercel**.

## Cấu trúc
- `index.html` — shell HTML, SEO meta, Organization schema, header/footer.
- `styles.css` — design system navy/off-white/gold, responsive mobile-first.
- `app.js` — router hash-based, nội dung website, bộ lọc đơn hàng, form đăng ký nhiều bước.
- `config.js` — cấu hình public (`LEAD_API`, `STAFF_APP_URL`).
- `api/lead.js` — serverless function (Vercel) nhận lead từ form và ghi vào Notion.

## Chạy local
```bash
python3 -m http.server 4173
# mở http://127.0.0.1:4173
```
Lưu ý: `api/lead.js` chỉ chạy khi deploy trên Vercel (hoặc `vercel dev`), không chạy với http.server thuần.

## Nhận lead qua Notion
Form `#/dang-ky` (và section trang chủ) gửi lead → `POST /api/lead` (cùng domain) → function dùng token bí mật ghi vào database Notion **"DCC – Lead đăng ký tư vấn"**.

Cần đặt 2 biến môi trường trên Vercel (Settings → Environment Variables):
- `NOTION_TOKEN` — Internal Integration Secret của Notion integration.
- `NOTION_DATABASE_ID` — ID database lead.

Và phải Share database với integration đó (••• → Connections → Add).
Hướng dẫn chi tiết: xem `HUONG-DAN-NOTION.md`.

Mỗi lead lưu kèm: `source = Website`, trạng thái mặc định, `program_interest` theo lựa chọn, và `lookup_code` dạng `DCC-YYYY-XXXXXX`.

## Routes (hash-based, chạy tốt trên static hosting)
`#/`, `#/chuong-trinh`, `#/du-hoc-nghe-duc`, `#/18b-18a`, `#/au-pair-duc`, `#/thoi-vu-8-thang`,
`#/hoc-tieng-duc`, `#/don-hang`, `#/don-hang/:id`, `#/dang-ky`, `#/tra-cuu-ho-so`, `#/hoc-vien`,
`#/partner`, `#/app`, `#/rui-ro-can-biet`.

## Deploy
Đã nối GitHub → Vercel: mỗi lần push lên nhánh chính, Vercel tự build & deploy (static, không cần build step).
Thư mục `api/` được Vercel tự nhận thành serverless functions.
