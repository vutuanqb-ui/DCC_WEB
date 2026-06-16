// DCC public website config.
window.DCC_PUBLIC_CONFIG = {
  // ====== NHẬN LEAD QUA NOTION ======
  // Form web gửi lead tới serverless function /api/lead (cùng domain).
  // Function đó dùng token bí mật (đặt ở biến môi trường Vercel) để ghi vào database Notion.
  // Không cần điền gì ở đây trừ khi đổi đường dẫn API.
  LEAD_API: "/api/lead",

  // Nhận hồ sơ "Chuyển việc / chuyển chủ tại Đức" (Azubi & 18A/18B) → /api/job-transfer.
  JOB_TRANSFER_API: "/api/job-transfer",

  // Đối tác upload hồ sơ ứng viên → /api/partner-upload (ghi DB nội bộ + DB chia sẻ đối tác Đức).
  PARTNER_UPLOAD_API: "/api/partner-upload",

  STAFF_APP_URL: "https://app.deutschconnectcenter.com"
};
