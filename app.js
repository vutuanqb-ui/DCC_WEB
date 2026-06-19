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
  // Đổi trang thì đóng overlay menu (nếu đang mở).
  document.body.classList.remove('nav-open');
  $('.nav-links')?.classList.remove('open');
  $('.menu-toggle')?.setAttribute('aria-expanded', 'false');
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
  } else if (path === '/chuyen-viec-chuyen-chu' || path === '/chuyen-viec') {
    root.innerHTML = renderJobTransferPage();
  } else if (path === '/quy-trinh-ho-so') {
    root.innerHTML = renderProcessPage();
  } else if (path === '/gioi-thieu' || path === '/lien-he') {
    root.innerHTML = renderAboutContact(path);
  } else {
    const program = PROGRAMS.find((item) => `/${item.slug}` === path || path === '/chuong-trinh');
    root.innerHTML = path === '/chuong-trinh' ? renderProgramsPage() : renderProgramDetail(program || PROGRAMS[0]);
  }
  bindInteractions();
  if (window.DCC_I18N) DCC_I18N.apply();
}

function sectionHeader(eyebrow, title, text = '') {
  return `<div class="section-head"><div><p class="eyebrow">${eyebrow}</p><h2>${title}</h2></div>${text ? `<p class="muted section-copy">${text}</p>` : ''}</div>`;
}

// ===== Trang chủ — bản nhận diện thương hiệu (brand experience) =====
// Trang chủ KHÔNG đổ nội dung các mục menu. Đây là một "phân cảnh" thương hiệu
// điện ảnh, tối giản, 3D — thể hiện tiêu chí hành động & làm việc của DCC.
const BX_PRINCIPLES = [
  ['✶', 'Minh bạch tuyệt đối', 'Chi phí, rủi ro và tiến độ hồ sơ đều rõ ràng từ đầu. Bạn luôn biết mình đang ở đâu trên lộ trình.'],
  ['◈', 'Trách nhiệm đến cùng', 'Đồng hành từ buổi tư vấn đầu tiên cho tới khi bạn ổn định cuộc sống và công việc trên đất Đức.'],
  ['❖', 'Đúng diện, đúng người', 'Tư vấn theo đúng năng lực thật — không vẽ kỳ vọng sai, không ép chọn sai diện để chốt hồ sơ.'],
  ['✦', 'Tận tâm như người nhà', 'Mỗi học viên là một câu chuyện riêng. DCC lắng nghe và lo từng bước cùng bạn, không bỏ sót ai.'],
];

function renderHome() {
  return `
    <section class="bx-hero" aria-label="Deutsch Connect Center">
      <div class="bx-aurora" aria-hidden="true"></div>
      <div class="bx-particles" aria-hidden="true">${Array.from({ length: 26 }).map((_, i) => {
        const x = (i * 67) % 100;          // rải ngang giả ngẫu nhiên
        const y = (i * 41 + 13) % 100;     // rải dọc
        const dur = 7 + ((i * 13) % 9);    // 7–15s
        const delay = -((i * 7) % 14);     // lệch pha
        const sc = (0.5 + ((i * 17) % 60) / 60).toFixed(2);
        return `<i style="left:${x}%;top:${y}%;--dur:${dur}s;animation-delay:${delay}s;--sc:${sc}"></i>`;
      }).join('')}</div>
      <div class="container bx-hero-grid">
        <div class="bx-hero-copy">
          <p class="bx-eyebrow">Deutsch Connect Center · Cầu nối Việt Nam – Đức</p>
          <h1 class="bx-title bx-title-hero" data-i18n-html="home-hero"><span class="bx-th-from">Từ <em>Việt&nbsp;Nam</em> tới <em>Đức</em></span><span class="bx-th-promise">Tận tâm cho một hành trình đúng</span></h1>
          <p class="bx-lead">Không lời hứa hão. Chỉ một lộ trình rõ ràng, một hồ sơ minh bạch và một đội ngũ đồng hành đến khi bạn thật sự vững vàng trên đất Đức.</p>
          <div class="bx-actions">
            <a class="btn primary bx-btn-lg" href="#/don-hang">Bắt đầu hành trình</a>
            <a class="btn bx-btn-line" href="#/chuong-trinh">Khám phá chương trình</a>
          </div>
          <div class="bx-trust">Du học nghề · 18B / 18A · Au-pair · Thời vụ 8 tháng · Học tiếng A1–B2</div>
        </div>

        <div class="bx-stage" aria-hidden="true">
          <canvas class="bx-globe"></canvas>
          <div class="bx-chip bx-chip-1"><span class="bx-chip-dot"></span> Minh bạch</div>
          <div class="bx-chip bx-chip-2"><span class="bx-chip-dot"></span> Đồng hành</div>
          <div class="bx-chip bx-chip-3"><span class="bx-chip-dot"></span> Đúng diện</div>
        </div>
      </div>
      <a class="bx-scroll-cue" href="#bx-manifesto"><span>Cuộn để khám phá</span><i></i></a>
    </section>

    <section class="bx-manifesto" id="bx-manifesto">
      <div class="container">
        <div class="scene-rule" aria-hidden="true"></div>
        <div class="bx-section-head">
          <p class="bx-kicker">Kim chỉ nam</p>
          <h2>Tiêu chí hành động của DCC</h2>
          <p class="bx-section-lead">Bốn nguyên tắc làm nên một thương hiệu uy tín — được giữ trọn trong từng hồ sơ, từng cuộc gọi, từng người Việt mà DCC đồng hành.</p>
        </div>
        <div class="bx-principles">
          ${BX_PRINCIPLES.map(([icon, title, text], i) => `
            <article class="bx-principle">
              <div class="bx-principle-inner">
                <span class="bx-principle-icon">${icon}</span>
                <span class="bx-principle-no">0${i + 1}</span>
                <h3>${title}</h3>
                <p>${text}</p>
              </div>
            </article>`).join('')}
        </div>
      </div>
    </section>

    <section class="bx-bridge">
      <div class="bx-aurora bx-aurora-soft" aria-hidden="true"></div>
      <div class="container bx-bridge-inner">
        <div class="scene-rule" aria-hidden="true"></div>
        <p class="bx-kicker bx-kicker-light">Cầu nối Việt Nam – Đức</p>
        <h2 class="bx-bridge-title" data-i18n-html="home-bridge">Một cây cầu vững chãi giữa hai bờ — nơi <em>ước mơ</em> gặp <em>cơ hội</em>.</h2>
        <div class="bx-bridge-arc">
          <svg viewBox="0 0 600 140" role="img" aria-label="Cầu nối Việt Nam đến Đức">
            <path id="bxArcPath" class="bx-arc-path" d="M30 120 Q300 -10 570 120"/>
            <circle class="bx-arc-node" cx="30" cy="120" r="6"/>
            <circle class="bx-arc-node" cx="570" cy="120" r="6"/>
            <circle class="bx-arc-dot" r="5">
              <animateMotion dur="3.6s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href="#bxArcPath"></mpath>
              </animateMotion>
            </circle>
          </svg>
          <span class="bx-bridge-end bx-bridge-vn">Việt Nam</span>
          <span class="bx-bridge-end bx-bridge-de">Đức</span>
        </div>
        <div class="bx-bridge-stats">
          <div><strong>5</strong><span>chương trình sang Đức</span></div>
          <div><strong>A1–B2</strong><span>lộ trình học tiếng</span></div>
          <div><strong>100%</strong><span>hồ sơ minh bạch</span></div>
          <div><strong>Online</strong><span>tra cứu tiến độ mọi lúc</span></div>
        </div>
      </div>
    </section>

    <section class="bx-cta">
      <div class="container bx-cta-inner">
        <div class="scene-rule" aria-hidden="true"></div>
        <p class="bx-kicker">Sẵn sàng?</p>
        <h2 data-i18n-html="home-cta">Hành trình sang Đức của bạn <em>bắt đầu hôm nay</em>.</h2>
        <p class="bx-cta-lead">Để lại thông tin, DCC sẽ tư vấn miễn phí và đúng diện cho bạn — minh bạch ngay từ cuộc gọi đầu tiên.</p>
        <div class="bx-actions bx-actions-center">
          <a class="btn primary bx-btn-lg" href="#/don-hang">Đăng ký tư vấn miễn phí</a>
          <a class="btn bx-btn-line bx-btn-line-dark" href="#/tra-cuu-ho-so">Tra cứu tiến độ hồ sơ</a>
        </div>
      </div>
    </section>
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

// ===== Chuyển việc / chuyển chủ tại Đức (dành cho người đang ở Đức) =====
// Nghề có thể chuyển theo từng diện. Azubi dùng danh mục nghề Ausbildung; 18A/18B dùng danh mục tay nghề.
const TRANSFER_CAREERS = {
  'Azubi': GERMANY_CAREERS['Du học nghề Đức'],
  '18A': GERMANY_CAREERS['Chuyển đổi văn bằng 18B/18A'],
  '18B': GERMANY_CAREERS['Chuyển đổi văn bằng 18B/18A'],
};

const TRANSFER_TRACKS = [
  {
    tag: 'Azubi',
    icon: '🎓',
    title: 'Dành cho bạn đang là Azubi',
    sub: 'Đang học nghề (Ausbildung) muốn ĐỔI CHỦ (Betrieb), đổi nghề học mới hoặc chuyển sang thành phố/bang khác.',
    when: [
      'Môi trường học nghề hiện tại không phù hợp, bị chèn ép hoặc ít được dạy nghề thật.',
      'Muốn đổi sang nghề học khác đúng sở thích, đúng năng lực hơn.',
      'Muốn chuyển tới thành phố/bang có thu nhập, cộng đồng hoặc cơ hội tốt hơn.',
    ],
    support: [
      'Rà soát hợp đồng đào tạo & thời điểm được phép chuyển (Probezeit, thoả thuận chấm dứt).',
      'Tìm Betrieb mới nhận tiếp nhận Azubi đúng nghề, đúng khu vực bạn muốn.',
      'Hỗ trợ hồ sơ chuyển trường nghề (Berufsschule) và thủ tục với Ausländerbehörde.',
    ],
    careers: GERMANY_CAREERS['Du học nghề Đức'],
  },
  {
    tag: '18A / 18B',
    icon: '📘',
    title: 'Dành cho lao động diện 18A / 18B',
    sub: '§18a (bằng nghề) và §18b (bằng đại học) muốn ĐỔI CHỦ, đổi hợp đồng lao động hoặc chuyển vùng làm việc.',
    when: [
      'Hết hạn hoặc không hài lòng với hợp đồng lao động hiện tại.',
      'Có cơ hội việc làm mới với mức lương, vị trí hoặc ngành phù hợp hơn.',
      'Muốn chuyển tới bang/thành phố khác để gần gia đình hoặc cộng đồng người Việt.',
    ],
    support: [
      'Đánh giá điều kiện đổi chủ theo Luật Nhập cư (đổi chủ, đổi ngành cần lưu ý gì).',
      'Kết nối nhà tuyển dụng Đức và chuẩn bị hợp đồng lao động mới phù hợp diện 18a/18b.',
      'Hỗ trợ thủ tục công nhận văn bằng (KMK/ZAB, NARIC) nếu chuyển ngành và cập nhật visa/giấy phép cư trú.',
    ],
    careers: GERMANY_CAREERS['Chuyển đổi văn bằng 18B/18A'],
  },
];

function renderTransferTrack(track) {
  return `<article class="track-card">
    <div class="track-head"><span class="track-icon">${track.icon}</span><div><span class="track-tag">${track.tag}</span><h3>${track.title}</h3></div></div>
    <p class="track-sub">${track.sub}</p>
    <h4>Khi nào nên chuyển?</h4>
    <ul class="track-list">${track.when.map((t) => `<li>${t}</li>`).join('')}</ul>
    <h4>DCC hỗ trợ bạn</h4>
    <ul class="track-list">${track.support.map((t) => `<li>${t}</li>`).join('')}</ul>
    <h4>Một số nghề có thể chuyển</h4>
    <div class="track-careers">${track.careers.map((c) => `<span>${c}</span>`).join('')}</div>
    <a class="btn secondary full" href="#transferForm" data-scroll="transferForm">Đăng ký chuyển ${track.tag}</a>
  </article>`;
}

function renderTransferOptions() {
  // option mặc định + 2 nhóm ngành (Azubi / tay nghề) cho ô "nghề mong muốn".
  const azubi = GERMANY_CAREERS['Du học nghề Đức'];
  const skilled = GERMANY_CAREERS['Chuyển đổi văn bằng 18B/18A'];
  return `<option value="">— Chọn nghề / công việc —</option>
    <optgroup label="Nghề học (Azubi)">${azubi.map((c) => `<option>${c}</option>`).join('')}</optgroup>
    <optgroup label="Tay nghề (18A / 18B)">${skilled.map((c) => `<option>${c}</option>`).join('')}</optgroup>
    <option value="Nghề khác">Nghề khác (ghi rõ ở ghi chú)</option>`;
}

function renderJobTransferForm() {
  return `
    <section class="section wish-section" id="transferForm">
      <div class="container">
        ${sectionHeader('Đăng ký chuyển việc', 'Gửi nguyện vọng & hồ sơ chuyển việc tại Đức', 'Cho DCC biết bạn đang ở diện nào, muốn chuyển đến đâu và làm nghề gì. Bạn có thể gửi kèm hồ sơ/CV để DCC tư vấn nhanh và chính xác hơn.')}
        <form id="jobTransferForm" class="lead-form wish-form" novalidate>
          <div class="wish-grid">
            <label>Bạn đang ở diện nào? *
              <select name="dien" data-transfer-dien required>
                <option value="">— Chọn diện hiện tại —</option>
                <option value="Azubi">Azubi (đang học nghề)</option>
                <option value="18A">18A (bằng nghề)</option>
                <option value="18B">18B (bằng đại học)</option>
              </select>
            </label>
            <label>Nghề / ngành hiện tại
              <input name="current_career" placeholder="Ví dụ: Điều dưỡng, Nhà hàng – khách sạn…" />
            </label>
            <label>Nghề / công việc mong muốn chuyển sang
              <select name="desired_career">${renderTransferOptions()}</select>
            </label>
            <label>Bang / thành phố ĐANG Ở
              <select name="current_location">${renderGermanyOptions()}</select>
            </label>
            <label>Bang / thành phố MUỐN CHUYỂN TỚI
              <select name="desired_location">${renderGermanyOptions()}</select>
            </label>
            <label>Trình độ tiếng Đức hiện tại
              <select name="german_level"><option>Chưa học</option><option>A1</option><option>A2</option><option>B1</option><option>B2</option></select>
            </label>
            <label>Thời gian mong muốn chuyển
              <input name="desired_time" placeholder="Ví dụ: ngay khi có chỗ, sau 3 tháng…" />
            </label>
            <label>Họ và tên *
              <input name="full_name" required placeholder="Nguyễn Văn A" />
            </label>
            <label>Số WhatsApp *
              <input name="whatsapp" required placeholder="+49 1xx xxxxxxx" />
            </label>
            <label>Số điện thoại / Zalo khác
              <input name="other_phone" placeholder="(không bắt buộc)" />
            </label>
            <label>Email
              <input name="email" type="email" placeholder="email@example.com" />
            </label>
            <label class="wish-note">Lý do muốn chuyển việc / chuyển chủ
              <textarea name="reason" rows="2" placeholder="Mô tả ngắn tình huống hiện tại và mong muốn của bạn…"></textarea>
            </label>
            <div class="wish-note transfer-docs" data-transfer-docs>
              <p class="wish-subhead">📎 Gửi hồ sơ của bạn (DCC nhận hồ sơ tại Đức)</p>
              <div class="wish-subgrid">
                <label>Link hồ sơ / CV (Google Drive, Dropbox…)
                  <input name="doc_link" placeholder="https://drive.google.com/..." />
                </label>
                <label>Hoặc tải file lên (CV, hợp đồng, bằng cấp…)
                  <input type="file" name="files" data-transfer-files multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.heic,.webp" />
                </label>
              </div>
              <p class="muted transfer-hint">Tối đa 3 file, tổng dưới ~3MB. File lớn hơn vui lòng gửi qua link Drive hoặc WhatsApp. Hồ sơ chỉ dùng để tư vấn, được bảo mật.</p>
            </div>
            <label class="wish-note">Ghi chú thêm
              <textarea name="note" rows="2" placeholder="Mong muốn cụ thể về chủ mới, mức lương, khu vực…"></textarea>
            </label>
          </div>
          <div class="wish-actions">
            <button class="btn primary" type="submit">Gửi nguyện vọng & hồ sơ chuyển việc</button>
            <span class="secure-inline">🔒 Thông tin & hồ sơ được bảo mật, chỉ dùng để tư vấn chuyển việc phù hợp.</span>
          </div>
          <p id="transferMessage" class="form-message" role="status"></p>
        </form>
      </div>
    </section>`;
}

function renderJobTransferPage() {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">Đang sống & làm việc tại Đức?</p><h1>Chuyển việc, chuyển chủ & đổi nghề tại Đức</h1><p>DCC đồng hành cùng các bạn đang ở Đức tìm một công việc mới, một nghề học mới hoặc một người chủ phù hợp hơn — đúng ngành, đúng thành phố và tiểu bang bạn mong muốn.</p><div class="hero-actions"><a class="btn primary" href="#transferForm" data-scroll="transferForm">Đăng ký chuyển việc</a><a class="btn secondary" href="#tracks" data-scroll="tracks">Xem cho Azubi & 18A/18B</a></div></div></section>
    <section class="section" id="tracks"><div class="container">${sectionHeader('Hai nhóm hỗ trợ', 'Bạn thuộc nhóm nào?', 'DCC chia rõ hai lộ trình để hỗ trợ đúng tình huống pháp lý và đúng nhu cầu của bạn.')}
      <div class="track-grid">${TRANSFER_TRACKS.map(renderTransferTrack).join('')}</div>
    </div></section>
    ${renderJobTransferForm()}`;
}

function renderRisksSection(short = false) {
  const list = short ? RISKS.slice(0, 4) : RISKS;
  return `<section class="section risks-section" id="risks"><div class="container">${sectionHeader('Minh bạch', 'Những rủi ro nên biết trước khi bắt đầu', 'Chúng tôi nói thẳng về rủi ro để bạn chuẩn bị chủ động — và cho biết DCC giúp bạn giảm thiểu từng điều ra sao.')}
    <div class="risk-list">${list.map(([risk, support]) => `<details class="risk-item"><summary>${risk}</summary><div><h4>DCC hỗ trợ giảm rủi ro bằng cách nào?</h4><p>${support}</p></div></details>`).join('')}</div>
    ${short ? '<a class="btn secondary center-btn" href="#/rui-ro-can-biet">Xem đầy đủ các rủi ro</a>' : ''}
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
        <button class="btn secondary" type="button" data-logout>Đăng xuất</button>
      </div>
    </div>
    <div id="lookupResult" class="lookup-result" data-auto="${(account.email || account.phone || account.code || '')}"></div>
    <p class="muted" style="margin-top:var(--s4)">Mọi thắc mắc về hồ sơ, anh/chị liên hệ hotline/Zalo <b>076 778 7879</b>.</p>
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
  const account = getAccount();
  const isPartner = account && account.role === 'partner';
  return `<section class="page-hero"><div class="container"><p class="eyebrow">Đối tác</p><h1>Gửi hồ sơ ứng viên về DCC</h1><p>Dành cho tất cả đối tác của DCC: chỉ cần đăng nhập tài khoản đối tác là tải hồ sơ ứng viên lên được ngay. Bạn không phải nhập lại tên — hệ thống tự nhận biết hồ sơ do đối tác nào gửi để DCC tiếp nhận và phản hồi sớm nhất.</p><div class="hero-actions"><a class="btn primary" data-scroll="partner-upload">${isPartner ? 'Tải hồ sơ lên' : 'Đăng nhập để gửi hồ sơ'}</a><a class="btn ghost" href="#/lien-he">Liên hệ DCC</a></div></div></section>
  <section class="section"><div class="container">
    ${sectionHeader('Vì sao hợp tác với DCC', 'Mối quan hệ xây trên sự minh bạch và tôn trọng', 'Chúng tôi không xem đối tác là một kênh giao dịch — mà là người đồng hành cùng đưa học viên Việt sang Đức.')}
    <div class="why-grid">${benefits.map(([icon, title, text]) => `<article><span>${icon}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
  </div></section>
  <section class="section register-section" id="partner-upload"><div class="container">
    ${sectionHeader('Upload hồ sơ', 'Đối tác tải hồ sơ ứng viên lên', 'Đăng nhập tài khoản đối tác rồi đính kèm file hồ sơ ứng viên (CV, bằng cấp, giấy tờ). DCC tự biết hồ sơ do đối tác nào gửi và sẽ liên hệ lại với bạn.')}
    ${isPartner ? renderPartnerUploadForm(account) : renderPartnerUploadGate()}
  </div></section>`;
}

function renderPartnerUploadGate() {
  return `<div class="account-form-full upload-gate">
    <p class="upload-gate-ico">🔐</p>
    <h3>Vui lòng đăng nhập tài khoản đối tác</h3>
    <p class="muted">Đối tác đăng nhập để DCC biết hồ sơ do ai gửi — bạn không phải nhập lại tên mỗi lần.</p>
    <form class="account-form" data-login="partner">
      <label>Email hoặc số điện thoại<input name="identifier" required placeholder="email@example.com hoặc 09xxxxxxxx" /></label>
      <label>Mật khẩu<input name="password" type="password" required placeholder="••••••" /></label>
      <button class="btn primary full" type="submit">Đăng nhập & gửi hồ sơ</button>
      <p class="form-message" role="status"></p>
    </form>
    <div class="login-foot">Chưa là đối tác? <a class="text-link" href="#/dang-ky">Đăng ký đối tác →</a></div>
  </div>`;
}

// Toàn bộ ngành nghề (gộp mọi chương trình, có nhóm) cho ô ngành nghề đối tác.
function renderAllCareerOptions() {
  const groups = Object.entries(GERMANY_CAREERS)
    .map(([prog, list]) => `<optgroup label="${prog}">${list.map((c) => `<option>${c}</option>`).join('')}</optgroup>`)
    .join('');
  return `<option value="">— Chọn ngành / nghề —</option>${groups}<option>Ngành nghề khác (ghi rõ ở ghi chú)</option>`;
}

function renderPartnerUploadForm(account) {
  const levels = ['Chưa học', 'A1', 'A2', 'B1', 'B2'];
  const dienList = ['Du học nghề', '18B', '18A', 'Au-pair', 'Thời vụ 8 tháng', 'Khác'];
  const kmkOpts = ['Chưa làm', 'Đang làm', 'Đã có kết quả'];
  const who = [account.name, account.code ? `(${account.code})` : ''].filter(Boolean).join(' ');
  return `<form id="partnerUploadForm" class="lead-form account-form-full" novalidate>
    <legend>Form đối tác gửi hồ sơ ứng viên</legend>
    <p class="upload-who">Đang đăng nhập: <b>${who || 'Đối tác DCC'}</b> · <a class="text-link" href="#/hoc-vien">đổi tài khoản</a></p>
    <div class="form-grid-2">
      <label>Họ tên ứng viên<input name="candidate_name" placeholder="Tên ứng viên trong hồ sơ này (nếu có)"></label>
      <label>Hồ sơ đi theo diện<select name="dien" data-partner-dien><option value="">— Chọn diện —</option>${dienList.map((d) => `<option>${d}</option>`).join('')}</select></label>
      <label>Ngành / nghề ứng viên<select name="career">${renderAllCareerOptions()}</select></label>
      <label>Vị trí làm việc (bang / thành phố)<select name="desired_location">${renderGermanyOptions()}</select></label>
      <label>Trình độ tiếng Đức<select name="german_level"><option value="">— Chọn trình độ —</option>${levels.map((l) => `<option>${l}</option>`).join('')}</select></label>
      <label>Email đối tác<input type="email" name="partner_email" value="${account.email || ''}" placeholder="Để DCC liên hệ lại — không bắt buộc"></label>
      <label>SĐT / Zalo đối tác<input name="partner_phone" value="${account.phone || ''}" placeholder="Để DCC liên hệ lại — không bắt buộc"></label>
    </div>
    <div class="wish-note" data-partner-18 hidden>
      <p class="wish-note-title">Hồ sơ diện 18A/18B — đã làm công nhận bằng chưa?</p>
      <div class="form-grid-2">
        <label>Đã có KMK/ZAB chưa?<select name="kmk_zab"><option value="">— Chọn —</option>${kmkOpts.map((o) => `<option>${o}</option>`).join('')}</select></label>
        <label>Đã có NARIC chưa?<select name="naric"><option value="">— Chọn —</option>${kmkOpts.map((o) => `<option>${o}</option>`).join('')}</select></label>
      </div>
    </div>
    <label>Ghi chú<textarea name="note" rows="3" placeholder="Thông tin thêm về ứng viên / bộ hồ sơ gửi kèm"></textarea></label>
    <label>File hồ sơ<input type="file" data-partner-files multiple><small>Đính kèm mọi loại file (CV, bằng cấp, ảnh, giấy tờ...). Tối đa 50 file. Ảnh VÀ PDF sẽ được TỰ ĐỘNG NÉN khi gửi nên cứ chụp/quét thoải mái; các định dạng khác (ZIP, DOCX...) nên dưới ~3MB, nặng hơn vui lòng tách nhỏ hoặc gửi qua Zalo DCC.</small></label>
    <p class="form-note">🔒 Email và số điện thoại sẽ được che bớt (vd 09••••78) ở cả bản nội bộ lẫn bản gửi đối tác tại Đức — khi cần DCC liên hệ trực tiếp với bạn để lấy đầy đủ.</p>
    <button class="btn primary" type="submit">Gửi hồ sơ</button>
    <p id="partnerUploadMessage" class="form-message" role="status"></p>
  </form>`;
}

function renderInternalApp() {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">App nội bộ</p><h1>Trung tâm điều hành nội bộ DCC</h1><p>Phân quyền theo vai trò: admin, quản lý, nhân viên, giáo viên, đối tác và học viên — mỗi người chỉ thấy phần dữ liệu thuộc trách nhiệm của mình.</p><div class="hero-actions"><a class="btn primary" href="${(window.DCC_PUBLIC_CONFIG || {}).STAFF_APP_URL || 'https://app.deutschconnectcenter.com'}">Mở ứng dụng nội bộ</a></div></div></section><section class="section"><div class="container"><div class="role-grid">${['admin: xem và quản lý tất cả', 'manager: xem phần được giao', 'staff: xem khách/hồ sơ assign_to', 'teacher: lớp/học viên được phân công', 'partner: học viên do mình gửi', 'student/customer: hồ sơ của chính mình'].map((role) => `<span>${role}</span>`).join('')}</div><div class="module-grid">${MODULES.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></div></section>`;
}

function renderLookupPage() {
  const account = getAccount();
  const prefill = account ? (account.email || account.phone || account.code || '') : '';
  return `<section class="page-hero"><div class="container"><p class="eyebrow">Tra cứu hồ sơ</p><h1>Tra cứu tiến độ hồ sơ</h1><p>Học viên nhập mã tra cứu / email / số điện thoại đã đăng ký. Đối tác nhập email / số điện thoại / mã hồ sơ để xem tình trạng hồ sơ đã gửi.</p></div></section>
  <section class="section"><div class="container narrow">
    <form id="lookupForm" class="lead-form lookup-form">
      <label>Mã tra cứu / Email / Số điện thoại
        <input name="identifier" required value="${prefill}" placeholder="DCC-2026-xxxxx · email · số điện thoại · mã hồ sơ" />
      </label>
      <button class="btn primary" type="submit">Tra cứu tiến độ</button>
      <p class="muted">Tra cứu hiển thị toàn bộ hồ sơ bạn đã đăng ký/gửi với DCC và tình trạng xử lý của từng hồ sơ.</p>
    </form>
    <div id="lookupResult" class="lookup-result" data-auto="${prefill ? '1' : ''}"></div>
  </div></section>`;
}
function renderAboutContact(path) { return `<section class="page-hero"><div class="container"><p class="eyebrow">${path === '/gioi-thieu' ? 'Giới thiệu' : 'Liên hệ'}</p><h1>Deutsch Connect Center</h1><p>Trung tâm hỗ trợ học tiếng Đức, tuyển sinh du học nghề, chuyển đổi văn bằng 18B/18A, Au-pair, thời vụ 8 tháng, hồ sơ visa và kết nối đối tác tại Đức.</p></div></section>${renderWhySection()}${renderRegisterSection()}`; }

function bindInteractions() {
  const wishForm = $('#wishForm');
  if (wishForm) bindWishForm(wishForm);

  const transferForm = $('#jobTransferForm');
  if (transferForm) bindJobTransferForm(transferForm);

  const partnerUpload = $('#partnerUploadForm');
  if (partnerUpload) {
    const dienSel = $('[data-partner-dien]', partnerUpload);
    const block18 = $('[data-partner-18]', partnerUpload);
    if (dienSel && block18) {
      const sync18 = () => { block18.hidden = !['18A', '18B'].includes(dienSel.value); };
      dienSel.addEventListener('change', sync18);
      sync18();
    }
    partnerUpload.addEventListener('submit', submitPartnerUpload);
  }

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

  // Tra cứu tiến độ hồ sơ
  bindLookup();

  $$('[data-scroll]').forEach((el) => el.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.getElementById(el.dataset.scroll);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }));

  bindHomeExperience();
}

// Địa cầu 3D (trang chủ) + chuyển cảnh điện ảnh khi cuộn (toàn site).
function bindHomeExperience() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stage = $('.bx-stage');
  const canvas = $('.bx-globe');

  // Dọn instance địa cầu cũ (tránh chạy nhiều vòng lặp khi đổi trang).
  if (window.__bxGlobe) { window.__bxGlobe.destroy(); window.__bxGlobe = null; }
  if (canvas) window.__bxGlobe = startGlobe(canvas, stage, reduce);

  bindScrollScenes(reduce);
}

// Gắn chuyển cảnh cao cấp: lộ khối theo biến thể + so le, trigger keyframe, parallax.
// Dùng rAF + getBoundingClientRect (tin cậy mọi trình duyệt) thay cho IntersectionObserver.
function bindScrollScenes(reduce) {
  if (window.__fxCleanup) { window.__fxCleanup(); window.__fxCleanup = null; }

  const seen = new Set();
  const pending = [];   // phần tử .fx chờ lộ ra
  const triggers = [];  // band chỉ cần bật keyframe (không ẩn)

  const add = (el, variant, delay) => {
    if (!el || seen.has(el)) return;
    seen.add(el);
    if (variant) el.classList.add('fx', 'fx-' + variant);
    if (delay) el.style.transitionDelay = delay + 'ms';
    if (reduce) { el.classList.add('is-in'); return; }
    pending.push(el);
  };
  const group = (containerSel, variant) => {
    $$(containerSel).forEach((g) => {
      Array.from(g.children).forEach((c, i) => add(c, variant, Math.min(i, 7) * 90));
    });
  };

  // Tiêu đề lớn — màn nhung kéo lên.
  ['.page-hero h1', '.section-head h2', '.bx-section-head h2', '.bx-cta h2', '.bx-bridge-title'].forEach((s) => $$(s).forEach((el) => add(el, 'mask')));
  // Văn bản quanh tiêu đề.
  ['.page-hero .eyebrow', '.page-hero p', '.section-head .eyebrow', '.section-head .section-copy', '.bx-section-head .bx-kicker', '.bx-section-head .bx-section-lead', '.bx-cta .bx-kicker', '.bx-cta .bx-cta-lead', '.bx-cta .bx-actions', '.bx-bridge .bx-kicker'].forEach((s) => $$(s).forEach((el) => add(el, 'up')));
  // Cung cầu + số liệu.
  $$('.bx-bridge-arc').forEach((el) => add(el, 'zoom'));
  group('.bx-bridge-stats', 'up');
  // Lưới thẻ — phóng nhẹ so le.
  ['.bx-principles', '.program-grid', '.why-grid', '.module-grid', '.orders-list', '.gallery-grid', '.track-grid'].forEach((s) => group(s, 'zoom'));
  // Hàng/khối — trượt lên so le.
  ['.timeline', '.risk-list', '.filters', '.portal-grid'].forEach((s) => group(s, 'up'));
  // Khối đơn lẻ ở các trang.
  ['.wish-form', '.lead-form', '.register-grid', '.detail-grid', '.login-card', '.lookup-card', '.profile-card', '.aw-card', '.partner-portal .compact-form'].forEach((s) => $$(s).forEach((el) => add(el, 'up')));

  // Đường kẻ ngăn cách: chèn thêm trước mỗi tiêu đề mục (trang khác), rồi đăng ký vẽ-ra.
  $$('.section-head').forEach((head) => {
    const prev = head.previousElementSibling;
    if (prev && prev.classList.contains('scene-rule')) return;
    const d = document.createElement('div');
    d.className = 'scene-rule'; d.setAttribute('aria-hidden', 'true');
    head.parentNode.insertBefore(d, head);
  });
  $$('.scene-rule').forEach((el) => add(el));

  // Band cung cầu — chỉ bật keyframe vẽ cung, không ẩn nội dung.
  $$('.bx-bridge').forEach((el) => { if (reduce) el.classList.add('is-in'); else triggers.push(el); });
  // Parallax chiều sâu cho lớp nền trang trí (trình duyệt hỗ trợ scroll-timeline).
  if (!reduce) $$('.bx-bridge .bx-aurora-soft').forEach((el) => el.classList.add('fx-parallax'));

  if (reduce || (!pending.length && !triggers.length)) return;

  let raf = 0;
  const check = () => {
    raf = 0;
    const vh = window.innerHeight;
    for (let i = pending.length - 1; i >= 0; i--) {
      const t = pending[i].getBoundingClientRect().top;
      if (t < vh * 0.9) { pending[i].classList.add('is-in'); pending.splice(i, 1); }
    }
    for (let i = triggers.length - 1; i >= 0; i--) {
      const r = triggers[i].getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) { triggers[i].classList.add('is-in'); triggers.splice(i, 1); }
    }
  };
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  check(); requestAnimationFrame(check);  // lộ ngay phần đầu trang
  window.__fxCleanup = () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    if (raf) cancelAnimationFrame(raf);
  };
}

// Vẽ địa cầu holographic: bản đồ thế giới thật (biên giới + tên nước) xoay 3D,
// khí quyển phát sáng, cung sáng nối Việt Nam → Đức. Dữ liệu: window.DCC_WORLD.
function startGlobe(canvas, stage, reduce) {
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, cx = 0, cy = 0, R = 0, DPR = 1;
  let raf = 0, tick = 0, rot = -1.1, tilt = 0.32, alive = true;
  let velRot = 0, velTilt = 0, dragging = false, lastX = 0, lastY = 0, dvx = 0, dvy = 0;
  const AUTO = reduce ? 0 : 0.0016;

  const v = (lon, lat) => {
    const la = lat * Math.PI / 180, lo = lon * Math.PI / 180;
    return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)];
  };
  const VN = v(108, 16), DE = v(10, 51);

  // Khung cầu: lưới kinh/vĩ tuyến mảnh.
  const graticule = [];
  for (let m = 0; m < 12; m++) {
    const lon = (m / 12) * 360 - 180, ring = [];
    for (let k = 0; k <= 48; k++) ring.push(v(lon, -90 + (k / 48) * 180));
    graticule.push(ring);
  }
  for (let p = 1; p < 6; p++) {
    const lat = -90 + (p / 6) * 180, ring = [];
    for (let k = 0; k <= 48; k++) ring.push(v(-180 + (k / 48) * 360, lat));
    graticule.push(ring);
  }

  // Biên giới quốc gia + nhãn tên nước từ window.DCC_WORLD.
  const borders = [], labels = [];
  (function buildWorld() {
    const data = window.DCC_WORLD;
    if (!Array.isArray(data)) return;
    let labeled = 0;
    data.forEach((c) => {
      const name = c[0], rank = c[1], clon = c[2], clat = c[3], polys = c[4];
      polys.forEach((flat) => {
        const ring = [];
        for (let i = 0; i < flat.length; i += 2) ring.push(v(flat[i], flat[i + 1]));
        borders.push(ring);
      });
      const isVN = name === 'Vietnam', isDE = name === 'Germany';
      if (isVN || isDE || (rank <= 3 && labeled < 24)) {
        labels.push({ name: isVN ? 'VIỆT NAM' : isDE ? 'ĐỨC' : name.toUpperCase(), pos: v(clon, clat), hot: isVN || isDE });
        if (!isVN && !isDE) labeled++;
      }
    });
  })();

  // Cung lớn VN → DE (nâng nhẹ khỏi mặt cầu).
  const arc = [];
  const dp = VN[0] * DE[0] + VN[1] * DE[1] + VN[2] * DE[2];
  const omega = Math.acos(Math.max(-1, Math.min(1, dp))) || 1e-3, so = Math.sin(omega) || 1;
  for (let k = 0; k <= 64; k++) {
    const t = k / 64, a = Math.sin((1 - t) * omega) / so, b = Math.sin(t * omega) / so;
    let x = a * VN[0] + b * DE[0], y = a * VN[1] + b * DE[1], z = a * VN[2] + b * DE[2];
    const len = Math.hypot(x, y, z) || 1, lift = 1 + 0.16 * Math.sin(Math.PI * t);
    arc.push([x / len * lift, y / len * lift, z / len * lift]);
  }

  const rotY = (p, c, s) => [c * p[0] + s * p[2], p[1], -s * p[0] + c * p[2]];
  const rotX = (p, c, s) => [p[0], c * p[1] - s * p[2], s * p[1] + c * p[2]];

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    if (!W || !H) return;
    canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    cx = W / 2; cy = H / 2; R = Math.min(W, H) * 0.42;
  }

  function frame() {
    if (!alive) return;
    tick++;
    if (!dragging) {
      velRot += (AUTO - velRot) * 0.03;   // êm dần về tốc độ tự xoay
      velTilt *= 0.90;                     // quán tính nghiêng tắt dần
      rot += velRot; tilt += velTilt;
      if (tilt > 1.2) { tilt = 1.2; velTilt = 0; }
      if (tilt < -1.2) { tilt = -1.2; velTilt = 0; }
    }
    const cyr = Math.cos(rot), syr = Math.sin(rot);
    const cxr = Math.cos(tilt), sxr = Math.sin(tilt);
    const P = (p) => {
      let q = rotY(p, cyr, syr); q = rotX(q, cxr, sxr);
      const pe = 1 / (1 - q[2] * 0.28);
      return { x: cx + q[0] * R * pe, y: cy - q[1] * R * pe, z: q[2], s: pe };
    };
    ctx.clearRect(0, 0, W, H);
    if (!W || !H) { raf = requestAnimationFrame(frame); return; }

    // 1) Khí quyển + đĩa biển tối.
    const halo = ctx.createRadialGradient(cx, cy, R * 0.55, cx, cy, R * 1.35);
    halo.addColorStop(0, 'rgba(20,52,98,0)');
    halo.addColorStop(0.72, 'rgba(36,86,150,0.16)');
    halo.addColorStop(0.86, 'rgba(96,150,220,0.30)');
    halo.addColorStop(1, 'rgba(96,150,220,0)');
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(cx, cy, R * 1.35, 0, 6.2832); ctx.fill();
    const sea = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.35, R * 0.2, cx, cy, R);
    sea.addColorStop(0, 'rgba(14,38,72,0.95)');
    sea.addColorStop(1, 'rgba(7,18,38,0.98)');
    ctx.fillStyle = sea;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.2832); ctx.fill();

    // Giới hạn map trong đĩa cầu.
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.2832); ctx.clip();

    // 2) Lưới kinh vĩ mờ.
    ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(90,135,195,0.13)';
    ctx.beginPath();
    for (const ring of graticule) {
      let st = false;
      for (const p of ring) {
        const pr = P(p);
        if (pr.z <= 0.02) { st = false; continue; }
        if (!st) { ctx.moveTo(pr.x, pr.y); st = true; } else ctx.lineTo(pr.x, pr.y);
      }
    }
    ctx.stroke();

    // 3) Biên giới quốc gia phát sáng (gộp 1 path, vẽ quầng + nét).
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath();
    for (const ring of borders) {
      let st = false;
      for (const p of ring) {
        const pr = P(p);
        if (pr.z <= 0.03) { st = false; continue; }
        if (!st) { ctx.moveTo(pr.x, pr.y); st = true; } else ctx.lineTo(pr.x, pr.y);
      }
    }
    ctx.strokeStyle = 'rgba(150,200,255,0.16)'; ctx.lineWidth = 2.4; ctx.stroke();
    ctx.strokeStyle = 'rgba(214,226,248,0.6)'; ctx.lineWidth = 0.8; ctx.stroke();

    ctx.restore();

    // 4) Viền cầu (rim).
    ctx.strokeStyle = 'rgba(120,170,235,0.40)'; ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.2832); ctx.stroke();

    // 5) Cung VN → DE + xung sáng chạy.
    ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(224,184,98,0.92)';
    ctx.shadowColor = 'rgba(224,184,98,0.85)'; ctx.shadowBlur = 9;
    ctx.beginPath();
    let ast = false;
    for (const p of arc) {
      const pr = P(p);
      if (pr.z < -0.2) { ast = false; continue; }
      if (!ast) { ctx.moveTo(pr.x, pr.y); ast = true; } else ctx.lineTo(pr.x, pr.y);
    }
    ctx.stroke(); ctx.shadowBlur = 0;
    const ai = Math.floor(((tick % 200) / 200) * (arc.length - 1));
    const ap = P(arc[ai]);
    if (ap.z > -0.2) {
      ctx.fillStyle = 'rgba(255,248,228,0.98)';
      ctx.shadowColor = 'rgba(255,236,180,0.95)'; ctx.shadowBlur = 14;
      ctx.beginPath(); ctx.arc(ap.x, ap.y, 3 * ap.s, 0, 6.2832); ctx.fill(); ctx.shadowBlur = 0;
    }

    // 6) Mốc VN/DE (vòng nhịp).
    [[VN], [DE]].forEach(([m]) => {
      const pr = P(m);
      if (pr.z < 0.02) return;
      const pl = (tick % 90) / 90;
      ctx.strokeStyle = `rgba(236,202,125,${0.55 * (1 - pl)})`; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.arc(pr.x, pr.y, (4 + pl * 13) * pr.s, 0, 6.2832); ctx.stroke();
      ctx.fillStyle = '#f2d488';
      ctx.beginPath(); ctx.arc(pr.x, pr.y, 3.4 * pr.s, 0, 6.2832); ctx.fill();
    });

    // 7) Nhãn tên nước (chỉ mặt trước).
    ctx.textBaseline = 'middle';
    for (const l of labels) {
      const pr = P(l.pos);
      if (pr.z < 0.16) continue;
      if (l.hot) {
        ctx.font = '700 12px "Be Vietnam Pro", system-ui, sans-serif';
        ctx.fillStyle = `rgba(244,212,128,${Math.min(1, 0.5 + pr.z)})`;
        ctx.shadowColor = 'rgba(224,184,98,0.7)'; ctx.shadowBlur = 8;
        ctx.fillText(l.name, pr.x + 8, pr.y); ctx.shadowBlur = 0;
      } else {
        ctx.font = '600 9.5px "Be Vietnam Pro", system-ui, sans-serif';
        ctx.fillStyle = `rgba(208,222,245,${0.30 + 0.45 * pr.z})`;
        ctx.fillText(l.name, pr.x + 5, pr.y);
      }
    }

    raf = requestAnimationFrame(frame);
  }

  // Kéo (chuột/cảm ứng) để tự xoay địa cầu theo tốc độ rê + quán tính khi thả.
  const hero = $('.bx-hero');
  let onDown = null, onMove = null, onUp = null, onHero = null, onLeave = null;
  if (canvas) {
    canvas.style.cursor = 'grab'; canvas.style.touchAction = 'pan-y';
    onDown = (e) => {
      dragging = true; lastX = e.clientX; lastY = e.clientY; dvx = 0; dvy = 0;
      velRot = 0; velTilt = 0; canvas.style.cursor = 'grabbing';
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    };
    onMove = (e) => {
      if (!dragging) return;
      e.preventDefault();
      const k = 0.006;
      dvx = (e.clientX - lastX) * k; dvy = (e.clientY - lastY) * k;
      lastX = e.clientX; lastY = e.clientY;
      rot += dvx; tilt += dvy;
      if (tilt > 1.2) tilt = 1.2; if (tilt < -1.2) tilt = -1.2;
    };
    onUp = () => {
      if (!dragging) return;
      dragging = false; canvas.style.cursor = 'grab';
      velRot = dvx || AUTO; velTilt = dvy;   // thả ra: bay tiếp theo tốc độ vừa rê
    };
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
  }
  // Thẻ kính dịch nhẹ theo con trỏ (chiều sâu) — không can thiệp xoay.
  if (hero && stage && !reduce && window.matchMedia('(pointer: fine)').matches) {
    onHero = (e) => {
      const r = hero.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      stage.style.setProperty('--mx', `${(px * 22).toFixed(1)}px`);
      stage.style.setProperty('--my', `${(py * 22).toFixed(1)}px`);
    };
    onLeave = () => { stage.style.setProperty('--mx', '0px'); stage.style.setProperty('--my', '0px'); };
    hero.addEventListener('pointermove', onHero);
    hero.addEventListener('pointerleave', onLeave);
  }

  const ro = ('ResizeObserver' in window) ? new ResizeObserver(resize) : null;
  if (ro) ro.observe(canvas); else window.addEventListener('resize', resize);
  resize();
  raf = requestAnimationFrame(frame);

  return {
    destroy() {
      alive = false;
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect(); else window.removeEventListener('resize', resize);
      if (canvas && onDown) canvas.removeEventListener('pointerdown', onDown);
      if (canvas && onMove) canvas.removeEventListener('pointermove', onMove);
      if (onUp) { window.removeEventListener('pointerup', onUp); window.removeEventListener('pointercancel', onUp); }
      if (hero && onHero) hero.removeEventListener('pointermove', onHero);
      if (hero && onLeave) hero.removeEventListener('pointerleave', onLeave);
    },
  };
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
    if (window.dccTrack) dccTrack('CompleteRegistration', { content_name: role === 'partner' ? 'Đăng ký đối tác' : 'Đăng ký học viên' });
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

// ===== Tra cứu tiến độ hồ sơ =====
// 6 phần (mỗi phần gom một số "Giai đoạn hồ sơ" trong Notion).
const PROFILE_SECTIONS = [
  ['Đăng ký & tiếp nhận', ['Mới đăng ký']],
  ['Tư vấn & kiểm tra điều kiện', ['Đã tư vấn']],
  ['Học tiếng & hoàn thiện hồ sơ', ['Đang học tiếng', 'Đang hoàn thiện hồ sơ', 'Đã gửi đối tác']],
  ['Phỏng vấn & hợp đồng', ['Chờ phỏng vấn', 'Đã có hợp đồng']],
  ['Xin visa', ['Đang xử lý visa', 'Đã có visa']],
  ['Sang Đức & hỗ trợ', ['Đã bay', 'Đang hỗ trợ sau bay']],
];
const STAGE_ORDER = ['Mới đăng ký', 'Đã tư vấn', 'Đang học tiếng', 'Đang hoàn thiện hồ sơ', 'Đã gửi đối tác', 'Chờ phỏng vấn', 'Đã có hợp đồng', 'Đang xử lý visa', 'Đã có visa', 'Đã bay', 'Đang hỗ trợ sau bay'];
// "Tình trạng xử lý" (6 mức) — dùng cho hồ sơ học viên nội bộ & hồ sơ đối tác gửi. "Cần bổ sung" là trạng thái cảnh báo (ngoài thanh tiến độ).
const TINH_TRANG_ORDER = ['Đã tiếp nhận', 'Đang xử lý', 'Đang hoàn thiện hồ sơ', 'Đã gửi đối tác', 'Hoàn tất'];

function sectionIndexOfStage(stage) {
  const i = PROFILE_SECTIONS.findIndex(([, stages]) => stages.includes(stage));
  return i < 0 ? 0 : i;
}

function formatVNDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d)) return '';
  return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

async function profileApi(payload) {
  const config = window.DCC_PUBLIC_CONFIG || {};
  const endpoint = config.PROFILE_API || '/api/profile';
  const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.ok) throw new Error(data.error || `Lỗi tra cứu (HTTP ${response.status})`);
  return data;
}

function renderProgressDashboard(profile) {
  if (!profile.found || !profile.records.length) {
    return `<div class="lookup-empty">Chưa tìm thấy hồ sơ nào khớp thông tin này. Hãy kiểm tra lại mã/email/số điện thoại, hoặc <a class="text-link" href="#/dang-ky">đăng ký</a> nếu bạn chưa có hồ sơ.</div>`;
  }
  const head = `<div class="lookup-head"><h2>Hồ sơ của ${profile.name || 'bạn'}</h2><p class="muted">${profile.records.length} hồ sơ/chương trình đã đăng ký với DCC</p></div>`;
  return head + profile.records.map(renderProfileCard).join('');
}

const OLD_PROFILE_STATUS = 'Hồ sơ cũ (đã nhận trước đây)';

function renderProfileCard(rec) {
  if (TINH_TRANG_ORDER.includes(rec.stage) || rec.stage === 'Cần bổ sung' || rec.stage === OLD_PROFILE_STATUS) return renderStatusCard(rec);
  return renderLegacyCard(rec);
}

// Thẻ tiến độ theo "Tình trạng xử lý" (6 mức) — hồ sơ học viên nội bộ & hồ sơ đối tác gửi.
function renderStatusCard(rec) {
  const need = rec.stage === 'Cần bổ sung';
  const isOld = rec.stage === OLD_PROFILE_STATUS; // hồ sơ nhận từ trước (ngoài web) — coi như đã tiếp nhận
  const cur = (need ? -1 : Math.max(0, TINH_TRANG_ORDER.indexOf(rec.stage))); // isOld → indexOf = -1 → 0 (Đã tiếp nhận)
  const isFinal = rec.stage === 'Hoàn tất';
  const percent = need ? 0 : Math.round(((cur + 1) / TINH_TRANG_ORDER.length) * 100);
  const steps = TINH_TRANG_ORDER.map((label, i) => {
    let cls = 'pending';
    if (isFinal || i < cur) cls = 'done';
    else if (i === cur && !need) cls = 'current';
    return `<li class="prog-step ${cls}"><span class="ps-dot">${cls === 'done' ? '✓' : i + 1}</span><span class="ps-label">${label}</span></li>`;
  }).join('');
  const meta = [
    rec.career && `Ngành/nghề: ${rec.career}`,
    rec.level && `Tiếng Đức: ${rec.level}`,
    rec.location && `Nơi: ${rec.location}`,
    rec.code && `Mã: ${rec.code}`,
    rec.date && `Ngày: ${formatVNDate(rec.date)}`,
  ].filter(Boolean).map((m) => `<span>${m}</span>`).join('');
  return `<article class="profile-card">
    <div class="pc-head">
      <div><span class="pc-source">${rec.source}</span><h3>${rec.program}</h3></div>
      <span class="pc-stage">${rec.stage}</span>
    </div>
    ${need ? '<div class="pc-alert" style="color:#c0392b;font-weight:600;margin:.4rem 0;">⚠ Hồ sơ cần bổ sung — vui lòng liên hệ DCC để được hướng dẫn.</div>' : ''}
    ${isOld ? '<div class="pc-note" style="color:#7a5c3a;font-weight:600;margin:.4rem 0;">Hồ sơ đã được DCC tiếp nhận từ trước, đang trong quá trình xử lý.</div>' : ''}
    <div class="pc-bar"><span style="width:${percent}%"></span></div>
    <div class="pc-percent">${isFinal ? 'Hoàn tất 100%' : (need ? 'Cần bổ sung hồ sơ' : `Tiến độ ${percent}%`)}</div>
    <ol class="prog-steps">${steps}</ol>
    ${meta ? `<div class="pc-meta">${meta}</div>` : ''}
  </article>`;
}

// Thẻ tiến độ theo "Giai đoạn hồ sơ" (11 mốc → 6 phần) — dữ liệu cũ ở DB Lead / Thành viên.
function renderLegacyCard(rec) {
  const stage = rec.stage || 'Mới đăng ký';
  const stageIdx = Math.max(0, STAGE_ORDER.indexOf(stage));
  const curSection = sectionIndexOfStage(stage);
  const isFinal = stageIdx >= STAGE_ORDER.length - 1;
  const percent = Math.round(((stageIdx + 1) / STAGE_ORDER.length) * 100);
  const steps = PROFILE_SECTIONS.map(([title], idx) => {
    let cls = 'pending';
    if (isFinal || idx < curSection) cls = 'done';
    else if (idx === curSection) cls = 'current';
    return `<li class="prog-step ${cls}"><span class="ps-dot">${cls === 'done' ? '✓' : idx + 1}</span><span class="ps-label">${title}</span></li>`;
  }).join('');
  const meta = [
    rec.level && `Tiếng Đức: ${rec.level}`,
    rec.location && `Nơi ở: ${rec.location}`,
    rec.code && `Mã: ${rec.code}`,
    rec.date && `Đăng ký: ${formatVNDate(rec.date)}`,
  ].filter(Boolean).map((m) => `<span>${m}</span>`).join('');
  return `<article class="profile-card">
    <div class="pc-head">
      <div><span class="pc-source">${rec.source}</span><h3>${rec.program}</h3></div>
      <span class="pc-stage">${stage}</span>
    </div>
    <div class="pc-bar"><span style="width:${percent}%"></span></div>
    <div class="pc-percent">${isFinal ? 'Hoàn tất 100%' : `Tiến độ ${percent}%`}</div>
    <ol class="prog-steps">${steps}</ol>
    ${meta ? `<div class="pc-meta">${meta}</div>` : ''}
  </article>`;
}

async function loadProfile(identifier, container) {
  if (!container) return;
  container.innerHTML = `<div class="lookup-loading">Đang tải tiến độ hồ sơ…</div>`;
  try {
    const profile = await profileApi({ identifier });
    container.innerHTML = renderProgressDashboard(profile);
  } catch (error) {
    container.innerHTML = `<div class="lookup-empty">Hiện chưa tra cứu được. Vui lòng thử lại, hoặc liên hệ hotline/Zalo <b>076 778 7879</b>.</div>`;
  }
}

function bindLookup() {
  const form = $('#lookupForm');
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    const identifier = (new FormData(form).get('identifier') || '').toString().trim();
    if (identifier) loadProfile(identifier, $('#lookupResult'));
  });
  // Tự tải nếu đã có thông tin (đã đăng nhập hoặc đã điền sẵn ô tra cứu).
  const result = $('#lookupResult');
  if (result && result.dataset.auto) loadProfile(result.dataset.auto, result);
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
    if (window.DCC_I18N) DCC_I18N.apply();
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
    if (window.dccTrack) dccTrack('Lead', { content_name: 'Đăng ký nguyện vọng tư vấn' });
  } catch (error) {
    console.error(error);
    setMsg('Hiện chưa gửi được. Anh/chị vui lòng thử lại, hoặc liên hệ hotline/Zalo 076 778 7879 để được hỗ trợ nhanh.', 'error');
  }
}

function bindJobTransferForm(form) {
  const dienSel = $('[data-transfer-dien]', form);
  const careerSel = form.querySelector('[name="desired_career"]');
  const syncCareers = () => {
    const list = TRANSFER_CAREERS[dienSel.value];
    if (!careerSel) return;
    if (list && list.length) {
      careerSel.innerHTML = '<option value="">— Chọn nghề / công việc —</option>' +
        list.map((c) => `<option>${c}</option>`).join('') +
        '<option value="Nghề khác">Nghề khác (ghi rõ ở ghi chú)</option>';
    } else {
      careerSel.innerHTML = renderTransferOptions();
    }
    if (window.DCC_I18N) DCC_I18N.apply();
  };
  dienSel.addEventListener('change', syncCareers);
  form.addEventListener('submit', submitJobTransfer);
}

// Đọc 1 file thành base64 (bỏ tiền tố data:...;base64,).
function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, type: file.type, data: String(reader.result).split(',').pop() });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Vercel chỉ nhận body ≤ 4.5MB/request; base64 phình ~37% nên file thô phải < ~3MB.
const UPLOAD_SAFE_BYTES = 3 * 1024 * 1024;
// Mục tiêu nén ảnh xuống ~1.2MB: gửi nhanh + Notion upload nhanh, vẫn đủ nét đọc giấy tờ.
const UPLOAD_IMG_TARGET = Math.round(1.2 * 1024 * 1024);

// Nén ảnh ngay trên trình duyệt nếu vượt ngưỡng: thu nhỏ kích thước + hạ chất lượng JPEG
// (vẫn đủ nét để đọc giấy tờ) để lọt giới hạn body của Vercel. Cũng tự đổi HEIC/PNG nặng → JPEG.
// Trả về 1 File mới; nếu không phải ảnh / không nén được thì trả lại file gốc.
function compressImageFile(file, maxBytes) {
  return new Promise((resolve) => {
    if (!file.type || !file.type.startsWith('image/') || file.size <= maxBytes) { resolve(file); return; }
    const img = new Image();
    const url = URL.createObjectURL(file);
    const done = (out) => { URL.revokeObjectURL(url); resolve(out); };
    img.onerror = () => done(file); // trình duyệt không đọc được (vd HEIC trên Chrome) → giữ nguyên, sẽ báo ở bước kiểm tra
    img.onload = async () => {
      let { width, height } = img;
      const MAX_DIM = 2200; // đủ nét để đọc chữ trên giấy tờ
      if (Math.max(width, height) > MAX_DIM) {
        const r = MAX_DIM / Math.max(width, height);
        width = Math.round(width * r); height = Math.round(height * r);
      }
      const canvas = document.createElement('canvas');
      canvas.width = width; canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      const toJpeg = (q) => new Promise((res) => canvas.toBlob((b) => res(b), 'image/jpeg', q));
      const newName = file.name.replace(/\.[^.]+$/, '') + '.jpg';
      for (const q of [0.82, 0.7, 0.6, 0.5, 0.4]) {
        const blob = await toJpeg(q);
        if (blob && blob.size <= maxBytes) { done(new File([blob], newName, { type: 'image/jpeg' })); return; }
      }
      const last = await toJpeg(0.4);
      done(last ? new File([last], newName, { type: 'image/jpeg' }) : file);
    };
    img.src = url;
  });
}

// ===== Nén PDF ngay trên trình duyệt =====
// PDF không nén được kiểu vẽ-lại như ảnh, nên ta RASTER hoá: vẽ từng trang ra ảnh JPEG rồi
// đóng gói lại thành PDF mới nhẹ hơn (hạ độ phân giải + chất lượng dần đến khi đạt ngưỡng).
// Lưu ý: PDF sau khi nén là ảnh các trang (không còn chữ chọn-copy được) — đánh đổi để gửi được.
// Thư viện pdf.js + jsPDF chỉ nạp KHI cần (lazy) để không làm nặng web.
// Host same-origin (thư mục /vendor) để tránh lỗi worker cross-origin + không phụ thuộc CDN khi đối tác dùng.
const PDFJS_SRC = '/vendor/pdf.min.js';
const PDFJS_WORKER = '/vendor/pdf.worker.min.js';
const JSPDF_SRC = '/vendor/jspdf.umd.min.js';

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[data-src="${src}"]`)) { resolve(); return; }
    const s = document.createElement('script');
    s.src = src; s.dataset.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('load fail: ' + src));
    document.head.appendChild(s);
  });
}

let _pdfLibsPromise = null;
function ensurePdfLibs() {
  if (!_pdfLibsPromise) {
    _pdfLibsPromise = (async () => {
      await loadScriptOnce(PDFJS_SRC);
      await loadScriptOnce(JSPDF_SRC);
      if (window.pdfjsLib) window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
    })().catch((e) => { _pdfLibsPromise = null; throw e; });
  }
  return _pdfLibsPromise;
}

// Vẽ TẤT CẢ trang PDF ra canvas MỘT LẦN (bước tốn thời gian nhất). Cạnh dài mỗi trang được
// giới hạn ≈ maxDim px (đủ nét đọc giấy tờ) để render nhanh + ảnh nhẹ, dù PDF gốc to cỡ nào.
async function rasterizePdf(arrayBuffer, maxDim) {
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const canvases = [];
  for (let p = 1; p <= pdf.numPages; p++) {
    const page = await pdf.getPage(p);
    const base = page.getViewport({ scale: 1 });
    const scale = Math.min(2, maxDim / Math.max(base.width, base.height));
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height); // nền trắng (PDF có thể trong suốt)
    await page.render({ canvasContext: ctx, viewport }).promise;
    canvases.push(canvas);
  }
  return canvases;
}

// Thu nhỏ 1 canvas theo hệ số (không chạy lại pdf.js) — dùng khi cần giảm dung lượng thêm.
function shrinkCanvas(src, factor) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(src.width * factor));
  c.height = Math.max(1, Math.round(src.height * factor));
  c.getContext('2d').drawImage(src, 0, 0, c.width, c.height);
  return c;
}

// Đóng gói mảng canvas thành 1 PDF (ảnh JPEG chất lượng q). Trả về Blob.
function buildPdfFromCanvases(canvases, q) {
  const JsPDF = window.jspdf && window.jspdf.jsPDF;
  if (!JsPDF) return null;
  let doc = null;
  for (const canvas of canvases) {
    const w = canvas.width, h = canvas.height;
    const orient = w >= h ? 'l' : 'p';
    if (!doc) doc = new JsPDF({ orientation: orient, unit: 'pt', format: [w, h], compress: true });
    else doc.addPage([w, h], orient);
    doc.addImage(canvas.toDataURL('image/jpeg', q), 'JPEG', 0, 0, w, h);
  }
  return doc ? doc.output('blob') : null;
}

// Nén 1 file PDF xuống dưới maxBytes (nếu được). Render trang CHỈ 1 LẦN, rồi chỉ hạ chất lượng /
// thu nhỏ canvas đã có → nhanh hơn nhiều. Không phải PDF / lỗi → trả lại file gốc.
async function compressPdfFile(file, maxBytes) {
  try {
    await ensurePdfLibs();
    if (!window.pdfjsLib || !window.jspdf) return file;
    let canvases = await rasterizePdf(await file.arrayBuffer(), 1600); // render 1 lần, cạnh dài ≤1600px
    let smallest = null;
    const pack = (blob) => new File([blob], file.name, { type: 'application/pdf' });
    // 2 vòng thu nhỏ; mỗi vòng thử vài mức chất lượng (rẻ vì không render lại pdf.js).
    for (let round = 0; round < 3; round++) {
      for (const q of [0.7, 0.55, 0.45]) {
        const blob = buildPdfFromCanvases(canvases, q);
        if (!blob) break;
        if (!smallest || blob.size < smallest.size) smallest = blob;
        if (blob.size <= maxBytes) return pack(blob);
      }
      canvases = canvases.map((c) => shrinkCanvas(c, 0.75)); // còn lớn → thu nhỏ rồi thử lại
    }
    return smallest ? pack(smallest) : file;
  } catch (e) {
    console.error('compressPdfFile error', e);
    return file;
  }
}

async function submitJobTransfer(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const msg = $('#transferMessage');
  const setMsg = (text, type = '') => { if (msg) { msg.textContent = text; msg.className = `form-message ${type}`; } };
  const payload = Object.fromEntries(new FormData(form).entries());
  if (!payload.dien) { setMsg('Vui lòng chọn diện hiện tại của bạn (Azubi / 18A / 18B).', 'error'); return; }
  if (!payload.full_name || !payload.whatsapp) { setMsg('Vui lòng điền họ tên và số WhatsApp để DCC liên hệ lại.', 'error'); return; }

  // Đọc file hồ sơ (nếu có) — tối đa 3 file, tổng dưới ~3MB.
  const fileInput = $('[data-transfer-files]', form);
  const files = fileInput && fileInput.files ? Array.from(fileInput.files).slice(0, 3) : [];
  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  if (totalBytes > 3 * 1024 * 1024) {
    setMsg('Tổng dung lượng file vượt ~3MB. Vui lòng gửi file nhỏ hơn hoặc dán link Google Drive vào ô "Link hồ sơ / CV".', 'error');
    return;
  }

  payload.source = 'Website – Chuyển việc/chuyển chủ';
  payload.lookup_code = `DCC-CV-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  delete payload.files; // file lấy từ input, không lấy từ FormData text.

  try {
    setMsg(files.length ? 'Đang tải hồ sơ và gửi đăng ký...' : 'Đang gửi đăng ký...', '');
    payload.files = await Promise.all(files.map(readFileAsBase64));
    const config = window.DCC_PUBLIC_CONFIG || {};
    const endpoint = config.JOB_TRANSFER_API || '/api/job-transfer';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) throw new Error(data.error || `HTTP ${response.status}`);
    if (data.lookup_code) payload.lookup_code = data.lookup_code;
    form.reset();
    const fileMsg = data.files_uploaded ? ` Đã nhận ${data.files_uploaded} file hồ sơ.` : '';
    setMsg(`Cảm ơn bạn! DCC đã nhận nguyện vọng chuyển việc và sẽ liên hệ qua WhatsApp sớm.${fileMsg} Mã tra cứu: ${payload.lookup_code}`, 'success');
    if (window.dccTrack) dccTrack('Lead', { content_name: 'Chuyển việc, chuyển chủ tại Đức' });
  } catch (error) {
    console.error(error);
    setMsg('Hiện chưa gửi được. Vui lòng thử lại, hoặc liên hệ hotline/Zalo/WhatsApp 076 778 7879 để được hỗ trợ.', 'error');
  }
}

async function submitPartnerUpload(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const msg = $('#partnerUploadMessage');
  const setMsg = (text, type = '') => { if (msg) { msg.textContent = text; msg.className = `form-message ${type}`; } };
  const payload = Object.fromEntries(new FormData(form).entries());

  // Danh tính đối tác lấy từ tài khoản đã đăng nhập (không nhập tay).
  const account = getAccount();
  if (!account || account.role !== 'partner') {
    setMsg('Phiên đăng nhập đã hết. Vui lòng đăng nhập lại tài khoản đối tác.', 'error');
    return;
  }
  payload.partner_name = account.name || account.email || account.phone || 'Đối tác DCC';
  payload.partner_code = account.code || '';

  // File hồ sơ — tối đa 50 file, MỖI file ≤ ~4MB (gửi từng file để vượt giới hạn body của Vercel).
  const fileInput = $('[data-partner-files]', form);
  const files = fileInput && fileInput.files ? Array.from(fileInput.files).slice(0, 50) : [];
  if (!files.length) { setMsg('Vui lòng đính kèm ít nhất 1 file hồ sơ ứng viên.', 'error'); return; }

  payload.lookup_code = `DCC-HS-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  const config = window.DCC_PUBLIC_CONFIG || {};
  const endpoint = config.PARTNER_UPLOAD_API || '/api/partner-upload';
  const post = (body) => fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(async (r) => { const d = await r.json().catch(() => ({})); if (!r.ok || !d.ok) throw new Error(d.error || `HTTP ${r.status}`); return d; });

  const btn = $('button[type="submit"]', form);
  try {
    if (btn) btn.disabled = true;
    // Bước 1a: nén ảnh để gửi nhanh (ảnh >~1.2MB đều thu nhỏ — vẫn nét đọc giấy tờ,
    // mà payload nhẹ đi nhiều nên upload nhanh hơn hẳn).
    const prepared = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      const isImage = file.type && file.type.startsWith('image/');
      const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name || '');
      if (isImage && file.size > UPLOAD_IMG_TARGET) {
        setMsg(`Đang nén ảnh ${i + 1}/${files.length}...`, '');
        file = await compressImageFile(file, UPLOAD_IMG_TARGET);
      } else if (isPdf && file.size > UPLOAD_SAFE_BYTES) {
        setMsg(`Đang nén PDF ${i + 1}/${files.length} (có thể mất ít giây)...`, '');
        file = await compressPdfFile(file, Math.round(2.6 * 1024 * 1024));
      }
      if (file.size > UPLOAD_SAFE_BYTES) {
        throw new Error(`File "${file.name}" vẫn nặng hơn ~3MB sau khi nén. Vui lòng tách nhỏ, hoặc gửi file gốc qua Zalo 076 778 7879 để DCC nhận trực tiếp`);
      }
      prepared.push(file);
    }
    // Bước 1b: tải lên SONG SONG (tối đa 3 file cùng lúc) thay vì nối đuôi → nhanh hơn nhiều.
    const uploaded = new Array(prepared.length);
    let done = 0;
    const queue = prepared.map((file, idx) => ({ file, idx }));
    setMsg(`Đang tải hồ sơ lên... (0/${prepared.length} file)`, '');
    const worker = async () => {
      while (queue.length) {
        const { file, idx } = queue.shift();
        const fileData = await readFileAsBase64(file);
        const res = await post({ action: 'upload_file', file: fileData });
        uploaded[idx] = res.file;
        done += 1;
        setMsg(`Đang tải hồ sơ lên... (${done}/${prepared.length} file)`, '');
      }
    };
    await Promise.all(Array.from({ length: Math.min(3, prepared.length) }, worker));
    // Bước 2: tạo hồ sơ với toàn bộ thông tin + file đã tải.
    setMsg('Đang lưu hồ sơ...', '');
    const data = await post({ ...payload, uploaded });
    if (data.lookup_code) payload.lookup_code = data.lookup_code;
    form.reset();
    const block18 = $('[data-partner-18]', form); if (block18) block18.hidden = true;
    const fileMsg = data.files_uploaded ? ` Đã nhận ${data.files_uploaded} file hồ sơ.` : '';
    setMsg(`Cảm ơn bạn! DCC đã nhận hồ sơ và sẽ liên hệ lại sớm.${fileMsg} Mã hồ sơ: ${payload.lookup_code}`, 'success');
    if (window.dccTrack) dccTrack('Lead', { content_name: 'Đối tác gửi hồ sơ ứng viên' });
  } catch (error) {
    console.error(error);
    setMsg(`Chưa gửi được: ${error.message || 'lỗi không rõ'}. Vui lòng thử lại, hoặc liên hệ hotline/Zalo 076 778 7879.`, 'error');
  } finally {
    if (btn) btn.disabled = false;
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

function setMenuOpen(open) {
  const nav = $('.nav-links');
  if (!nav) return;
  nav.classList.toggle('open', open);
  document.body.classList.toggle('nav-open', open);
  $('.menu-toggle')?.setAttribute('aria-expanded', String(open));
  if (window.DCC_I18N) DCC_I18N.apply();
}

$('.menu-toggle')?.addEventListener('click', () => {
  setMenuOpen(!$('.nav-links')?.classList.contains('open'));
});

// Bấm chọn 1 mục trong menu (overlay) thì tự đóng lại.
$('.nav-links')?.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  if ($('.nav-links')?.classList.contains('open')) setMenuOpen(false);
});

// Đóng overlay bằng phím Esc.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && $('.nav-links')?.classList.contains('open')) setMenuOpen(false);
});

window.addEventListener('hashchange', renderPage);
renderPage();
