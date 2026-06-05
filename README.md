# Deutsch Connect Center Website + Portal Blueprint

Dự án này là bản nâng cấp website public của Deutsch Connect Center thành nền tảng tuyển sinh, quản lý hồ sơ và cổng thông tin theo hướng chuyên nghiệp, minh bạch và có phân quyền dữ liệu.

## 1. Kiến trúc hiện tại

Dự án đang là HTML/CSS/JavaScript thuần, phù hợp deploy nhanh lên Netlify:

- `index.html`: shell HTML, SEO meta, Organization schema, header/footer.
- `styles.css`: design system navy/off-white/gold, responsive mobile-first.
- `app.js`: router hash-based, nội dung public website, bộ lọc đơn hàng, form nhiều bước, portal/app demo shell.
- `config.js`: cấu hình public Supabase anon key và URL app nhân viên.
- `supabase/schema.sql`: schema database + Row Level Security policies.

Các URL yêu cầu được mô phỏng bằng hash route để chạy tốt trên static hosting:

- `#/`
- `#/chuong-trinh`
- `#/du-hoc-nghe-duc`
- `#/18b-18a`
- `#/au-pair-duc`
- `#/thoi-vu-8-thang`
- `#/hoc-tieng-duc`
- `#/don-hang`
- `#/don-hang/:id`
- `#/dang-ky`
- `#/tra-cuu-ho-so`
- `#/hoc-vien`
- `#/partner`
- `#/app`
- `#/rui-ro-can-biet`
- `#/gioi-thieu`
- `#/lien-he`

> Khi chuyển sang framework như Next.js/Vite SPA, có thể đổi hash route thành clean URL thật (`/dang-ky`, `/partner`, `/app`) và cấu hình redirect trên Netlify.

## 2. Cách chạy local

Cách nhanh nhất:

```bash
python3 -m http.server 4173
```

Sau đó mở:

```text
http://127.0.0.1:4173
```

Có thể dùng VS Code Live Server nếu muốn.

## 3. Kết nối Supabase

Mở `config.js` và thay:

```js
window.DCC_PUBLIC_CONFIG = {
  SUPABASE_URL: "https://YOUR_PROJECT.supabase.co",
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_PUBLIC_KEY",
  STAFF_APP_URL: "https://app.deutschconnectcenter.com"
};
```

Quy tắc bảo mật:

- Chỉ dùng `anon public key` ở frontend.
- Không bao giờ đưa `service_role key` vào `config.js`, GitHub, Netlify public env hoặc trình duyệt.
- Các thao tác nhạy cảm nên chạy bằng Supabase Edge Functions/server backend.

## 4. Tạo bảng và bật RLS

1. Vào Supabase Dashboard.
2. Mở SQL Editor.
3. Copy toàn bộ nội dung `supabase/schema.sql`.
4. Chạy SQL.
5. Kiểm tra các bảng quan trọng đã bật Row Level Security.

Schema gồm:

- `profiles`
- `leads`
- `customers`
- `programs`
- `job_orders`
- `applications`
- `documents`
- `document_checklists`
- `visa_cases`
- `language_classes`
- `class_students`
- `partners`
- `partner_students`
- `tasks`
- `notes`
- `activity_logs`
- `uploaded_files`
- `notifications`

## 5. Logic phân quyền RLS chính

- `student/customer`: chỉ xem hồ sơ gắn với `user_id = auth.uid()`.
- `partner`: chỉ xem đối tác của mình và học viên có `partner_id` tương ứng.
- `staff`: xem khách/hồ sơ được giao qua `assign_to` hoặc `assigned_to`.
- `teacher`: xem lớp mình phụ trách và học viên trong lớp đó.
- `manager/admin`: xem rộng hơn theo chính sách `is_admin_or_manager()`.
- `admin`: quản lý toàn bộ hồ sơ, chương trình, đơn hàng, đối tác và phân quyền.

Bảng `leads` cho phép `anon` insert để form website public có thể lưu khách mới. Không cấp quyền public select leads.

## 6. Form đăng ký khách hàng mới

Form tại `#/dang-ky` và section trên trang chủ gồm 4 bước:

1. Thông tin cá nhân.
2. Chọn chương trình quan tâm.
3. Trình độ hiện tại.
4. Mục tiêu và thời gian mong muốn.

Khi gửi thành công, payload lưu vào bảng `leads` với:

- `source = Website`
- `status = Khách mới đăng ký`
- `program_interest` theo lựa chọn của khách
- `lookup_code` dạng `DCC-YYYY-XXXXXX`

## 7. Deploy lên Netlify

1. Đẩy repository lên GitHub/GitLab.
2. Vào Netlify → Add new site → Import from Git.
3. Build command: để trống.
4. Publish directory: `.`.
5. Deploy.

Vì đây là static site thuần, không cần build step.

## 8. Gắn domain `deutschconnectcenter.com`

Trên Netlify:

1. Site settings → Domain management.
2. Add custom domain: `deutschconnectcenter.com`.
3. Thêm cả `www.deutschconnectcenter.com` nếu cần.
4. Cấu hình DNS theo hướng dẫn Netlify:
   - Apex domain: A record tới IP Netlify hoặc dùng Netlify DNS.
   - `www`: CNAME tới site Netlify.
5. Bật HTTPS/SSL certificate.

## 9. Gắn subdomain `app.deutschconnectcenter.com`

Có 2 hướng:

### Hướng A: app nội bộ vẫn chung static site

- Tạo DNS CNAME `app` trỏ về Netlify site.
- Trong tương lai cấu hình route `/app` hoặc subdomain bằng framework/router.

### Hướng B: app nội bộ là project riêng

Khuyến nghị khi bắt đầu có đăng nhập, dashboard thật, upload file và xử lý nghiệp vụ nhạy cảm.

- Tạo Netlify/Vercel project riêng cho app nội bộ.
- Gắn custom domain `app.deutschconnectcenter.com`.
- App nội bộ dùng Supabase Auth + RLS, tuyệt đối không dùng service key ở browser.

## 10. Giai đoạn phát triển tiếp theo

- Chuyển static demo sang Next.js/Vite để có route thật và component hóa sâu hơn.
- Tích hợp Supabase Auth cho học viên, đối tác, nhân viên.
- Tạo Edge Functions cho upload file, thông báo, phân công nhân viên và audit log.
- Xây dashboard CRUD thật cho `job_orders`, `customers`, `documents`, `visa_cases`, `language_classes`, `tasks`.
- Dùng Supabase Storage với bucket private cho giấy tờ, visa và tài liệu nhạy cảm.
