const PROGRAMS = [
  {
    slug: 'du-hoc-nghe-duc',
    icon: '🎓',
    title: 'Du học nghề Đức',
    summary: 'Dành cho học sinh/sinh viên muốn học nghề, làm việc và xây dựng tương lai dài hạn tại Đức.',
    tags: ['Nhà hàng khách sạn', 'Điều dưỡng', 'Bếp', 'Bán hàng', 'Logistics', 'Kỹ thuật', 'Bánh', 'Thịt'],
    cta: 'Xem đơn du học nghề'
  },
  {
    slug: '18b-18a',
    icon: '📘',
    title: 'Chuyển đổi văn bằng 18B / 18A',
    summary: 'Dành cho người đã có bằng trung cấp/cao đẳng/đại học cần kiểm tra điều kiện công nhận, chuyển đổi hoặc làm việc tại Đức.',
    tags: ['Công nhận văn bằng', 'Hồ sơ nghề', 'Hợp đồng lao động', 'Visa việc làm'],
    cta: 'Kiểm tra điều kiện 18B/18A'
  },
  {
    slug: 'au-pair-duc',
    icon: '🏡',
    title: 'Au-pair Đức',
    summary: 'Dành cho người muốn trải nghiệm văn hóa Đức, học tiếng và sống cùng gia đình bản xứ theo lộ trình phù hợp.',
    tags: ['A1/A2', 'Gia đình bản xứ', 'Thư động lực', 'Lộ trình sau Au-pair'],
    cta: 'Đăng ký tư vấn Au-pair'
  },
  {
    slug: 'thoi-vu-8-thang',
    icon: '🧭',
    title: 'Chương trình thời vụ 8 tháng',
    summary: 'Dành cho người muốn đi Đức làm việc ngắn hạn theo mùa vụ, cần hiểu rõ điều kiện, thời gian và rủi ro.',
    tags: ['8 tháng', 'Lao động mùa vụ', 'Lịch nhập cảnh', 'Hồ sơ rõ ràng'],
    cta: 'Xem chương trình 8 tháng'
  },
  {
    slug: 'hoc-tieng-duc',
    icon: '🇩🇪',
    title: 'Đăng ký học tiếng Đức',
    summary: 'Các lớp A1, A2, B1, B2 có kiểm tra đầu vào, lộ trình học và theo dõi tiến độ rõ ràng.',
    tags: ['A1', 'A2', 'B1', 'B2', 'Kiểm tra đầu vào'],
    cta: 'Đăng ký học tiếng'
  }
];

const ORDERS = [
  {
    id: 'dh-nghe-nha-hang-khach-san-berlin-2026',
    title: 'Du học nghề Nhà hàng - Khách sạn tại Berlin',
    program: 'Du học nghề',
    career: 'Nhà hàng khách sạn',
    location: 'Berlin, Đức',
    seats: '12 chỉ tiêu',
    salary: 'Hỗ trợ 1.050 - 1.200€/tháng',
    language: 'B1 tiếng Đức',
    intake: 'Dự kiến 09/2026',
    status: 'Còn tuyển',
    highlight: 'Phù hợp học viên thích dịch vụ, giao tiếp và môi trường quốc tế.',
    benefits: ['Đào tạo nghề theo hệ thống Đức', 'Có hỗ trợ trong quá trình chuẩn bị phỏng vấn', 'Theo dõi tiến độ hồ sơ trên cổng học viên'],
    requirements: ['Tốt nghiệp THPT trở lên', 'Có kế hoạch học tiếng Đức nghiêm túc', 'Hồ sơ cá nhân trung thực, nhất quán'],
    documents: ['Hộ chiếu', 'Bằng cấp/học bạ', 'CV tiếng Đức', 'Chứng chỉ tiếng Đức nếu có'],
    risks: ['Lịch phỏng vấn có thể thay đổi', 'Yêu cầu tiếng Đức cần đạt đúng thời hạn', 'Số lượng tiếp nhận phụ thuộc đối tác Đức']
  },
  {
    id: '18b-ky-thuat-bayern-2026',
    title: 'Chuyển đổi văn bằng 18B ngành kỹ thuật tại Bayern',
    program: '18B / 18A',
    career: 'Kỹ thuật',
    location: 'Bayern, Đức',
    seats: '08 hồ sơ',
    salary: 'Theo hợp đồng lao động',
    language: 'A2 - B1 tùy hồ sơ',
    intake: 'Nhận hồ sơ quanh năm',
    status: 'Sắp hết',
    highlight: 'Dành cho ứng viên đã có bằng nghề/cao đẳng/đại học và kinh nghiệm liên quan.',
    benefits: ['Kiểm tra điều kiện trước khi đi sâu hồ sơ', 'Tư vấn hướng công nhận/chuyển đổi phù hợp', 'Ghi nhận nhật ký xử lý từng bước'],
    requirements: ['Có bằng cấp chuyên môn', 'Có kinh nghiệm liên quan là lợi thế', 'Sẵn sàng bổ sung giấy tờ khi phía Đức yêu cầu'],
    documents: ['Bằng và bảng điểm', 'Xác nhận kinh nghiệm', 'CV', 'Hộ chiếu', 'Chứng chỉ tiếng Đức nếu có'],
    risks: ['Kết quả công nhận phụ thuộc hồ sơ cá nhân', 'Có thể phát sinh yêu cầu bổ sung từ Đức', 'Thời gian xử lý không giống nhau giữa từng hồ sơ']
  },
  {
    id: 'au-pair-hamburg-2026',
    title: 'Au-pair Đức khu vực Hamburg',
    program: 'Au-pair',
    career: 'Trải nghiệm văn hóa',
    location: 'Hamburg, Đức',
    seats: '05 gia đình tiếp nhận',
    salary: 'Theo quy định chương trình Au-pair',
    language: 'A1 - A2',
    intake: 'Dự kiến 07-10/2026',
    status: 'Còn tuyển',
    highlight: 'Lựa chọn cho người muốn học tiếng, trải nghiệm đời sống Đức và chuẩn bị lộ trình tiếp theo.',
    benefits: ['Định hướng kỳ vọng trước khi tham gia', 'Chuẩn bị hồ sơ cá nhân và phỏng vấn gia đình', 'Theo dõi lịch hẹn và giấy tờ cần bổ sung'],
    requirements: ['Phù hợp độ tuổi chương trình', 'Có động lực học tiếng và sống cùng gia đình bản xứ', 'Thông tin cá nhân rõ ràng'],
    documents: ['Hộ chiếu', 'Ảnh', 'Thư động lực', 'CV', 'Chứng chỉ tiếng Đức nếu có'],
    risks: ['Sự phù hợp với gia đình cần được trao đổi kỹ', 'Lịch tiếp nhận phụ thuộc gia đình bản xứ', 'Không nên tham gia nếu mục tiêu không phù hợp bản chất Au-pair']
  },
  {
    id: 'thoi-vu-8-thang-nong-nghiep-2026',
    title: 'Chương trình thời vụ 8 tháng ngành nông nghiệp',
    program: '8 tháng',
    career: 'Nông nghiệp thời vụ',
    location: 'Sachsen, Đức',
    seats: '20 chỉ tiêu',
    salary: 'Theo hợp đồng thời vụ',
    language: 'Cơ bản theo yêu cầu đơn',
    intake: 'Dự kiến quý III/2026',
    status: 'Còn tuyển',
    highlight: 'Dành cho người muốn làm việc ngắn hạn và cần chuẩn bị đúng kế hoạch tài chính, thời gian.',
    benefits: ['Làm rõ điều kiện trước khi đăng ký', 'Checklist hồ sơ ngắn hạn', 'Nhắc deadline và trạng thái tiếp nhận'],
    requirements: ['Sức khỏe phù hợp công việc', 'Hồ sơ cá nhân đầy đủ', 'Hiểu rõ tính chất thời vụ'],
    documents: ['Hộ chiếu', 'Hồ sơ cá nhân', 'Giấy tờ sức khỏe nếu đơn yêu cầu'],
    risks: ['Đơn hàng có thể thay đổi số lượng', 'Lịch nhập cảnh phụ thuộc đối tác', 'Cần chuẩn bị tài chính đúng kế hoạch']
  }
];

const PROCESS_STEPS = [
  ['01', 'Đăng ký thông tin', 'Ghi nhận nhu cầu, nguồn khách và chương trình quan tâm.'],
  ['02', 'Tư vấn và kiểm tra điều kiện', 'Đánh giá tiếng Đức, bằng cấp, tài chính, thời gian và mức phù hợp.'],
  ['03', 'Học tiếng Đức / hoàn thiện hồ sơ', 'Theo dõi trình độ, checklist giấy tờ, deadline và file cần bổ sung.'],
  ['04', 'Phỏng vấn đối tác / nhận hợp đồng', 'Chuẩn bị phỏng vấn, cập nhật kết quả và hợp đồng nếu đạt.'],
  ['05', 'Xin visa / theo dõi tiến độ', 'Quản lý lịch hẹn, bổ sung giấy tờ, trạng thái visa và ghi chú xử lý.'],
  ['06', 'Bay Đức / hỗ trợ sau bay', 'Tiếp tục đồng hành sau nhập cảnh, ổn định ban đầu và kết nối cần thiết.']
];

const RISKS = [
  ['Không đạt trình độ tiếng Đức đúng hạn', 'DCC kiểm tra đầu vào, chia mục tiêu học theo mốc, cập nhật tiến độ lớp và nhắc lịch thi/chứng chỉ.'],
  ['Hồ sơ cá nhân thiếu hoặc sai thông tin', 'DCC dùng checklist giấy tờ, nhật ký xử lý và bước rà soát trước khi gửi đối tác hoặc cơ quan liên quan.'],
  ['Bị yêu cầu bổ sung giấy tờ từ phía Đức', 'DCC ghi nhận yêu cầu bổ sung, phân công người phụ trách và nhắc deadline để hạn chế bỏ sót.'],
  ['Lịch visa thay đổi hoặc thời gian xử lý kéo dài', 'DCC minh bạch trạng thái, cập nhật lịch hẹn và không hứa hẹn thời gian ngoài khả năng kiểm soát.'],
  ['Đơn hàng thay đổi số lượng hoặc thời gian tiếp nhận', 'DCC hiển thị trạng thái đơn, số lượng còn tuyển và tư vấn phương án thay thế khi cần.'],
  ['Không phù hợp ngành nghề sau khi tư vấn', 'DCC ưu tiên tư vấn đúng diện, đánh giá năng lực, sức khỏe, kỳ vọng và kế hoạch dài hạn trước khi đăng ký.'],
  ['Rủi ro tài chính nếu không chuẩn bị đúng kế hoạch', 'DCC trao đổi các khoản dự kiến, mốc cần chuẩn bị và cảnh báo trước các nghĩa vụ tài chính quan trọng.'],
  ['Làm việc với đơn vị không minh bạch', 'DCC xây hệ thống theo dõi hồ sơ, phân quyền dữ liệu, ghi chú chăm sóc và cho học viên/đối tác xem phần thuộc quyền.']
];

const PORTAL_STAGES = ['Mới đăng ký', 'Đã tư vấn', 'Đang học tiếng', 'Đang hoàn thiện hồ sơ', 'Đã gửi đối tác', 'Chờ phỏng vấn', 'Đã có hợp đồng', 'Đang xử lý visa', 'Đã có visa', 'Đã bay', 'Đang hỗ trợ sau bay'];

const MODULES = [
  ['Dashboard tổng quan', 'Khách mới hôm nay, khách chưa chăm sóc, hồ sơ bị chậm, visa cần theo dõi, công việc quá hạn.'],
  ['Quản lý khách hàng', 'Danh sách khách, bộ lọc chương trình, trạng thái chăm sóc, người phụ trách, nguồn khách.'],
  ['Quản lý hồ sơ', 'Checklist giấy tờ, file đã nhận/còn thiếu, deadline, nhật ký xử lý và phân công.'],
  ['Quản lý đơn hàng', 'Tạo/sửa/xóa đơn, bật/tắt hiển thị công khai, số lượng còn tuyển, ứng viên đăng ký.'],
  ['Quản lý học tiếng', 'Lớp A1/A2/B1/B2, giáo viên, điểm danh, kết quả kiểm tra, mục tiêu chứng chỉ.'],
  ['Quản lý visa', 'Diện visa, ngày nộp, lịch hẹn, trạng thái bổ sung, kết quả, file visa.'],
  ['Quản lý công việc', 'Task, người phụ trách, deadline, ưu tiên, trạng thái và nhắc việc.'],
  ['Quản lý đối tác', 'Danh sách đối tác, học viên đã gửi, tỷ lệ chuyển đổi và trạng thái hợp tác.']
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function slugPath() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  return hash.split('?')[0];
}

function go(path) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPage() {
  const path = slugPath();
  const root = $('#appRoot');
  if (path.startsWith('/don-hang/')) {
    root.innerHTML = renderOrderDetail(path.split('/').pop());
  } else if (path === '/' || path === '') {
    root.innerHTML = renderHome();
  } else if (path === '/don-hang') {
    root.innerHTML = renderOrdersPage();
  } else if (path === '/dang-ky' || path === '/register') {
    root.innerHTML = renderRegisterPage();
  } else if (path === '/hoc-vien' || path === '/portal') {
    root.innerHTML = renderStudentPortal();
  } else if (path === '/partner') {
    root.innerHTML = renderPartnerPortal();
  } else if (path === '/app') {
    root.innerHTML = renderInternalApp();
  } else if (path === '/tra-cuu-ho-so') {
    root.innerHTML = renderLookupPage();
  } else if (path === '/rui-ro-can-biet' || path === '/ruxuiro-can-biet') {
    root.innerHTML = renderRisksPage();
  } else if (path === '/quy-trinh-ho-so') {
    root.innerHTML = renderProcessPage();
  } else if (path === '/gioi-thieu' || path === '/lien-he') {
    root.innerHTML = renderAboutContact(path);
  } else {
    const program = PROGRAMS.find((item) => `/${item.slug}` === path || path === '/chuong-trinh');
    root.innerHTML = path === '/chuong-trinh' ? renderProgramsPage() : renderProgramDetail(program || PROGRAMS[0]);
  }
  bindInteractions();
}

function sectionHeader(eyebrow, title, text = '') {
  return `<div class="section-head"><div><p class="eyebrow">${eyebrow}</p><h2>${title}</h2></div>${text ? `<p class="muted section-copy">${text}</p>` : ''}</div>`;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <p class="eyebrow">Cầu nối Việt Nam - Đức có hệ thống</p>
          <h1>Lộ trình sang Đức rõ ràng hơn, hồ sơ minh bạch hơn, tương lai được chuẩn bị bài bản hơn.</h1>
          <p class="hero-text">Deutsch Connect Center hỗ trợ học tiếng Đức, tuyển sinh du học nghề Đức, chuyển đổi văn bằng 18B/18A, Au-pair, thời vụ 8 tháng, hồ sơ visa và kết nối đối tác tại Đức.</p>
          <div class="hero-actions">
            <a class="btn primary" href="#/dang-ky">Đăng ký tư vấn ngay</a>
            <a class="btn secondary" href="#/don-hang">Xem đơn hàng đang tuyển</a>
            <a class="btn ghost" href="#/tra-cuu-ho-so">Tra cứu tiến độ hồ sơ</a>
          </div>
          <div class="trust-row">
            <span>Du học nghề</span><span>18B/18A</span><span>Au-pair</span><span>Thời vụ 8 tháng</span><span>A1-B2</span>
          </div>
        </div>
        <div class="hero-visual" aria-label="Minh họa hệ thống hồ sơ DCC">
          <div class="visual-card main-card">
            <span class="status-dot"></span>
            <p>Hồ sơ học viên</p>
            <strong>Đang xử lý visa</strong>
            <small>3 giấy tờ cần theo dõi trong tuần này</small>
          </div>
          <div class="visual-photo"></div>
          <div class="stats-card"><strong>05</strong><span>nhóm chương trình: Du học nghề, 18B/18A, Au-pair, 8 tháng, học tiếng</span></div>
          <div class="stats-card light"><strong>Online</strong><span>theo dõi checklist, deadline, ghi chú được phép hiển thị</span></div>
        </div>
      </div>
    </section>
    ${renderProgramsSection()}
    ${renderOrdersSection()}
    ${renderProcessSection()}
    ${renderRisksSection(true)}
    ${renderGallerySection()}
    ${renderWhySection()}
    ${renderRegisterSection()}
  `;
}

function renderProgramsSection() {
  return `
    <section class="section" id="programs">
      <div class="container">
        ${sectionHeader('Chọn lộ trình phù hợp với bạn', 'DCC tư vấn theo điều kiện thực tế, không ép chọn sai diện.', 'Mỗi card tập trung vào đối tượng, điều kiện và bước tiếp theo để học viên/phụ huynh hiểu nhanh trong 5 giây.')}
        <div class="program-grid">${PROGRAMS.map(renderProgramCard).join('')}</div>
      </div>
    </section>`;
}

function renderProgramCard(item) {
  return `<article class="program-card">
    <div class="program-icon">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <div class="tag-row">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
    <a class="text-link" href="#/${item.slug}">${item.cta} →</a>
  </article>`;
}

function renderOrdersSection() {
  return `
    <section class="section orders-section" id="orders">
      <div class="container">
        ${sectionHeader('Đơn hàng đang tuyển', 'Cơ hội được trình bày rõ điều kiện, trạng thái và rủi ro.', 'Bộ lọc giúp học viên nhanh chóng chọn đúng chương trình, ngành nghề, bang/thành phố, yêu cầu tiếng Đức và thời gian dự kiến.')}
        ${renderFilters()}
        <div id="ordersList" class="orders-list"></div>
      </div>
    </section>`;
}

function renderFilters() {
  const options = (items) => ['Tất cả', ...new Set(items)].map((item) => `<option>${item}</option>`).join('');
  return `<div class="filters" aria-label="Bộ lọc đơn hàng">
    <label>Loại chương trình<select data-filter="program">${options(ORDERS.map((o) => o.program))}</select></label>
    <label>Ngành nghề<select data-filter="career">${options(ORDERS.map((o) => o.career))}</select></label>
    <label>Bang/thành phố<select data-filter="location">${options(ORDERS.map((o) => o.location))}</select></label>
    <label>Yêu cầu tiếng Đức<select data-filter="language">${options(ORDERS.map((o) => o.language))}</select></label>
    <label>Thời gian<select data-filter="intake">${options(ORDERS.map((o) => o.intake))}</select></label>
    <label>Trạng thái<select data-filter="status">${options(ORDERS.map((o) => o.status))}</select></label>
  </div>`;
}

function renderOrderCards(list = ORDERS) {
  return list.map((item) => `<article class="order-card">
    <div class="order-top"><span class="badge ${item.status === 'Sắp hết' ? 'warning' : ''}">${item.status}</span><span>${item.program}</span></div>
    <h3>${item.title}</h3>
    <p>${item.highlight}</p>
    <div class="order-meta">
      <div><b>Địa điểm</b><span>${item.location}</span></div>
      <div><b>Ngành/nghề</b><span>${item.career}</span></div>
      <div><b>Số lượng</b><span>${item.seats}</span></div>
      <div><b>Lương/hỗ trợ</b><span>${item.salary}</span></div>
      <div><b>Tiếng Đức</b><span>${item.language}</span></div>
      <div><b>Thời gian</b><span>${item.intake}</span></div>
    </div>
    <div class="card-actions"><a class="btn secondary" href="#/don-hang/${item.id}">Xem chi tiết</a><a class="btn primary" href="#/dang-ky?order=${item.id}">Đăng ký đơn này</a></div>
  </article>`).join('');
}

function renderProcessSection() {
  return `<section class="section process-section" id="process"><div class="container">${sectionHeader('Quy trình 6 bước', 'Từ đăng ký đến visa và hỗ trợ sau bay.', 'Timeline giúp học viên, phụ huynh, đối tác và nhân viên nhìn cùng một tiến độ, giảm nhầm lẫn trong xử lý hồ sơ.')}
    <div class="timeline">${PROCESS_STEPS.map(([no, title, text]) => `<article><span>${no}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
  </div></section>`;
}

function renderRisksSection(short = false) {
  const list = short ? RISKS.slice(0, 4) : RISKS;
  return `<section class="section risks-section" id="risks"><div class="container">${sectionHeader('Rủi ro cần biết trước khi tham gia', 'Minh bạch rủi ro để chuẩn bị tốt hơn, không làm khách sợ.', 'DCC không hứa hẹn quá đà. Trung tâm giảm rủi ro bằng kiểm tra hồ sơ từ đầu, checklist, nhắc deadline, ghi chú chăm sóc và phân quyền xử lý nội bộ.')}
    <div class="risk-list">${list.map(([risk, support]) => `<details class="risk-item"><summary>${risk}</summary><div><h4>DCC hỗ trợ giảm rủi ro bằng cách nào?</h4><p>${support}</p></div></details>`).join('')}</div>
    ${short ? '<a class="btn secondary center-btn" href="#/rui-ro-can-biet">Xem đầy đủ các rủi ro</a>' : ''}
  </div></section>`;
}

function renderGallerySection() {
  const items = ['Lớp học tiếng Đức', 'Học viên', 'Buổi tư vấn', 'Hoạt động trung tâm', 'Đối tác/đơn hàng', 'Nước Đức truyền cảm hứng'];
  return `<section class="section gallery-section"><div class="container">${sectionHeader('Hình ảnh trung tâm', 'Không gian học tập, tư vấn và kết nối Đức - Việt.', 'Gallery hiện dùng khung minh họa; admin có thể upload ảnh thật từ app nội bộ hoặc Supabase Storage trong giai đoạn tích hợp tiếp theo.')}
    <div class="gallery-grid">${items.map((item, index) => `<figure class="gallery-item tone-${index + 1}"><span>${item}</span></figure>`).join('')}</div>
  </div></section>`;
}

function renderWhySection() {
  const reasons = ['Lộ trình rõ ràng', 'Hồ sơ minh bạch', 'Theo dõi tiến độ online', 'Tư vấn đúng diện', 'Đồng hành học tiếng', 'Không bỏ sót khách hàng', 'Có hệ thống quản lý nội bộ', 'Cảnh báo rủi ro trước khi tham gia', 'Kết nối đối tác Đức'];
  return `<section class="section why-section"><div class="container">${sectionHeader('Vì sao chọn Deutsch Connect Center?', 'Uy tín đến từ hệ thống, quy trình và cách nói thật với học viên.', 'DCC tập trung vào dữ liệu rõ ràng, phân công trách nhiệm và tiến độ hồ sơ có thể theo dõi.')}
    <div class="why-grid">${reasons.map((item) => `<article><span>✓</span><h3>${item}</h3><p>Quy trình được thiết kế để học viên, phụ huynh và đối tác hiểu việc gì đang diễn ra, ai phụ trách và bước tiếp theo là gì.</p></article>`).join('')}</div>
  </div></section>`;
}

function renderRegisterSection() {
  return `<section class="section register-section" id="register"><div class="container register-grid"><div><p class="eyebrow">Đăng ký tư vấn</p><h2>Điền từng bước, không quá dài trên một màn hình.</h2><p class="muted">Sau khi gửi, hệ thống lưu lead vào Supabase với trạng thái “Khách mới đăng ký”, nguồn “Website” và chương trình quan tâm.</p><div class="secure-note">🔐 Frontend chỉ dùng anon public key. Service role key phải giữ ở server/Supabase Edge Function.</div></div>${renderLeadForm()}</div></section>`;
}

function renderLeadForm() {
  return `<form id="leadForm" class="lead-form">
    <div class="form-progress"><span class="active">1</span><span>2</span><span>3</span><span>4</span></div>
    <fieldset data-step="1" class="active"><legend>Bước 1: Thông tin cá nhân</legend><label>Họ tên<input name="full_name" required placeholder="Nguyễn Văn A" /></label><label>Ngày sinh<input name="birth_date" type="date" /></label><label>Số điện thoại<input name="phone" required placeholder="09xxxxxxxx" /></label><label>Email<input name="email" type="email" placeholder="email@example.com" /></label><label>Tỉnh/thành phố<input name="province" placeholder="Ví dụ: Hà Nội" /></label><label>Zalo/Facebook<input name="social_contact" placeholder="Link hoặc số Zalo" /></label></fieldset>
    <fieldset data-step="2"><legend>Bước 2: Chọn chương trình quan tâm</legend><label>Chương trình<select name="program_interest" required><option value="">Chọn chương trình</option><option>Du học nghề Đức</option><option>Chuyển đổi văn bằng 18B</option><option>18A</option><option>Au-pair Đức</option><option>Thời vụ 8 tháng</option><option>Học tiếng Đức</option><option>Chưa biết, cần tư vấn</option></select></label></fieldset>
    <fieldset data-step="3"><legend>Bước 3: Trình độ hiện tại</legend><label>Trình độ tiếng Đức<select name="german_level"><option>Chưa học</option><option>A1</option><option>A2</option><option>B1</option><option>B2</option></select></label><label>Bằng cấp cao nhất<input name="highest_education" placeholder="THPT / Trung cấp / Cao đẳng / Đại học" /></label><label>Ngành học/nghề hiện tại<input name="current_career" /></label><label>Kinh nghiệm làm việc<textarea name="work_experience" rows="3"></textarea></label><label>Tình trạng hộ chiếu<select name="passport_status"><option>Chưa có</option><option>Đang làm</option><option>Đã có</option></select></label><label>Tình trạng hồ sơ<input name="document_status" placeholder="Đã có bằng, thiếu hộ chiếu..." /></label></fieldset>
    <fieldset data-step="4"><legend>Bước 4: Mục tiêu và thời gian mong muốn</legend><label>Muốn đi Đức khi nào<input name="desired_departure" placeholder="Ví dụ: 2026 hoặc sau khi có B1" /></label><label>Ngành mong muốn<input name="desired_career" /></label><label>Thành phố/bang mong muốn<input name="desired_location" /></label><label>Ghi chú thêm<textarea name="note" rows="4" placeholder="Điều anh/chị muốn DCC tư vấn kỹ hơn"></textarea></label></fieldset>
    <div class="form-actions"><button class="btn secondary" type="button" data-prev disabled>Quay lại</button><button class="btn primary" type="button" data-next>Tiếp tục</button><button class="btn primary hidden" type="submit">Gửi thông tin</button></div><p id="formMessage" class="form-message" role="status"></p>
  </form>`;
}

function renderOrdersPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Đơn hàng</p><h1>Đơn hàng đang tuyển</h1><p>Các chương trình được trình bày bằng card rõ ràng, tối ưu cho điện thoại và có bộ lọc theo nhu cầu.</p></div></section>${renderOrdersSection()}`; }
function renderProgramsPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Chương trình</p><h1>Chọn đúng diện trước khi chuẩn bị hồ sơ</h1><p>DCC ưu tiên đánh giá điều kiện thực tế, tránh hứa hẹn quá đà và giúp học viên hiểu rõ việc cần làm.</p></div></section>${renderProgramsSection()}`; }
function renderRegisterPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Đăng ký</p><h1>Cổng đăng ký khách hàng mới</h1><p>Sau khi gửi form, bạn nhận mã tra cứu tạm thời để trao đổi với DCC và có thể được tạo tài khoản học viên trong giai đoạn xử lý hồ sơ.</p></div></section>${renderRegisterSection()}`; }
function renderRisksPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Minh bạch</p><h1>Rủi ro cần biết trước khi tham gia</h1><p>DCC trình bày rủi ro một cách nghiêm túc để học viên chuẩn bị đúng, không tạo kỳ vọng sai.</p></div></section>${renderRisksSection(false)}`; }
function renderProcessPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Quy trình hồ sơ</p><h1>6 bước theo dõi từ đăng ký đến sau bay</h1><p>Quy trình dùng chung cho tư vấn, đối tác, học viên và nhân viên nội bộ.</p></div></section>${renderProcessSection()}`; }

function renderProgramDetail(program) {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">${program.title}</p><h1>${program.summary}</h1><p>${program.tags.join(' • ')}</p><div class="hero-actions"><a class="btn primary" href="#/dang-ky">${program.cta}</a><a class="btn secondary" href="#/don-hang">Xem đơn hàng phù hợp</a></div></div></section>${renderProcessSection()}${renderRegisterSection()}`;
}

function renderOrderDetail(id) {
  const order = ORDERS.find((item) => item.id === id) || ORDERS[0];
  const block = (title, items) => `<section><h2>${title}</h2><ul class="check-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul></section>`;
  return `<section class="page-hero order-detail-hero"><div class="container"><p class="eyebrow">Chi tiết đơn hàng</p><h1>${order.title}</h1><p>${order.highlight}</p><div class="hero-actions"><a class="btn primary" href="#/dang-ky?order=${order.id}">Đăng ký tư vấn đơn này</a><a class="btn secondary" href="#/don-hang">Quay lại danh sách đơn</a></div></div></section><section class="section"><div class="container detail-grid"><article class="detail-main"><section><h2>Tổng quan chương trình</h2><p>${order.highlight}</p><div class="order-meta detail-meta"><div><b>Địa điểm</b><span>${order.location}</span></div><div><b>Công việc/ngành học</b><span>${order.career}</span></div><div><b>Số lượng</b><span>${order.seats}</span></div><div><b>Yêu cầu tiếng Đức</b><span>${order.language}</span></div><div><b>Thời gian dự kiến</b><span>${order.intake}</span></div><div><b>Chi phí/lương/hỗ trợ</b><span>${order.salary}</span></div></div></section>${block('Quyền lợi', order.benefits)}${block('Điều kiện tham gia', order.requirements)}${block('Hồ sơ cần chuẩn bị', order.documents)}${block('Rủi ro/các điểm cần lưu ý', order.risks)}<section><h2>Câu hỏi thường gặp</h2><details><summary>DCC có cam kết 100% visa không?</summary><p>Không. DCC không dùng ngôn ngữ bao đậu visa. Trung tâm hỗ trợ chuẩn bị hồ sơ nghiêm túc và minh bạch trạng thái xử lý.</p></details><details><summary>Có thể theo dõi tiến độ online không?</summary><p>Có. Khi hồ sơ được tạo trong hệ thống, học viên chỉ xem được thông tin của chính mình theo phân quyền.</p></details></section></article><aside class="detail-side"><h3>Lộ trình xử lý</h3>${PROCESS_STEPS.map(([no, title]) => `<p><b>${no}</b> ${title}</p>`).join('')}<a class="btn primary full" href="#/dang-ky">Đăng ký tư vấn</a></aside></div></section>`;
}

function renderStudentPortal() {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">Cổng học viên</p><h1>Dashboard cá nhân chỉ xem hồ sơ của chính mình</h1><p>Đăng nhập bằng email/số điện thoại ở giai đoạn tích hợp Supabase Auth. RLS bắt buộc lọc theo user_id.</p></div></section><section class="section"><div class="container portal-layout"><aside class="portal-card"><h2>Thông tin cá nhân</h2><p><b>Chương trình:</b> Du học nghề Đức</p><p><b>Trạng thái hiện tại:</b> Đang hoàn thiện hồ sơ</p><p><b>Deadline gần nhất:</b> Bổ sung hộ chiếu</p></aside><div><div class="stage-timeline">${PORTAL_STAGES.map((stage, idx) => `<span class="${idx <= 3 ? 'done' : ''}">${stage}</span>`).join('')}</div><div class="portal-grid">${['Checklist giấy tờ', 'Trạng thái học tiếng', 'Phỏng vấn', 'Hợp đồng', 'Visa', 'Lịch hẹn', 'Ghi chú được phép hiển thị', 'File cần bổ sung'].map((item) => `<article><h3>${item}</h3><p>Dữ liệu sẽ lấy từ Supabase theo quyền student/customer.</p></article>`).join('')}</div></div></div></section>`;
}

function renderPartnerPortal() {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">Cổng đối tác</p><h1>Đối tác gửi học viên và theo dõi học viên thuộc chính mình</h1><p>Partner chỉ xem dữ liệu có partner_id của mình. Không xem được học viên của đối tác khác.</p></div></section><section class="section"><div class="container portal-layout"><aside class="portal-card"><h2>Thống kê đối tác</h2>${['Tổng học viên đã gửi: 24', 'Đang tư vấn: 7', 'Đang học tiếng: 8', 'Đã có hợp đồng: 3', 'Đang visa: 4', 'Đã bay: 2'].map((item) => `<p>${item}</p>`).join('')}</aside><div>${renderPartnerForm()}<div class="table-card"><h2>Danh sách học viên mẫu</h2><table><thead><tr><th>Học viên</th><th>Chương trình</th><th>Trạng thái</th><th>Thiếu hồ sơ</th></tr></thead><tbody><tr><td>Nguyễn Văn A</td><td>Du học nghề</td><td>Đang học tiếng</td><td>Hộ chiếu</td></tr><tr><td>Trần Thị B</td><td>Au-pair</td><td>Chờ phỏng vấn</td><td>Không</td></tr></tbody></table></div></div></div></section>`;
}

function renderPartnerForm() {
  return `<form class="lead-form compact-form"><legend>Form đối tác gửi học viên</legend><label>Tên đối tác<input name="partner_name"></label><label>Mã đối tác<input name="partner_code"></label><label>Họ tên học viên<input name="student_name"></label><label>Số điện thoại<input name="phone"></label><label>Email<input name="email"></label><label>Ngày sinh<input type="date" name="birth_date"></label><label>Chương trình quan tâm<input name="program_interest"></label><label>Trình độ tiếng Đức<input name="german_level"></label><label>Bằng cấp<input name="education"></label><label>Ghi chú<textarea rows="3"></textarea></label><label>File đính kèm<input type="file" disabled><small>Kích hoạt sau khi cấu hình Supabase Storage.</small></label><button class="btn primary" type="button">Lưu nháp trong bản demo</button></form>`;
}

function renderInternalApp() {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">App nội bộ</p><h1>Operating Center cho nhân viên DCC</h1><p>Vai trò: admin, manager, staff, teacher, partner, student/customer. Dữ liệu nhạy cảm được hạn chế theo role và RLS.</p><div class="hero-actions"><a class="btn primary" href="${(window.DCC_PUBLIC_CONFIG || {}).STAFF_APP_URL || 'https://app.deutschconnectcenter.com'}">Mở subdomain app</a></div></div></section><section class="section"><div class="container"><div class="role-grid">${['admin: xem và quản lý tất cả', 'manager: xem phần được giao', 'staff: xem khách/hồ sơ assign_to', 'teacher: lớp/học viên được phân công', 'partner: học viên do mình gửi', 'student/customer: hồ sơ của chính mình'].map((role) => `<span>${role}</span>`).join('')}</div><div class="module-grid">${MODULES.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>`;
}

function renderLookupPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Tra cứu hồ sơ</p><h1>Tra cứu trạng thái ban đầu bằng mã hoặc tài khoản</h1><p>Giai đoạn tích hợp Supabase Auth sẽ cho phép học viên đăng nhập để xem đúng hồ sơ cá nhân.</p></div></section><section class="section"><div class="container narrow"><form class="lead-form"><label>Mã tra cứu / email / số điện thoại<input placeholder="DCC-2026-xxxxx"></label><button class="btn primary" type="button">Tra cứu demo</button><p class="muted">Bản demo không hiển thị dữ liệu nhạy cảm khi chưa xác thực.</p></form></div></section>`; }
function renderAboutContact(path) { return `<section class="page-hero"><div class="container"><p class="eyebrow">${path === '/gioi-thieu' ? 'Giới thiệu' : 'Liên hệ'}</p><h1>Deutsch Connect Center</h1><p>Trung tâm hỗ trợ học tiếng Đức, tuyển sinh du học nghề, chuyển đổi văn bằng 18B/18A, Au-pair, thời vụ 8 tháng, hồ sơ visa và kết nối đối tác tại Đức.</p></div></section>${renderWhySection()}${renderRegisterSection()}`; }

function bindInteractions() {
  const ordersList = $('#ordersList');
  if (ordersList) {
    const applyFilters = () => {
      const values = Object.fromEntries($$('[data-filter]').map((select) => [select.dataset.filter, select.value]));
      const filtered = ORDERS.filter((order) => Object.entries(values).every(([key, value]) => value === 'Tất cả' || order[key] === value));
      ordersList.innerHTML = filtered.length ? renderOrderCards(filtered) : '<p class="empty-state">Chưa có đơn phù hợp bộ lọc. Vui lòng chọn lại hoặc đăng ký tư vấn.</p>';
    };
    $$('[data-filter]').forEach((select) => select.addEventListener('change', applyFilters));
    applyFilters();
  }

  const form = $('#leadForm');
  if (form) bindLeadForm(form);
}

function bindLeadForm(form) {
  let step = 1;
  const max = 4;
  const update = () => {
    $$('fieldset[data-step]', form).forEach((fieldset) => fieldset.classList.toggle('active', Number(fieldset.dataset.step) === step));
    $$('.form-progress span', form).forEach((item, index) => item.classList.toggle('active', index + 1 <= step));
    $('[data-prev]', form).disabled = step === 1;
    $('[data-next]', form).classList.toggle('hidden', step === max);
    $('[type="submit"]', form).classList.toggle('hidden', step !== max);
  };
  $('[data-next]', form).addEventListener('click', () => {
    const currentFields = $$(`[data-step="${step}"] input, [data-step="${step}"] select, [data-step="${step}"] textarea`, form);
    if (currentFields.some((field) => !field.checkValidity())) { currentFields.find((field) => !field.checkValidity()).reportValidity(); return; }
    step = Math.min(max, step + 1); update();
  });
  $('[data-prev]', form).addEventListener('click', () => { step = Math.max(1, step - 1); update(); });
  form.addEventListener('submit', submitLead);
  update();
}

function setMessage(text, type = '') {
  const formMessage = $('#formMessage');
  if (!formMessage) return;
  formMessage.textContent = text;
  formMessage.className = `form-message ${type}`;
}

async function submitLead(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const payload = Object.fromEntries(data.entries());
  payload.source = 'Website';
  payload.status = 'Khách mới đăng ký';
  payload.program_interest = payload.program_interest || 'Chưa biết, cần tư vấn';
  payload.lookup_code = `DCC-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  try {
    setMessage('Đang gửi thông tin...', '');
    await submitLeadToSupabase(payload);
    event.currentTarget.reset();
    setMessage(`Cảm ơn anh/chị. DCC đã nhận thông tin. Mã tra cứu tạm thời: ${payload.lookup_code}`, 'success');
  } catch (error) {
    console.error(error);
    setMessage(`Chưa gửi được: ${error.message}. Nếu chưa cấu hình Supabase, đây là cảnh báo bình thường khi chạy demo.`, 'error');
  }
}

async function submitLeadToSupabase(payload) {
  const config = window.DCC_PUBLIC_CONFIG || {};
  if (!config.SUPABASE_URL || !config.SUPABASE_ANON_KEY || config.SUPABASE_ANON_KEY.includes('DAN_SUPABASE')) {
    throw new Error('Chưa cấu hình Supabase anon key trong config.js');
  }
  const response = await fetch(`${config.SUPABASE_URL}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: config.SUPABASE_ANON_KEY,
      Authorization: `Bearer ${config.SUPABASE_ANON_KEY}`,
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error(await response.text() || 'Không lưu được dữ liệu vào Supabase');
}

$('.menu-toggle')?.addEventListener('click', (event) => {
  const nav = $('.nav-links');
  nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', nav.classList.contains('open'));
});

window.addEventListener('hashchange', renderPage);
renderPage();
