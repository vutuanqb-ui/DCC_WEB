const orders = [
  { title: "Du học nghề Nhà hàng - Khách sạn", location: "Đức", salary: "1.000 - 1.200€/tháng", language: "B1 tiếng Đức", status: "Đang tuyển" },
  { title: "Chuyển đổi văn bằng 18B", location: "Nhà hàng / Khách sạn", salary: "Theo hợp đồng lao động", language: "A2 - B1 tùy hồ sơ", status: "Nhận hồ sơ" },
  { title: "Au-pair Đức", location: "Gia đình bản xứ", salary: "Theo quy định Au-pair", language: "A1 - A2", status: "Tư vấn" }
];

const ordersList = document.querySelector('#ordersList');
ordersList.innerHTML = orders.map((item) => `
  <article class="order">
    <span class="badge">${item.status}</span>
    <h3>${item.title}</h3>
    <div class="order-meta">
      <div><b>Địa điểm:</b> ${item.location}</div>
      <div><b>Lương:</b> ${item.salary}</div>
      <div><b>Yêu cầu:</b> ${item.language}</div>
    </div>
    <a href="#register">Đăng ký tư vấn →</a>
  </article>
`).join('');

const form = document.querySelector('#leadForm');
const formMessage = document.querySelector('#formMessage');

function setMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = `form-message ${type}`;
}

async function submitLeadToSupabase(payload) {
  const config = window.DCC_PUBLIC_CONFIG || {};
  if (!config.SUPABASE_URL || !config.SUPABASE_ANON_KEY || config.SUPABASE_ANON_KEY.includes('DAN_SUPABASE')) {
    throw new Error('Chưa cấu hình Supabase trong file config.js');
  }

  const response = await fetch(`${config.SUPABASE_URL}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': config.SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${config.SUPABASE_ANON_KEY}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Không lưu được dữ liệu');
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  payload.source = 'website';
  payload.status = 'new';
  payload.created_at = new Date().toISOString();

  try {
    setMessage('Đang gửi thông tin...', '');
    await submitLeadToSupabase(payload);
    form.reset();
    setMessage('Đã gửi thông tin thành công. DCC sẽ liên hệ lại sớm.', 'success');
  } catch (error) {
    console.error(error);
    setMessage('Chưa gửi được: ' + error.message, 'error');
  }
});
