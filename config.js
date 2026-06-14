// DCC public website config.
window.DCC_PUBLIC_CONFIG = {
  // ====== NHẬN LEAD QUA NOTION ======
  // Form web gửi lead tới serverless function /api/lead (cùng domain).
  // Function đó dùng token bí mật (đặt ở biến môi trường Vercel) để ghi vào database Notion.
  // Không cần điền gì ở đây trừ khi đổi đường dẫn API.
  LEAD_API: "/api/lead",

  STAFF_APP_URL: "https://app.deutschconnectcenter.com"
};
