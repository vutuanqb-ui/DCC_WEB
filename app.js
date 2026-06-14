const PROGRAMS = [
  {
    slug: 'du-hoc-nghe-duc',
    icon: '🎓',
    title: 'Du học nghề Đức',
    summary: 'Đào tạo nghề kép (Ausbildung): vừa học tại trường nghề vừa thực hành có lương tại doanh nghiệp Đức. Miễn học phí trường công, mở đường làm việc và định cư lâu dài.',
    tags: ['Nhà hàng khách sạn', 'Điều dưỡng', 'Bếp', 'Bán hàng', 'Logistics', 'Kỹ thuật', 'Bánh', 'Thịt'],
    cta: 'Xem đơn du học nghề'
  },
  {
    slug: '18b-18a',
    icon: '📘',
    title: 'Chuyển đổi văn bằng 18B / 18A',
    summary: 'Diện lao động tay nghề theo Luật Nhập cư Đức: §18a cho người có bằng nghề, §18b cho người có bằng đại học. DCC kiểm tra điều kiện công nhận văn bằng và hỗ trợ tìm hợp đồng việc làm.',
    tags: ['Công nhận văn bằng', 'Hồ sơ nghề', 'Hợp đồng lao động', 'Visa việc làm'],
    cta: 'Kiểm tra điều kiện 18B/18A'
  },
  {
    slug: 'au-pair-duc',
    icon: '🏡',
    title: 'Au-pair Đức',
    summary: 'Sống cùng một gia đình Đức tới 12 tháng, phụ giúp chăm sóc trẻ và nhận tiền tiêu vặt hằng tháng. Cách nhẹ nhàng để học tiếng và trải nghiệm đời sống Đức trước khi đi xa hơn.',
    tags: ['A1/A2', 'Gia đình bản xứ', 'Thư động lực', 'Lộ trình sau Au-pair'],
    cta: 'Đăng ký tư vấn Au-pair'
  },
  {
    slug: 'thoi-vu-8-thang',
    icon: '🧭',
    title: 'Chương trình thời vụ 8 tháng',
    summary: 'Hợp đồng lao động thời vụ theo mùa tại Đức (nông nghiệp, dịch vụ…). Thời gian ngắn, thu nhập rõ ràng — phù hợp người muốn đi nhanh và cần chuẩn bị đúng kế hoạch tài chính.',
    tags: ['8 tháng', 'Lao động mùa vụ', 'Lịch nhập cảnh', 'Hồ sơ rõ ràng'],
    cta: 'Xem chương trình 8 tháng'
  },
  {
    slug: 'hoc-tieng-duc',
    icon: '🇩🇪',
    title: 'Đăng ký học tiếng Đức',
    summary: 'Lớp A1–B2 theo khung tham chiếu châu Âu (CEFR): kiểm tra đầu vào, lộ trình cá nhân hóa và theo sát tiến độ đến ngày thi chứng chỉ.',
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
  ['01', 'Đăng ký thông tin', 'Bạn để lại thông tin và chương trình đang quan tâm.'],
  ['02', 'Tư vấn & kiểm tra điều kiện', 'Đánh giá tiếng Đức, bằng cấp, tài chính và thời gian để chọn đúng diện.'],
  ['03', 'Học tiếng & hoàn thiện hồ sơ', 'Học theo lộ trình, chuẩn bị giấy tờ theo checklist rõ ràng.'],
  ['04', 'Phỏng vấn & nhận hợp đồng', 'Chuẩn bị phỏng vấn với đối tác và ký hợp đồng khi đạt.'],
  ['05', 'Xin visa & theo dõi tiến độ', 'Hoàn thiện hồ sơ visa, theo dõi lịch hẹn và trạng thái xử lý.'],
  ['06', 'Sang Đức & hỗ trợ sau bay', 'Đồng hành sau khi nhập cảnh, ổn định những ngày đầu tại Đức.']
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
  } else if (path === '/hoc-vien' || path === '/portal' || path === '/dang-nhap') {
    root.innerHTML = renderLoginHub();
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
          <p class="eyebrow">Cầu nối Việt Nam – Đức</p>
          <h1>Hành trình sang Đức <em>rõ ràng</em>, hồ sơ <em>minh bạch</em>, tương lai <em>vững vàng</em>.</h1>
          <p class="hero-text">Deutsch Connect Center đồng hành cùng bạn trọn hành trình: học tiếng Đức, du học nghề, chuyển đổi văn bằng 18B/18A, Au-pair, thời vụ, hồ sơ visa và kết nối việc làm tại Đức.</p>
          <div class="hero-actions">
            <a class="btn primary" href="#/don-hang">Đăng ký tư vấn ngay</a>
            <a class="btn secondary" href="#/dang-ky">Đăng ký tài khoản</a>
            <a class="btn ghost" href="#/tra-cuu-ho-so">Tra cứu tiến độ hồ sơ</a>
          </div>
          <div class="trust-row">
            <span>Du học nghề</span><span>18B/18A</span><span>Au-pair</span><span>Thời vụ 8 tháng</span><span>A1-B2</span>
          </div>
        </div>
        <div class="hero-visual" aria-label="Hình ảnh nước Đức và tiến độ hồ sơ">
          <div class="visual-photo"></div>
          <div class="visual-card main-card">
            <div class="mc-head"><span class="status-dot"></span> Hồ sơ của bạn</div>
            <strong>Đang xử lý visa</strong>
            <div class="mc-progress"><span></span></div>
            <small>3 giấy tờ cần bổ sung trong tuần</small>
          </div>
          <div class="stats-card"><strong>5</strong><span>chương trình: du học nghề, 18B/18A, Au-pair, thời vụ, học tiếng</span></div>
          <div class="live-pill"><span class="live-dot"></span> Theo dõi tiến độ online</div>
        </div>
      </div>
    </section>
    ${renderProgramsSection()}
    ${renderWishSection()}
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
        ${sectionHeader('Chương trình', 'Chọn đúng lộ trình sang Đức cho riêng bạn', 'Mỗi diện có điều kiện và đối tượng khác nhau. DCC tư vấn theo đúng năng lực thực tế của bạn — không khuyên chọn sai diện.')}
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

// Ngành nghề nước Đức đang cần, theo từng chương trình. Au-pair & Học tiếng không có ngành nghề.
const GERMANY_CAREERS = {
  'Du học nghề Đức': ['Điều dưỡng – chăm sóc người cao tuổi', 'Nhà hàng – khách sạn', 'Đầu bếp', 'Làm bánh', 'Chế biến thịt', 'Bán hàng – bán lẻ', 'Logistics – kho vận', 'Cơ khí – cơ điện tử', 'Điện – điện tử', 'Xây dựng', 'Sơn – hoàn thiện công trình', 'Cơ khí ô tô', 'Công nghệ thông tin', 'Trợ lý nha khoa', 'Cắt tóc – làm đẹp', 'Giáo dục mầm non', 'Nông nghiệp – làm vườn', 'Lái xe tải', 'Hàn – gia công kim loại'],
  'Chuyển đổi văn bằng 18B/18A': ['Điều dưỡng – y tế', 'Bác sĩ', 'Dược sĩ', 'Kỹ sư cơ khí', 'Kỹ sư điện – tự động hóa', 'Kỹ sư xây dựng', 'Kỹ sư ô tô', 'Công nghệ thông tin (IT)', 'Hàn – gia công kim loại', 'Kế toán – tài chính', 'Quản lý nhà hàng – khách sạn', 'Logistics', 'Kiến trúc', 'Giáo viên – sư phạm'],
  'Thời vụ 8 tháng': ['Nông nghiệp – thu hoạch', 'Làm vườn – trồng trọt', 'Chế biến thực phẩm', 'Đóng gói – kho', 'Nhà hàng – khách sạn mùa vụ']
};

// 16 bang + các thành phố lớn của Đức cho ô địa điểm mong muốn.
const GERMANY_STATES = ['Baden-Württemberg', 'Bayern', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hessen', 'Mecklenburg-Vorpommern', 'Niedersachsen', 'Nordrhein-Westfalen', 'Rheinland-Pfalz', 'Saarland', 'Sachsen', 'Sachsen-Anhalt', 'Schleswig-Holstein', 'Thüringen'];
const GERMANY_CITIES = ['München', 'Köln', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Mannheim', 'Karlsruhe', 'Augsburg', 'Wiesbaden', 'Mönchengladbach', 'Aachen', 'Braunschweig', 'Kiel', 'Freiburg', 'Magdeburg', 'Mainz', 'Lübeck', 'Erfurt', 'Rostock', 'Kassel', 'Saarbrücken', 'Potsdam'];

function renderGermanyOptions() {
  return `<option value="">Chưa rõ / linh hoạt</option>
    <optgroup label="Theo bang (Bundesland)">${GERMANY_STATES.map((s) => `<option>${s}</option>`).join('')}</optgroup>
    <optgroup label="Theo thành phố">${GERMANY_CITIES.map((c) => `<option>${c}</option>`).join('')}</optgroup>`;
}

function renderWishSection() {
  return `
    <section class="section wish-section" id="orders">
      <div class="container">
        ${sectionHeader('Đăng ký nguyện vọng', 'Đăng ký chương trình & công việc bạn mong muốn', 'Chọn chương trình, ngành nghề và nơi bạn muốn đến tại Đức. DCC sẽ tìm hợp đồng phù hợp và liên hệ tư vấn miễn phí.')}
        <form id="wishForm" class="lead-form wish-form" novalidate>
          <div class="wish-grid">
            <label>Chương trình mong muốn
              <select name="program_interest" data-wish-program required>
                <option value="">— Chọn chương trình —</option>
                <option value="Du học nghề Đức">Du học nghề Đức (Ausbildung)</option>
                <option value="Chuyển đổi văn bằng 18B/18A">Chuyển đổi văn bằng 18B/18A</option>
                <option value="Au-pair Đức">Au-pair Đức</option>
                <option value="Thời vụ 8 tháng">Thời vụ 8 tháng</option>
                <option value="Học tiếng Đức">Học tiếng Đức</option>
              </select>
            </label>
            <label data-wish-career-field hidden>Ngành nghề mong muốn
              <select name="desired_career" data-wish-career><option value="">— Chọn ngành nghề —</option></select>
            </label>
            <label>Bang / thành phố mong muốn
              <select name="desired_location">${renderGermanyOptions()}</select>
            </label>
            <label>Trình độ tiếng Đức hiện tại
              <select name="german_level"><option>Chưa học</option><option>A1</option><option>A2</option><option>B1</option><option>B2</option></select>
            </label>
            <label>Thời gian mong muốn đi
              <input name="desired_departure" placeholder="Ví dụ: cuối 2026, sau khi đạt B1…" />
            </label>
            <label>Họ và tên
              <input name="full_name" required placeholder="Nguyễn Văn A" />
            </label>
            <label>Số điện thoại / Zalo
              <input name="phone" required placeholder="09xxxxxxxx" />
            </label>
            <label>Email
              <input name="email" type="email" placeholder="email@example.com" />
            </label>
            <label>Tỉnh/thành (tại Việt Nam)
              <input name="province" placeholder="Ví dụ: Quảng Trị" />
            </label>
            <div class="wish-18 wish-note" data-wish-18 hidden>
              <p class="wish-subhead">Thông tin công nhận văn bằng (18A / 18B)</p>
              <div class="wish-subgrid">
                <label>Đã làm KMK / ZAB chưa?
                  <select name="kmk_zab"><option value="">— Chọn —</option><option>Chưa làm</option><option>Đang làm</option><option>Đã có kết quả</option></select>
                </label>
                <label>KMK / ZAB — đã làm bao lâu rồi?
                  <input name="kmk_zab_time" placeholder="Ví dụ: 3 tháng" />
                </label>
                <label>Đã làm NARIC chưa?
                  <select name="naric"><option value="">— Chọn —</option><option>Chưa làm</option><option>Đang làm</option><option>Đã có kết quả</option></select>
                </label>
                <label>NARIC — đã làm bao lâu rồi?
                  <input name="naric_time" placeholder="Ví dụ: 2 tháng" />
                </label>
              </div>
            </div>
            <label class="wish-note">Ghi chú thêm
              <textarea name="note" rows="2" placeholder="Mong muốn cụ thể về hợp đồng, ngành nghề, mức lương…"></textarea>
            </label>
          </div>
          <div class="wish-actions">
            <button class="btn primary" type="submit">Gửi đăng ký nguyện vọng</button>
            <span class="secure-inline">🔒 Thông tin được bảo mật, chỉ dùng để tư vấn lộ trình phù hợp.</span>
          </div>
          <p id="wishMessage" class="form-message" role="status"></p>
        </form>
      </div>
    </section>`;
}

function renderProcessSection() {
  return `<section class="section process-section" id="process"><div class="container">${sectionHeader('Quy trình', 'Sáu bước, từ đăng ký đến khi ổn định tại Đức', 'Một lộ trình thống nhất để bạn luôn biết hồ sơ đang ở đâu và bước tiếp theo cần làm gì.')}
    <div class="timeline">${PROCESS_STEPS.map(([no, title, text]) => `<article><span>${no}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
  </div></section>`;
}

function renderRisksSection(short = false) {
  const list = short ? RISKS.slice(0, 4) : RISKS;
  return `<section class="section risks-section" id="risks"><div class="container">${sectionHeader('Minh bạch', 'Những rủi ro nên biết trước khi bắt đầu', 'Chúng tôi nói thẳng về rủi ro để bạn chuẩn bị chủ động — và cho biết DCC giúp bạn giảm thiểu từng điều ra sao.')}
    <div class="risk-list">${list.map(([risk, support]) => `<details class="risk-item"><summary>${risk}</summary><div><h4>DCC hỗ trợ giảm rủi ro bằng cách nào?</h4><p>${support}</p></div></details>`).join('')}</div>
    ${short ? '<a class="btn secondary center-btn" href="#/rui-ro-can-biet">Xem đầy đủ các rủi ro</a>' : ''}
  </div></section>`;
}

// Để hiện ẢNH THẬT: điền đường dẫn ảnh vào trường `img` (URL hoặc đường dẫn tương đối, ví dụ './images/lop-hoc.jpg').
// Ô nào chưa có `img` sẽ tự hiển thị nền màu minh họa.
const GALLERY = [
  { label: 'Lớp học tiếng Đức', img: '' },
  { label: 'Học viên', img: '' },
  { label: 'Buổi tư vấn', img: '' },
  { label: 'Hoạt động trung tâm', img: '' },
  { label: 'Đối tác/đơn hàng', img: '' },
  { label: 'Nước Đức truyền cảm hứng', img: '' }
];

function renderGallerySection() {
  return `<section class="section gallery-section"><div class="container">${sectionHeader('Hình ảnh', 'Không gian học tập và hành trình sang Đức', 'Những khoảnh khắc học tiếng, tư vấn và kết nối Đức – Việt tại Deutsch Connect Center.')}
    <div class="gallery-grid">${GALLERY.map((item, index) => `<figure class="gallery-item tone-${index + 1}"${item.img ? ` style="background-image:url('${item.img}');background-size:cover;background-position:center;"` : ''}><span>${item.label}</span></figure>`).join('')}</div>
  </div></section>`;
}

function renderWhySection() {
  const reasons = [
    ['Lộ trình rõ ràng', 'Mỗi học viên có lộ trình riêng theo điều kiện thực tế: học tiếng, hồ sơ, phỏng vấn, visa và thời gian dự kiến.'],
    ['Hồ sơ minh bạch', 'Bạn luôn biết hồ sơ đang ở bước nào, còn thiếu giấy tờ gì và ai đang phụ trách.'],
    ['Theo dõi tiến độ online', 'Tra cứu trạng thái hồ sơ, deadline và lịch hẹn mọi lúc, không phải hỏi đi hỏi lại.'],
    ['Tư vấn đúng diện', 'DCC đánh giá năng lực, bằng cấp và mục tiêu để tư vấn đúng chương trình, không ép chọn sai diện.'],
    ['Đồng hành học tiếng', 'Lớp A1–B2 có kiểm tra đầu vào, lộ trình rõ ràng và nhắc lịch thi chứng chỉ đúng hạn.'],
    ['Không bỏ sót khách hàng', 'Hệ thống nhắc việc và phân công giúp không bỏ quên bất kỳ học viên hay deadline nào.'],
    ['Có hệ thống quản lý nội bộ', 'Toàn bộ hồ sơ, lịch hẹn và công việc được quản lý tập trung, hạn chế sai sót thủ công.'],
    ['Cảnh báo rủi ro từ đầu', 'DCC nói rõ rủi ro và chi phí ngay từ đầu để bạn chuẩn bị đúng, không vỡ kế hoạch.'],
    ['Kết nối đối tác Đức', 'DCC làm việc trực tiếp với đối tác tại Đức để cập nhật đơn hàng và cơ hội thực tế.']
  ];
  return `<section class="section why-section"><div class="container">${sectionHeader('Vì sao chọn DCC', 'Uy tín đến từ hệ thống và sự minh bạch', 'Không lời hứa hão — chỉ có quy trình rõ ràng, trách nhiệm cụ thể và tiến độ bạn theo dõi được mọi lúc.')}
    <div class="why-grid">${reasons.map(([title, text]) => `<article><span>✓</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
  </div></section>`;
}

function renderRegisterSection() {
  return `<section class="section register-section" id="register"><div class="container register-grid"><div><p class="eyebrow">Đăng ký tư vấn</p><h2>Để lại thông tin, DCC gọi lại cho bạn.</h2><p class="muted">Chỉ vài thông tin cơ bản, điền gọn ngay trên điện thoại. DCC sẽ liên hệ tư vấn miễn phí và đúng diện cho bạn.</p><div class="secure-note">🔒 Thông tin của bạn được bảo mật, chỉ dùng để tư vấn lộ trình phù hợp.</div></div>${renderLeadForm()}</div></section>`;
}

function renderLeadForm() {
  return `<form id="leadForm" class="lead-form">
    <div class="form-progress"><span class="active">1</span><span>2</span><span>3</span><span>4</span></div>
    <fieldset data-step="1" class="active"><legend>Bước 1: Thông tin cá nhân</legend><label>Họ tên<input name="full_name" required placeholder="Nguyễn Văn A" /></label><label>Ngày sinh<input name="birth_date" type="date" /></label><label>Số điện thoại<input name="phone" required placeholder="09xxxxxxxx" /></label><label>Email<input name="email" type="email" placeholder="email@example.com" /></label><label>Tỉnh/thành phố<input name="province" placeholder="Ví dụ: Hà Nội" /></label><label>Zalo/Facebook<input name="social_contact" placeholder="Link hoặc số Zalo" /></label></fieldset>
    <fieldset data-step="2"><legend>Bước 2: Chọn chương trình quan tâm</legend><label>Chương trình<select name="program_interest" required><option value="">Chọn chương trình</option><option>Du học nghề Đức</option><option>Chuyển đổi văn bằng 18B</option><option>18A</option><option>Au-pair Đức</option><option>Thời vụ 8 tháng</option><option>Học tiếng Đức</option><option>Chưa biết – cần tư vấn</option></select></label></fieldset>
    <fieldset data-step="3"><legend>Bước 3: Trình độ hiện tại</legend><label>Trình độ tiếng Đức<select name="german_level"><option>Chưa học</option><option>A1</option><option>A2</option><option>B1</option><option>B2</option></select></label><label>Bằng cấp cao nhất<input name="highest_education" placeholder="THPT / Trung cấp / Cao đẳng / Đại học" /></label><label>Ngành học/nghề hiện tại<input name="current_career" /></label><label>Kinh nghiệm làm việc<textarea name="work_experience" rows="3"></textarea></label><label>Tình trạng hộ chiếu<select name="passport_status"><option>Chưa có</option><option>Đang làm</option><option>Đã có</option></select></label><label>Tình trạng hồ sơ<input name="document_status" placeholder="Đã có bằng, thiếu hộ chiếu..." /></label></fieldset>
    <fieldset data-step="4"><legend>Bước 4: Mục tiêu và thời gian mong muốn</legend><label>Muốn đi Đức khi nào<input name="desired_departure" placeholder="Ví dụ: 2026 hoặc sau khi có B1" /></label><label>Ngành mong muốn<input name="desired_career" /></label><label>Thành phố/bang mong muốn<input name="desired_location" /></label><label>Ghi chú thêm<textarea name="note" rows="4" placeholder="Điều anh/chị muốn DCC tư vấn kỹ hơn"></textarea></label></fieldset>
    <div class="form-actions"><button class="btn secondary" type="button" data-prev disabled>Quay lại</button><button class="btn primary" type="button" data-next>Tiếp tục</button><button class="btn primary hidden" type="submit">Gửi thông tin</button></div><p id="formMessage" class="form-message" role="status"></p>
  </form>`;
}

function renderOrdersPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Đăng ký nguyện vọng</p><h1>Đăng ký chương trình & công việc mong muốn</h1><p>Cho DCC biết bạn muốn theo chương trình nào, làm ngành nghề gì và ở đâu trên nước Đức — chúng tôi sẽ tìm hợp đồng phù hợp và liên hệ tư vấn miễn phí.</p></div></section>${renderWishSection()}`; }
function renderProgramsPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Chương trình</p><h1>Chọn đúng diện trước khi chuẩn bị hồ sơ</h1><p>DCC đánh giá điều kiện thực tế của bạn để tư vấn đúng diện — không hứa hẹn quá đà, không vẽ kỳ vọng sai.</p></div></section>${renderProgramsSection()}`; }
function renderRegisterPage() {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">Đăng ký tài khoản</p><h1>Tạo tài khoản DCC</h1><p>Đăng ký một lần và tự đặt mật khẩu. Những lần sau, bạn chỉ cần đăng nhập bằng <b>email hoặc số điện thoại + mật khẩu</b> để theo dõi hồ sơ và làm việc với DCC.</p><div class="hero-actions"><a class="btn ghost" href="#/hoc-vien">Đã có tài khoản? Đăng nhập →</a></div></div></section>
  <section class="section"><div class="container">
    <div class="account-tabs" role="tablist">
      <button class="account-tab active" type="button" data-reg-tab="member">🎓 Học viên</button>
      <button class="account-tab" type="button" data-reg-tab="partner">🤝 Đối tác</button>
    </div>
    <div data-reg-panel="member">${renderMemberRegForm()}</div>
    <div data-reg-panel="partner" hidden>${renderPartnerAccountForm()}</div>
  </div></section>`;
}

function renderMemberRegForm() {
  return `<form id="memberRegForm" class="lead-form account-form-full">
    <p class="form-section-title">Thông tin cơ bản</p>
    <div class="wish-grid">
      <label>Họ và tên *<input name="full_name" required placeholder="Nguyễn Văn A" /></label>
      <label>Ngày sinh<input name="birth_date" type="date" /></label>
      <label>Số điện thoại / Zalo *<input name="phone" required placeholder="09xxxxxxxx" /></label>
      <label>Email<input name="email" type="email" placeholder="email@example.com" /></label>
      <label>Tỉnh/thành (tại Việt Nam)<input name="province" placeholder="Ví dụ: Quảng Trị" /></label>
      <label>Chương trình quan tâm
        <select name="program_interest"><option value="">— Chọn chương trình —</option><option>Du học nghề Đức</option><option>Chuyển đổi văn bằng 18B</option><option>18A</option><option>Au-pair Đức</option><option>Thời vụ 8 tháng</option><option>Học tiếng Đức</option><option>Chưa biết – cần tư vấn</option></select>
      </label>
      <label>Trình độ tiếng Đức<select name="german_level"><option>Chưa học</option><option>A1</option><option>A2</option><option>B1</option><option>B2</option></select></label>
      <label>Bằng cấp cao nhất<input name="highest_education" placeholder="THPT / Trung cấp / Cao đẳng / Đại học" /></label>
      <label>Ngành/nghề hiện tại<input name="current_career" /></label>
      <label>Tình trạng hộ chiếu<select name="passport_status"><option>Chưa có</option><option>Đang làm</option><option>Đã có</option></select></label>
      <label class="wish-note">Mong muốn của bạn<textarea name="note" rows="2" placeholder="Điều bạn muốn DCC tư vấn kỹ hơn"></textarea></label>
    </div>
    <p class="form-section-title">Tạo mật khẩu đăng nhập</p>
    <div class="wish-grid">
      <label>Mật khẩu * (tối thiểu 6 ký tự)<input name="password" type="password" required minlength="6" placeholder="••••••" /></label>
      <label>Nhập lại mật khẩu *<input name="password2" type="password" required minlength="6" placeholder="••••••" /></label>
    </div>
    <div class="wish-actions">
      <button class="btn primary" type="submit">Tạo tài khoản học viên</button>
      <span class="secure-inline">🔒 Mật khẩu được mã hoá, DCC không thấy mật khẩu thật của bạn.</span>
    </div>
    <p id="memberRegMessage" class="form-message" role="status"></p>
  </form>`;
}

function renderPartnerAccountForm() {
  return `<form id="partnerAccountForm" class="lead-form account-form-full">
    <p class="form-section-title">Loại đối tác</p>
    <div class="partner-type-row">
      <label class="radio-card"><input type="radio" name="partner_type" value="individual" checked /> <span><b>Đối tác cá nhân</b><small>Cộng tác viên, cá nhân giới thiệu học viên</small></span></label>
      <label class="radio-card"><input type="radio" name="partner_type" value="company" /> <span><b>Đối tác công ty</b><small>Trung tâm, công ty, tổ chức hợp tác</small></span></label>
    </div>
    <p class="form-section-title">Thông tin liên hệ</p>
    <div class="wish-grid">
      <label>Họ tên người đại diện *<input name="full_name" required placeholder="Nguyễn Văn A" /></label>
      <label data-partner-company hidden>Tên công ty / đơn vị<input name="company_name" placeholder="Tên trung tâm / công ty" /></label>
      <label data-partner-company hidden>Mã số thuế / Giấy phép<input name="tax_code" placeholder="Mã số thuế hoặc số ĐKKD" /></label>
      <label>Số điện thoại / Zalo *<input name="phone" required placeholder="09xxxxxxxx" /></label>
      <label>Email<input name="email" type="email" placeholder="email@example.com" /></label>
      <label>Khu vực hoạt động<input name="province" placeholder="Ví dụ: Quảng Trị" /></label>
      <label class="wish-note">Lời nhắn tới DCC<textarea name="note" rows="2" placeholder="Đôi nét về bạn và mong muốn hợp tác…"></textarea></label>
    </div>
    <p class="form-section-title">Tạo mật khẩu đăng nhập</p>
    <div class="wish-grid">
      <label>Mật khẩu * (tối thiểu 6 ký tự)<input name="password" type="password" required minlength="6" placeholder="••••••" /></label>
      <label>Nhập lại mật khẩu *<input name="password2" type="password" required minlength="6" placeholder="••••••" /></label>
    </div>
    <div class="wish-actions">
      <button class="btn primary" type="submit">Tạo tài khoản đối tác</button>
      <span class="secure-inline">🔒 Mật khẩu được mã hoá, DCC không thấy mật khẩu thật của bạn.</span>
    </div>
    <p id="partnerAccountMessage" class="form-message" role="status"></p>
  </form>`;
}
function renderRisksPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Minh bạch</p><h1>Những rủi ro nên biết trước khi bắt đầu</h1><p>Chúng tôi trình bày rủi ro một cách nghiêm túc để bạn chuẩn bị đúng, thay vì tạo kỳ vọng sai.</p></div></section>${renderRisksSection(false)}`; }
function renderProcessPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Quy trình hồ sơ</p><h1>Sáu bước, từ đăng ký đến khi ổn định tại Đức</h1><p>Một quy trình thống nhất cho cả học viên, đối tác và đội ngũ DCC cùng theo dõi.</p></div></section>${renderProcessSection()}`; }

function renderProgramDetail(program) {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">${program.title}</p><h1>${program.summary}</h1><p>${program.tags.join(' • ')}</p><div class="hero-actions"><a class="btn primary" href="#/don-hang">${program.cta}</a><a class="btn secondary" href="#/dang-ky">Đăng ký tài khoản</a></div></div></section>${renderProcessSection()}${renderRegisterSection()}`;
}

function renderOrderDetail(id) {
  const order = ORDERS.find((item) => item.id === id) || ORDERS[0];
  const block = (title, items) => `<section><h2>${title}</h2><ul class="check-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul></section>`;
  return `<section class="page-hero order-detail-hero"><div class="container"><p class="eyebrow">Chi tiết đơn hàng</p><h1>${order.title}</h1><p>${order.highlight}</p><div class="hero-actions"><a class="btn primary" href="#/don-hang?order=${order.id}">Đăng ký tư vấn đơn này</a><a class="btn secondary" href="#/don-hang">Quay lại danh sách đơn</a></div></div></section><section class="section"><div class="container detail-grid"><article class="detail-main"><section><h2>Tổng quan chương trình</h2><p>${order.highlight}</p><div class="order-meta detail-meta"><div><b>Địa điểm</b><span>${order.location}</span></div><div><b>Công việc/ngành học</b><span>${order.career}</span></div><div><b>Số lượng</b><span>${order.seats}</span></div><div><b>Yêu cầu tiếng Đức</b><span>${order.language}</span></div><div><b>Thời gian dự kiến</b><span>${order.intake}</span></div><div><b>Chi phí/lương/hỗ trợ</b><span>${order.salary}</span></div></div></section>${block('Quyền lợi', order.benefits)}${block('Điều kiện tham gia', order.requirements)}${block('Hồ sơ cần chuẩn bị', order.documents)}${block('Rủi ro/các điểm cần lưu ý', order.risks)}<section><h2>Câu hỏi thường gặp</h2><details><summary>DCC có cam kết 100% visa không?</summary><p>Không. DCC không dùng ngôn ngữ bao đậu visa. Trung tâm hỗ trợ chuẩn bị hồ sơ nghiêm túc và minh bạch trạng thái xử lý.</p></details><details><summary>Có thể theo dõi tiến độ online không?</summary><p>Có. Khi hồ sơ được tạo trong hệ thống, học viên chỉ xem được thông tin của chính mình theo phân quyền.</p></details></section></article><aside class="detail-side"><h3>Lộ trình xử lý</h3>${PROCESS_STEPS.map(([no, title]) => `<p><b>${no}</b> ${title}</p>`).join('')}<a class="btn primary full" href="#/don-hang">Đăng ký tư vấn</a></aside></div></section>`;
}

function renderLoginHub() {
  const account = getAccount();
  if (account) return renderAccountWelcome(account);
  return `<section class="page-hero"><div class="container"><p class="eyebrow">Đăng nhập</p><h1>Cổng dành cho học viên & đối tác</h1><p>Đăng nhập bằng <b>email hoặc số điện thoại + mật khẩu</b> bạn đã tạo khi đăng ký.</p></div></section>
  <section class="section"><div class="container login-grid">
    <article class="login-card">
      <span class="login-ico">🎓</span>
      <h2>Học viên</h2>
      <p class="muted">Đăng nhập để tra cứu hồ sơ, tiến độ học tiếng, lịch hẹn và những giấy tờ cần bổ sung của riêng bạn.</p>
      <form class="account-form" data-login="member">
        <label>Email hoặc số điện thoại
          <input name="identifier" required placeholder="email@example.com hoặc 09xxxxxxxx" />
        </label>
        <label>Mật khẩu
          <input name="password" type="password" required placeholder="••••••" />
        </label>
        <button class="btn primary full" type="submit">Đăng nhập</button>
        <p class="form-message" role="status"></p>
      </form>
      <div class="login-foot">Chưa có tài khoản? <a class="text-link" href="#/dang-ky">Đăng ký học viên →</a></div>
    </article>
    <article class="login-card partner-card">
      <span class="login-badge">Đối tác DCC</span>
      <h2>Đối tác</h2>
      <p>Đăng nhập để theo dõi học viên bạn giới thiệu và phần dữ liệu thuộc quyền của mình — minh bạch, riêng tư.</p>
      <form class="account-form" data-login="partner">
        <label>Email hoặc số điện thoại
          <input name="identifier" required placeholder="email@example.com hoặc 09xxxxxxxx" />
        </label>
        <label>Mật khẩu
          <input name="password" type="password" required placeholder="••••••" />
        </label>
        <button class="btn primary full" type="submit">Vào cổng đối tác</button>
        <p class="form-message" role="status"></p>
      </form>
      <div class="login-foot">Chưa là đối tác? <a class="text-link" href="#/partner">Đăng ký đối tác →</a></div>
    </article>
  </div></section>`;
}

function renderAccountWelcome(account) {
  const isPartner = account.role === 'partner';
  return `<section class="page-hero"><div class="container"><p class="eyebrow">${isPartner ? 'Cổng đối tác' : 'Cổng học viên'}</p><h1>Xin chào, ${account.name || 'bạn'} 👋</h1><p>Bạn đã đăng nhập với tài khoản ${isPartner ? 'đối tác' : 'học viên'} DCC.</p></div></section>
  <section class="section"><div class="container narrow">
    <div class="account-welcome">
      <div class="aw-row"><span>Vai trò</span><b>${isPartner ? 'Đối tác' : 'Học viên'}</b></div>
      <div class="aw-row"><span>${isPartner ? 'Mã đối tác' : 'Mã thành viên'}</span><b>${account.code || '—'}</b></div>
      ${account.email ? `<div class="aw-row"><span>Email</span><b>${account.email}</b></div>` : ''}
      ${account.phone ? `<div class="aw-row"><span>Số điện thoại</span><b>${account.phone}</b></div>` : ''}
      <div class="aw-actions">
        <a class="btn primary" href="#/tra-cuu-ho-so">Tra cứu tiến độ hồ sơ</a>
        <button class="btn secondary" type="button" data-logout>Đăng xuất</button>
      </div>
    </div>
    <p class="muted" style="margin-top:1rem">DCC đang hoàn thiện cổng theo dõi hồ sơ chi tiết. Mọi thắc mắc, anh/chị liên hệ hotline/Zalo <b>076 778 7879</b>.</p>
  </div></section>`;
}

function renderPartnerPortal() {
  const benefits = [
    ['🤝', 'Quan hệ bền vững', 'DCC xem mỗi đối tác là người đồng hành lâu dài, không phải một giao dịch ngắn hạn.'],
    ['💎', 'Quyền lợi rõ ràng', 'Chính sách hợp tác minh bạch, trao đổi cụ thể và phối hợp đúng cam kết cho từng học viên.'],
    ['📊', 'Theo dõi realtime', 'Cổng riêng giúp bạn nắm trạng thái từng học viên đã gửi, không phải hỏi đi hỏi lại.'],
    ['🔒', 'Dữ liệu riêng tư', 'Bạn chỉ xem được học viên của mình; dữ liệu các đối tác khác được tách biệt tuyệt đối.'],
    ['🎓', 'Hỗ trợ chuyên môn', 'Tài liệu, đào tạo và đội ngũ tư vấn của DCC luôn sẵn sàng đồng hành cùng đối tác.'],
    ['⏱️', 'Phản hồi tận tâm', 'Đội ngũ phụ trách đối tác riêng, phản hồi nhanh và hỗ trợ bạn đến cùng.']
  ];
  return `<section class="page-hero"><div class="container"><p class="eyebrow">Đối tác</p><h1>Đồng hành cùng DCC — chúng tôi trân trọng từng đối tác</h1><p>Với DCC, thành công của đối tác chính là thành công của chúng tôi. Mỗi học viên bạn gửi gắm đều được chăm sóc minh bạch, có trách nhiệm và theo dõi đến khi sang Đức an toàn.</p><div class="hero-actions"><a class="btn primary" data-scroll="partner-register">Đăng ký hợp tác</a><a class="btn ghost" href="#/hoc-vien">Đăng nhập đối tác</a></div></div></section>
  <section class="section"><div class="container">
    ${sectionHeader('Vì sao hợp tác với DCC', 'Mối quan hệ xây trên sự minh bạch và tôn trọng', 'Chúng tôi không xem đối tác là một kênh giao dịch — mà là người đồng hành cùng đưa học viên Việt sang Đức.')}
    <div class="why-grid">${benefits.map(([icon, title, text]) => `<article><span>${icon}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
  </div></section>
  <section class="section register-section" id="partner-register"><div class="container">
    ${sectionHeader('Đăng ký đối tác', 'Trở thành đối tác của DCC', 'Tạo tài khoản đối tác (cá nhân hoặc công ty) và tự đặt mật khẩu. Lần sau bạn chỉ cần đăng nhập bằng email hoặc số điện thoại + mật khẩu.')}
    ${renderPartnerAccountForm()}
  </div></section>
  <section class="section"><div class="container">
    ${sectionHeader('Đã là đối tác?', 'Cổng quản lý dành cho đối tác', 'Sau khi đăng nhập, bạn theo dõi học viên đã gửi, trạng thái hồ sơ và phần dữ liệu thuộc quyền của mình.')}
    <div class="portal-layout"><aside class="portal-card"><h2>Thống kê đối tác</h2>${['Tổng học viên đã gửi: 24', 'Đang tư vấn: 7', 'Đang học tiếng: 8', 'Đã có hợp đồng: 3', 'Đang visa: 4', 'Đã bay: 2'].map((item) => `<p>${item}</p>`).join('')}</aside><div>${renderPartnerForm()}<div class="table-card"><h2>Danh sách học viên mẫu</h2><table><thead><tr><th>Học viên</th><th>Chương trình</th><th>Trạng thái</th><th>Thiếu hồ sơ</th></tr></thead><tbody><tr><td>Nguyễn Văn A</td><td>Du học nghề</td><td>Đang học tiếng</td><td>Hộ chiếu</td></tr><tr><td>Trần Thị B</td><td>Au-pair</td><td>Chờ phỏng vấn</td><td>Không</td></tr></tbody></table></div></div></div>
  </div></section>`;
}

function renderPartnerForm() {
  return `<form class="lead-form compact-form"><legend>Form đối tác gửi học viên</legend><label>Tên đối tác<input name="partner_name"></label><label>Mã đối tác<input name="partner_code"></label><label>Họ tên học viên<input name="student_name"></label><label>Số điện thoại<input name="phone"></label><label>Email<input name="email"></label><label>Ngày sinh<input type="date" name="birth_date"></label><label>Chương trình quan tâm<input name="program_interest"></label><label>Trình độ tiếng Đức<input name="german_level"></label><label>Bằng cấp<input name="education"></label><label>Ghi chú<textarea rows="3"></textarea></label><label>File đính kèm<input type="file"><small>Đính kèm bằng cấp, CV hoặc giấy tờ liên quan nếu có.</small></label><button class="btn primary" type="button">Gửi thông tin học viên</button></form>`;
}

function renderInternalApp() {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">App nội bộ</p><h1>Trung tâm điều hành nội bộ DCC</h1><p>Phân quyền theo vai trò: admin, quản lý, nhân viên, giáo viên, đối tác và học viên — mỗi người chỉ thấy phần dữ liệu thuộc trách nhiệm của mình.</p><div class="hero-actions"><a class="btn primary" href="${(window.DCC_PUBLIC_CONFIG || {}).STAFF_APP_URL || 'https://app.deutschconnectcenter.com'}">Mở ứng dụng nội bộ</a></div></div></section><section class="section"><div class="container"><div class="role-grid">${['admin: xem và quản lý tất cả', 'manager: xem phần được giao', 'staff: xem khách/hồ sơ assign_to', 'teacher: lớp/học viên được phân công', 'partner: học viên do mình gửi', 'student/customer: hồ sơ của chính mình'].map((role) => `<span>${role}</span>`).join('')}</div><div class="module-grid">${MODULES.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>`;
}

function renderLookupPage() { return `<section class="page-hero"><div class="container"><p class="eyebrow">Tra cứu hồ sơ</p><h1>Tra cứu tiến độ hồ sơ</h1><p>Nhập mã tra cứu DCC đã cấp, hoặc email / số điện thoại bạn dùng khi đăng ký để xem nhanh tình trạng hồ sơ.</p></div></section><section class="section"><div class="container narrow"><form class="lead-form"><label>Mã tra cứu / email / số điện thoại<input placeholder="DCC-2026-xxxxx"></label><button class="btn primary" type="button">Tra cứu</button><p class="muted">Để bảo mật, một số thông tin chi tiết chỉ hiển thị sau khi bạn đăng nhập tài khoản học viên.</p></form></div></section>`; }
function renderAboutContact(path) { return `<section class="page-hero"><div class="container"><p class="eyebrow">${path === '/gioi-thieu' ? 'Giới thiệu' : 'Liên hệ'}</p><h1>Deutsch Connect Center</h1><p>Trung tâm hỗ trợ học tiếng Đức, tuyển sinh du học nghề, chuyển đổi văn bằng 18B/18A, Au-pair, thời vụ 8 tháng, hồ sơ visa và kết nối đối tác tại Đức.</p></div></section>${renderWhySection()}${renderRegisterSection()}`; }

function bindInteractions() {
  const wishForm = $('#wishForm');
  if (wishForm) bindWishForm(wishForm);

  const form = $('#leadForm');
  if (form) bindLeadForm(form);

  // Đăng ký tài khoản (trang /dang-ky) — tab Học viên / Đối tác
  bindRegisterTabs();
  const memberReg = $('#memberRegForm');
  if (memberReg) memberReg.addEventListener('submit', (e) => submitAccountRegister(e, 'member', '#memberRegMessage'));
  const partnerAccount = $('#partnerAccountForm');
  if (partnerAccount) { bindPartnerTypeToggle(partnerAccount); partnerAccount.addEventListener('submit', (e) => submitAccountRegister(e, 'partner', '#partnerAccountMessage')); }

  // Đăng nhập (trang /hoc-vien)
  $$('[data-login]').forEach((f) => f.addEventListener('submit', (e) => submitAccountLogin(e, f.dataset.login)));

  // Đăng xuất (cổng đã đăng nhập)
  $$('[data-logout]').forEach((b) => b.addEventListener('click', () => { setAccount(null); renderPage(); }));

  $$('[data-scroll]').forEach((el) => el.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.getElementById(el.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }));
}

// ===== Tài khoản (đăng ký / đăng nhập có mật khẩu) =====
function getAccount() {
  try { return JSON.parse(localStorage.getItem('dcc_account') || 'null'); } catch { return null; }
}
function setAccount(account) {
  if (account) localStorage.setItem('dcc_account', JSON.stringify(account));
  else localStorage.removeItem('dcc_account');
}

async function accountApi(payload) {
  const config = window.DCC_PUBLIC_CONFIG || {};
  const endpoint = config.ACCOUNT_API || '/api/account';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.ok) throw new Error(data.error || `Lỗi (HTTP ${response.status})`);
  return data;
}

function bindRegisterTabs() {
  const tabs = $$('[data-reg-tab]');
  if (!tabs.length) return;
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    const which = tab.dataset.regTab;
    tabs.forEach((t) => t.classList.toggle('active', t === tab));
    $$('[data-reg-panel]').forEach((panel) => { panel.hidden = panel.dataset.regPanel !== which; });
  }));
}

function bindPartnerTypeToggle(form) {
  const sync = () => {
    const isCompany = (form.querySelector('input[name="partner_type"]:checked') || {}).value === 'company';
    $$('[data-partner-company]', form).forEach((el) => { el.hidden = !isCompany; });
  };
  $$('input[name="partner_type"]', form).forEach((r) => r.addEventListener('change', sync));
  sync();
}

async function submitAccountRegister(event, role, msgSelector) {
  event.preventDefault();
  const form = event.currentTarget;
  const msg = $(msgSelector);
  const setMsg = (text, type = '') => { if (msg) { msg.textContent = text; msg.className = `form-message ${type}`; } };
  const payload = Object.fromEntries(new FormData(form).entries());
  if (payload.password && payload.password.length < 6) { setMsg('Mật khẩu cần ít nhất 6 ký tự.', 'error'); return; }
  if (payload.password !== payload.password2) { setMsg('Hai ô mật khẩu chưa khớp nhau.', 'error'); return; }
  payload.action = 'register';
  payload.role = role;
  try {
    setMsg('Đang tạo tài khoản...', '');
    const result = await accountApi(payload);
    setAccount({ role: result.role, name: result.name, code: result.code, email: (payload.email || '').toLowerCase(), phone: payload.phone });
    form.reset();
    setMsg(`🎉 Tạo tài khoản thành công! ${role === 'partner' ? 'Mã đối tác' : 'Mã thành viên'} của bạn: ${result.code}. Đang chuyển tới cổng đăng nhập...`, 'success');
    setTimeout(() => go('/hoc-vien'), 1400);
  } catch (error) {
    setMsg(error.message || 'Chưa tạo được tài khoản. Vui lòng thử lại.', 'error');
  }
}

async function submitAccountLogin(event, role) {
  event.preventDefault();
  const form = event.currentTarget;
  const msg = $('.form-message', form);
  const setMsg = (text, type = '') => { if (msg) { msg.textContent = text; msg.className = `form-message ${type}`; } };
  const payload = Object.fromEntries(new FormData(form).entries());
  payload.action = 'login';
  payload.role = role;
  try {
    setMsg('Đang đăng nhập...', '');
    const result = await accountApi(payload);
    setAccount({ role: result.role, name: result.name, code: result.code, email: result.email, phone: result.phone });
    renderPage();
  } catch (error) {
    setMsg(error.message || 'Đăng nhập chưa thành công. Vui lòng thử lại.', 'error');
  }
}

function bindWishForm(form) {
  const programSel = $('[data-wish-program]', form);
  const careerField = $('[data-wish-career-field]', form);
  const careerSel = $('[data-wish-career]', form);
  const block18 = $('[data-wish-18]', form);
  const syncFields = () => {
    const list = GERMANY_CAREERS[programSel.value];
    if (list && list.length) {
      careerSel.innerHTML = '<option value="">— Chọn ngành nghề —</option>' + list.map((c) => `<option>${c}</option>`).join('');
      careerField.hidden = false;
    } else {
      careerSel.innerHTML = '<option value="">— Chọn ngành nghề —</option>';
      careerField.hidden = true;
    }
    if (block18) block18.hidden = programSel.value !== 'Chuyển đổi văn bằng 18B/18A';
  };
  programSel.addEventListener('change', syncFields);
  syncFields();
  form.addEventListener('submit', submitWish);
}

async function submitWish(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const msg = $('#wishMessage');
  const setMsg = (text, type = '') => { if (msg) { msg.textContent = text; msg.className = `form-message ${type}`; } };
  const payload = Object.fromEntries(new FormData(form).entries());
  if (!payload.program_interest) { setMsg('Vui lòng chọn chương trình bạn mong muốn.', 'error'); return; }
  if (!payload.full_name || !payload.phone) { setMsg('Vui lòng điền họ tên và số điện thoại để DCC liên hệ lại.', 'error'); return; }
  payload.source = 'Website – Đăng ký nguyện vọng';
  payload.status = 'Khách mới đăng ký';
  payload.lookup_code = `DCC-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  try {
    setMsg('Đang gửi đăng ký...', '');
    const result = await submitLeadToNotion(payload);
    if (result && result.lookup_code) payload.lookup_code = result.lookup_code;
    form.reset();
    const careerField = $('[data-wish-career-field]', form);
    if (careerField) careerField.hidden = true;
    const block18 = $('[data-wish-18]', form);
    if (block18) block18.hidden = true;
    setMsg(`Cảm ơn anh/chị! DCC đã nhận nguyện vọng và sẽ liên hệ tư vấn sớm. Mã tra cứu của bạn: ${payload.lookup_code}`, 'success');
  } catch (error) {
    console.error(error);
    setMsg('Hiện chưa gửi được. Anh/chị vui lòng thử lại, hoặc liên hệ hotline/Zalo 076 778 7879 để được hỗ trợ nhanh.', 'error');
  }
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
  const form = event.currentTarget;
  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());
  payload.source = 'Website';
  payload.status = 'Khách mới đăng ký';
  payload.program_interest = payload.program_interest || 'Chưa biết – cần tư vấn';
  payload.lookup_code = `DCC-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  try {
    setMessage('Đang gửi thông tin...', '');
    const result = await submitLeadToNotion(payload);
    if (result && result.lookup_code) payload.lookup_code = result.lookup_code;
    form.reset();
    setMessage(`Cảm ơn anh/chị. DCC đã nhận thông tin và sẽ liên hệ tư vấn sớm. Mã tra cứu của bạn: ${payload.lookup_code}`, 'success');
  } catch (error) {
    console.error(error);
    setMessage('Hiện chưa gửi được thông tin. Bạn vui lòng thử lại, hoặc liên hệ trực tiếp DCC qua hotline/Zalo/Facebook để được hỗ trợ nhanh.', 'error');
  }
}

async function submitLeadToNotion(payload) {
  const config = window.DCC_PUBLIC_CONFIG || {};
  const endpoint = config.LEAD_API || '/api/lead';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.ok) {
    throw new Error(data.error || `Lỗi gửi lead (HTTP ${response.status})`);
  }
  return data;
}

$('.menu-toggle')?.addEventListener('click', (event) => {
  const nav = $('.nav-links');
  nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', nav.classList.contains('open'));
});

window.addEventListener('hashchange', renderPage);
renderPage();
