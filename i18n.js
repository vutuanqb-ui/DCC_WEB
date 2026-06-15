// DCC website i18n — dịch sau khi render, không phải viết lại render functions.
// Cơ chế: quét text node + placeholder của cả trang, tra theo CHUỖI TIẾNG VIỆT gốc trong từ điển.
// Tiếng Việt là mặc định (không cần dịch). Thiếu key nào thì giữ nguyên tiếng Việt (không vỡ trang).
// Mỗi dòng T = [chuỗi tiếng Việt, English, Deutsch]. Dùng backtick để an toàn dấu nháy.
(function () {
  const T = [
    // ===== Menu / điều hướng =====
    [`Trang chủ`, `Home`, `Startseite`],
    [`Chương trình`, `Programs`, `Programme`],
    [`Đơn hàng`, `Job offers`, `Stellenangebote`],
    [`Học tiếng Đức`, `Learn German`, `Deutsch lernen`],
    [`Chuyển việc, chuyển chủ tại Đức`, `Change job or employer in Germany`, `Job- oder Arbeitgeberwechsel in Deutschland`],
    [`Rủi ro cần biết`, `Risks to know`, `Wichtige Risiken`],
    [`Đăng ký tư vấn`, `Free consultation`, `Beratung anfragen`],
    [`Đối tác`, `Partners`, `Partner`],
    [`Tra cứu hồ sơ`, `Track application`, `Status prüfen`],
    [`Đăng nhập / Đăng ký`, `Log in / Sign up`, `Anmelden / Registrieren`],
    [`Đăng ký tư vấn miễn phí`, `Free consultation`, `Kostenlose Beratung`],

    // ===== Trang chủ (bản nhận diện thương hiệu) =====
    [`Deutsch Connect Center · Cầu nối Việt Nam – Đức`, `Deutsch Connect Center · Vietnam–Germany bridge`, `Deutsch Connect Center · Brücke Vietnam–Deutschland`],
    [`Không lời hứa hão. Chỉ một lộ trình rõ ràng, một hồ sơ minh bạch và một đội ngũ đồng hành đến khi bạn thật sự vững vàng trên đất Đức.`,
      `No empty promises. Just a clear roadmap, transparent paperwork and a team that stays with you until you truly stand firm in Germany.`,
      `Keine leeren Versprechen. Nur ein klarer Fahrplan, transparente Unterlagen und ein Team, das Sie begleitet, bis Sie in Deutschland wirklich Fuß gefasst haben.`],
    [`Bắt đầu hành trình`, `Start your journey`, `Reise beginnen`],
    [`Khám phá chương trình`, `Explore programs`, `Programme entdecken`],
    [`Du học nghề · 18B / 18A · Au-pair · Thời vụ 8 tháng · Học tiếng A1–B2`, `Vocational training · 18B / 18A · Au pair · 8-month seasonal · German A1–B2`, `Ausbildung · 18B / 18A · Au-pair · 8-Monate-Saison · Deutsch A1–B2`],
    [`Minh bạch`, `Transparency`, `Transparenz`],
    [`Đồng hành`, `By your side`, `An Ihrer Seite`],
    [`Đúng diện`, `Right path`, `Richtiger Weg`],
    [`Cuộn để khám phá`, `Scroll to explore`, `Zum Entdecken scrollen`],
    [`Kim chỉ nam`, `Our compass`, `Unser Kompass`],
    [`Tiêu chí hành động của DCC`, `DCC's guiding principles`, `DCCs Leitprinzipien`],
    [`Bốn nguyên tắc làm nên một thương hiệu uy tín — được giữ trọn trong từng hồ sơ, từng cuộc gọi, từng người Việt mà DCC đồng hành.`,
      `Four principles that build a trusted brand — upheld in every file, every call and every person DCC walks beside.`,
      `Vier Prinzipien, die eine vertrauenswürdige Marke ausmachen — gewahrt in jeder Akte, jedem Anruf und bei jedem Menschen, den DCC begleitet.`],
    [`Minh bạch tuyệt đối`, `Absolute transparency`, `Absolute Transparenz`],
    [`Chi phí, rủi ro và tiến độ hồ sơ đều rõ ràng từ đầu. Bạn luôn biết mình đang ở đâu trên lộ trình.`,
      `Costs, risks and application progress are clear from the start. You always know where you are on the journey.`,
      `Kosten, Risiken und der Bearbeitungsstand sind von Anfang an klar. Sie wissen jederzeit, wo Sie auf dem Weg stehen.`],
    [`Trách nhiệm đến cùng`, `Responsibility to the end`, `Verantwortung bis zum Schluss`],
    [`Đồng hành từ buổi tư vấn đầu tiên cho tới khi bạn ổn định cuộc sống và công việc trên đất Đức.`,
      `We stay with you from the first consultation until you have settled into life and work in Germany.`,
      `Wir begleiten Sie vom ersten Beratungsgespräch, bis Sie Leben und Arbeit in Deutschland gefunden haben.`],
    [`Đúng diện, đúng người`, `The right path for you`, `Der richtige Weg für Sie`],
    [`Tư vấn theo đúng năng lực thật — không vẽ kỳ vọng sai, không ép chọn sai diện để chốt hồ sơ.`,
      `Advice based on your real ability — no false hopes, no pushing you onto the wrong path just to close a case.`,
      `Beratung auf Basis Ihrer echten Fähigkeiten — keine falschen Versprechen, kein Drängen auf den falschen Weg.`],
    [`Tận tâm như người nhà`, `Caring like family`, `Fürsorge wie in der Familie`],
    [`Mỗi học viên là một câu chuyện riêng. DCC lắng nghe và lo từng bước cùng bạn, không bỏ sót ai.`,
      `Every student is a unique story. DCC listens and handles every step with you, leaving no one behind.`,
      `Jeder Lernende ist eine eigene Geschichte. DCC hört zu und kümmert sich um jeden Schritt — niemand wird vergessen.`],
    [`Cầu nối Việt Nam – Đức`, `Vietnam–Germany bridge`, `Brücke Vietnam–Deutschland`],
    [`Việt Nam`, `Vietnam`, `Vietnam`],
    [`Đức`, `Germany`, `Deutschland`],
    [`chương trình sang Đức`, `programs to Germany`, `Programme nach Deutschland`],
    [`lộ trình học tiếng`, `German learning path`, `Deutsch-Lernweg`],
    [`hồ sơ minh bạch`, `transparent paperwork`, `transparente Unterlagen`],
    [`tra cứu tiến độ mọi lúc`, `track progress anytime`, `Status jederzeit prüfen`],
    [`Sẵn sàng?`, `Ready?`, `Bereit?`],
    [`Để lại thông tin, DCC sẽ tư vấn miễn phí và đúng diện cho bạn — minh bạch ngay từ cuộc gọi đầu tiên.`,
      `Leave your details and DCC will advise you for free and on the right path — transparent from the very first call.`,
      `Hinterlassen Sie Ihre Daten — DCC berät Sie kostenlos und auf dem richtigen Weg, transparent ab dem ersten Anruf.`],
    [`Tra cứu tiến độ hồ sơ`, `Track your application`, `Bewerbung verfolgen`],

    // ===== Footer =====
    [`Đồng hành cùng người Việt trên hành trình học tiếng, làm hồ sơ và xây dựng sự nghiệp tại Đức — minh bạch trong từng bước, trách nhiệm đến khi bạn ổn định.`,
      `Supporting Vietnamese people through learning German, preparing documents and building a career in Germany — transparent at every step, responsible until you settle in.`,
      `Wir begleiten Vietnamesinnen und Vietnamesen beim Deutschlernen, bei den Unterlagen und beim Aufbau einer Karriere in Deutschland — transparent in jedem Schritt, verantwortungsvoll bis Sie angekommen sind.`],
    [`Du học nghề Đức`, `Vocational training in Germany`, `Ausbildung in Deutschland`],
    [`Au-pair Đức`, `Au pair in Germany`, `Au-pair in Deutschland`],
    [`Thời vụ 8 tháng`, `8-month seasonal work`, `8-Monate-Saisonarbeit`],
    [`Cổng thông tin`, `Information portal`, `Info-Portal`],
    [`Đăng ký tài khoản`, `Create an account`, `Konto erstellen`],
    [`Đăng nhập học viên`, `Student login`, `Login für Lernende`],
    [`Cổng đối tác`, `Partner portal`, `Partner-Portal`],
    [`App nội bộ`, `Internal app`, `Interne App`],
    [`Kết nối với DCC`, `Connect with DCC`, `Mit DCC verbinden`],
    [`Gọi hotline`, `Call hotline`, `Hotline anrufen`],
    [`Nhắn tin Zalo`, `Message on Zalo`, `Nachricht über Zalo`],
    [`DCC không cam kết “bao đậu visa”. Mỗi hồ sơ được đánh giá trung thực theo điều kiện thực tế của từng người.`,
      `DCC does not promise “guaranteed visa approval”. Every application is assessed honestly based on the real circumstances of each person.`,
      `DCC verspricht keine „garantierte Visumzusage“. Jeder Antrag wird ehrlich anhand der tatsächlichen Situation jeder Person geprüft.`],

    // ===== Nút nổi =====
    [`Gọi ngay`, `Call now`, `Jetzt anrufen`],
    [`Chat Zalo`, `Chat on Zalo`, `Zalo-Chat`],

    // ===== Trang chủ — Hero =====
    [`Cầu nối Việt Nam – Đức`, `The bridge between Vietnam and Germany`, `Die Brücke zwischen Vietnam und Deutschland`],
    [`Deutsch Connect Center đồng hành cùng bạn trọn hành trình: học tiếng Đức, du học nghề, chuyển đổi văn bằng 18B/18A, Au-pair, thời vụ, hồ sơ visa và kết nối việc làm tại Đức.`,
      `Deutsch Connect Center supports you through the whole journey: learning German, vocational training (Ausbildung), 18B/18A qualification recognition, au pair, seasonal work, visa applications and job placement in Germany.`,
      `Deutsch Connect Center begleitet Sie auf dem gesamten Weg: Deutsch lernen, Ausbildung, Anerkennung von Abschlüssen (18B/18A), Au-pair, Saisonarbeit, Visumanträge und Jobvermittlung in Deutschland.`],
    [`Đăng ký tư vấn ngay`, `Get a consultation now`, `Jetzt Beratung anfragen`],
    [`Tra cứu tiến độ hồ sơ`, `Track your application`, `Antragsstatus prüfen`],
    [`Du học nghề`, `Vocational training`, `Ausbildung`],
    [`Hồ sơ của bạn`, `Your application`, `Ihr Antrag`],
    [`Đang xử lý visa`, `Visa in progress`, `Visum in Bearbeitung`],
    [`3 giấy tờ cần bổ sung trong tuần`, `3 documents to add this week`, `3 Dokumente diese Woche nachzureichen`],
    [`chương trình: du học nghề, 18B/18A, Au-pair, thời vụ, học tiếng`, `programs: vocational training, 18B/18A, au pair, seasonal work, German courses`, `Programme: Ausbildung, 18B/18A, Au-pair, Saisonarbeit, Deutschkurse`],
    [`Theo dõi tiến độ online`, `Track progress online`, `Fortschritt online verfolgen`],

    // ===== Trang chủ — Chương trình =====
    [`Chọn đúng lộ trình sang Đức cho riêng bạn`, `Choose the right path to Germany for you`, `Wählen Sie Ihren passenden Weg nach Deutschland`],
    [`Mỗi diện có điều kiện và đối tượng khác nhau. DCC tư vấn theo đúng năng lực thực tế của bạn — không khuyên chọn sai diện.`,
      `Each route has different requirements and target groups. DCC advises you based on your real abilities — we never push you toward the wrong route.`,
      `Jeder Weg hat andere Voraussetzungen und Zielgruppen. DCC berät Sie anhand Ihrer tatsächlichen Fähigkeiten — wir raten nie zum falschen Weg.`],
    [`Chuyển đổi văn bằng 18B / 18A`, `18B / 18A qualification recognition`, `Anerkennung von Abschlüssen 18B / 18A`],
    [`Chương trình thời vụ 8 tháng`, `8-month seasonal work programme`, `8-Monats-Saisonprogramm`],
    [`Đăng ký học tiếng Đức`, `Sign up for German courses`, `Für Deutschkurse anmelden`],
    [`Đào tạo nghề kép (Ausbildung): vừa học tại trường nghề vừa thực hành có lương tại doanh nghiệp Đức. Miễn học phí trường công, mở đường làm việc và định cư lâu dài.`,
      `Dual vocational training (Ausbildung): study at a vocational school while doing paid practical work at a German company. No tuition at public schools, opening the door to long-term work and residence.`,
      `Duale Ausbildung: Berufsschule und bezahlte Praxis in einem deutschen Betrieb zugleich. An staatlichen Schulen kostenfrei — der Weg zu langfristiger Arbeit und Aufenthalt.`],
    [`Diện lao động tay nghề theo Luật Nhập cư Đức: §18a cho người có bằng nghề, §18b cho người có bằng đại học. DCC kiểm tra điều kiện công nhận văn bằng và hỗ trợ tìm hợp đồng việc làm.`,
      `Skilled-worker routes under German immigration law: §18a for holders of a vocational qualification, §18b for university graduates. DCC checks recognition eligibility and helps you find an employment contract.`,
      `Fachkräfte-Wege nach dem deutschen Zuwanderungsrecht: §18a für Personen mit Berufsabschluss, §18b für Hochschulabsolventen. DCC prüft die Anerkennung und hilft bei der Suche nach einem Arbeitsvertrag.`],
    [`Sống cùng một gia đình Đức tới 12 tháng, phụ giúp chăm sóc trẻ và nhận tiền tiêu vặt hằng tháng. Cách nhẹ nhàng để học tiếng và trải nghiệm đời sống Đức trước khi đi xa hơn.`,
      `Live with a German host family for up to 12 months, help look after the children and receive monthly pocket money. A gentle way to learn the language and experience life in Germany before going further.`,
      `Bis zu 12 Monate bei einer deutschen Gastfamilie leben, bei der Kinderbetreuung helfen und monatliches Taschengeld erhalten. Ein sanfter Einstieg, um die Sprache zu lernen und das Leben in Deutschland kennenzulernen.`],
    [`Hợp đồng lao động thời vụ theo mùa tại Đức (nông nghiệp, dịch vụ…). Thời gian ngắn, thu nhập rõ ràng — phù hợp người muốn đi nhanh và cần chuẩn bị đúng kế hoạch tài chính.`,
      `Seasonal employment contracts in Germany (agriculture, services, etc.). Short-term with clear income — suited to people who want to go quickly and need a solid financial plan.`,
      `Saisonale Arbeitsverträge in Deutschland (Landwirtschaft, Dienstleistung usw.). Kurzfristig mit klarem Einkommen — passend für alle, die schnell starten und solide finanziell planen möchten.`],
    [`Lớp A1–B2 theo khung tham chiếu châu Âu (CEFR): kiểm tra đầu vào, lộ trình cá nhân hóa và theo sát tiến độ đến ngày thi chứng chỉ.`,
      `A1–B2 classes following the European framework (CEFR): placement test, a personalised path and close progress tracking up to your certificate exam.`,
      `A1–B2-Kurse nach dem Europäischen Referenzrahmen (GER): Einstufungstest, individueller Lernweg und enge Fortschrittskontrolle bis zur Zertifikatsprüfung.`],
    // CTA thẻ chương trình (có mũi tên)
    [`Xem đơn du học nghề →`, `See vocational job offers →`, `Ausbildungsangebote ansehen →`],
    [`Kiểm tra điều kiện 18B/18A →`, `Check 18B/18A eligibility →`, `18B/18A-Voraussetzungen prüfen →`],
    [`Đăng ký tư vấn Au-pair →`, `Request au pair advice →`, `Au-pair-Beratung anfragen →`],
    [`Xem chương trình 8 tháng →`, `See the 8-month programme →`, `8-Monats-Programm ansehen →`],
    [`Đăng ký học tiếng →`, `Sign up for German →`, `Für Deutschkurs anmelden →`],
    // Tag chương trình
    [`Nhà hàng khách sạn`, `Hospitality`, `Hotel & Gastronomie`],
    [`Điều dưỡng`, `Nursing`, `Pflege`],
    [`Bếp`, `Kitchen`, `Küche`],
    [`Bán hàng`, `Sales`, `Verkauf`],
    [`Kỹ thuật`, `Engineering`, `Technik`],
    [`Bánh`, `Baking`, `Bäckerei`],
    [`Thịt`, `Meat processing`, `Fleischerei`],
    [`Công nhận văn bằng`, `Qualification recognition`, `Anerkennung von Abschlüssen`],
    [`Hồ sơ nghề`, `Vocational dossier`, `Berufsunterlagen`],
    [`Hợp đồng lao động`, `Employment contract`, `Arbeitsvertrag`],
    [`Visa việc làm`, `Work visa`, `Arbeitsvisum`],
    [`Gia đình bản xứ`, `Host family`, `Gastfamilie`],
    [`Thư động lực`, `Motivation letter`, `Motivationsschreiben`],
    [`Lộ trình sau Au-pair`, `Path after au pair`, `Weg nach dem Au-pair`],
    [`8 tháng`, `8 months`, `8 Monate`],
    [`Lao động mùa vụ`, `Seasonal work`, `Saisonarbeit`],
    [`Lịch nhập cảnh`, `Entry schedule`, `Einreisetermin`],
    [`Hồ sơ rõ ràng`, `Clear paperwork`, `Klare Unterlagen`],
    [`Kiểm tra đầu vào`, `Placement test`, `Einstufungstest`],

    // ===== Form Đăng ký nguyện vọng =====
    [`Đăng ký nguyện vọng`, `Register your preferences`, `Wünsche angeben`],
    [`Đăng ký chương trình & công việc bạn mong muốn`, `Register the programme & job you want`, `Programm & Wunschjob angeben`],
    [`Chọn chương trình, ngành nghề và nơi bạn muốn đến tại Đức. DCC sẽ tìm hợp đồng phù hợp và liên hệ tư vấn miễn phí.`,
      `Choose the programme, occupation and where in Germany you want to go. DCC will find a suitable contract and contact you for a free consultation.`,
      `Wählen Sie Programm, Beruf und Ihren Wunschort in Deutschland. DCC findet einen passenden Vertrag und meldet sich für eine kostenlose Beratung.`],
    [`Chương trình mong muốn`, `Desired programme`, `Wunschprogramm`],
    [`Ngành nghề mong muốn`, `Desired occupation`, `Wunschberuf`],
    [`Bang / thành phố mong muốn`, `Desired state / city`, `Bundesland / Stadt (Wunsch)`],
    [`Trình độ tiếng Đức hiện tại`, `Current German level`, `Aktuelles Deutschniveau`],
    [`Thời gian mong muốn đi`, `Preferred departure time`, `Gewünschter Zeitpunkt`],
    [`Họ và tên`, `Full name`, `Vollständiger Name`],
    [`Số điện thoại / Zalo`, `Phone / Zalo number`, `Telefon / Zalo`],
    [`Email`, `Email`, `E-Mail`],
    [`Tỉnh/thành (tại Việt Nam)`, `Province/city (in Vietnam)`, `Provinz/Stadt (in Vietnam)`],
    [`Ghi chú thêm`, `Additional notes`, `Weitere Anmerkungen`],
    [`— Chọn chương trình —`, `— Choose a programme —`, `— Programm wählen —`],
    [`Du học nghề Đức (Ausbildung)`, `Vocational training (Ausbildung)`, `Ausbildung in Deutschland`],
    [`Chuyển đổi văn bằng 18B/18A`, `18B/18A qualification recognition`, `Anerkennung 18B/18A`],
    [`Thời vụ 8 tháng`, `8-month seasonal work`, `8-Monate-Saisonarbeit`],
    [`— Chọn ngành nghề —`, `— Choose an occupation —`, `— Beruf wählen —`],
    [`Chưa rõ / linh hoạt`, `Not sure / flexible`, `Unklar / flexibel`],
    [`Chưa học`, `None yet`, `Noch keins`],
    [`Thông tin công nhận văn bằng (18A / 18B)`, `Qualification recognition details (18A / 18B)`, `Angaben zur Anerkennung (18A / 18B)`],
    [`Đã làm KMK / ZAB chưa?`, `Have you done KMK / ZAB?`, `KMK / ZAB bereits gemacht?`],
    [`— Chọn —`, `— Select —`, `— Auswählen —`],
    [`Chưa làm`, `Not yet`, `Noch nicht`],
    [`Đang làm`, `In progress`, `In Bearbeitung`],
    [`Đã có kết quả`, `Result received`, `Ergebnis liegt vor`],
    [`KMK / ZAB — đã làm bao lâu rồi?`, `KMK / ZAB — how long ago?`, `KMK / ZAB — seit wann?`],
    [`Đã làm NARIC chưa?`, `Have you done NARIC?`, `NARIC bereits gemacht?`],
    [`NARIC — đã làm bao lâu rồi?`, `NARIC — how long ago?`, `NARIC — seit wann?`],
    [`Gửi đăng ký nguyện vọng`, `Submit your preferences`, `Wünsche absenden`],
    [`🔒 Thông tin được bảo mật, chỉ dùng để tư vấn lộ trình phù hợp.`, `🔒 Your information is kept private and used only to advise the right path for you.`, `🔒 Ihre Daten bleiben vertraulich und dienen nur der passenden Beratung.`],
    [`Nguyễn Văn A`, `e.g. John Smith`, `z. B. Max Mustermann`],
    [`Ví dụ: Quảng Trị`, `e.g. Quang Tri`, `z. B. Quang Tri`],
    [`Ví dụ: cuối 2026, sau khi đạt B1…`, `e.g. end of 2026, after reaching B1…`, `z. B. Ende 2026, nach Erreichen von B1…`],
    [`Ví dụ: 3 tháng`, `e.g. 3 months`, `z. B. 3 Monate`],
    [`Ví dụ: 2 tháng`, `e.g. 2 months`, `z. B. 2 Monate`],
    [`Mong muốn cụ thể về hợp đồng, ngành nghề, mức lương…`, `Specific wishes about contract, occupation, salary…`, `Konkrete Wünsche zu Vertrag, Beruf, Gehalt…`],

    // ===== Trang chủ — Quy trình =====
    [`Quy trình`, `Process`, `Ablauf`],
    [`Sáu bước, từ đăng ký đến khi ổn định tại Đức`, `Six steps, from sign-up to settling in Germany`, `Sechs Schritte — von der Anmeldung bis zum Ankommen in Deutschland`],
    [`Một lộ trình thống nhất để bạn luôn biết hồ sơ đang ở đâu và bước tiếp theo cần làm gì.`, `One clear path so you always know where your application stands and what to do next.`, `Ein klarer Ablauf, damit Sie immer wissen, wo Ihr Antrag steht und was als Nächstes kommt.`],
    [`Đăng ký thông tin`, `Register your details`, `Daten angeben`],
    [`Tư vấn & kiểm tra điều kiện`, `Consultation & eligibility check`, `Beratung & Eignungsprüfung`],
    [`Học tiếng & hoàn thiện hồ sơ`, `Learn German & complete documents`, `Deutsch lernen & Unterlagen vervollständigen`],
    [`Phỏng vấn & nhận hợp đồng`, `Interview & sign contract`, `Vorstellungsgespräch & Vertrag`],
    [`Xin visa & theo dõi tiến độ`, `Apply for visa & track progress`, `Visum beantragen & Fortschritt verfolgen`],
    [`Sang Đức & hỗ trợ sau bay`, `Arrive in Germany & post-arrival support`, `Ankunft in Deutschland & Unterstützung danach`],
    [`Bạn để lại thông tin và chương trình đang quan tâm.`, `You leave your details and the programme you are interested in.`, `Sie hinterlassen Ihre Daten und das gewünschte Programm.`],
    [`Đánh giá tiếng Đức, bằng cấp, tài chính và thời gian để chọn đúng diện.`, `We assess your German, qualifications, finances and timing to choose the right route.`, `Wir prüfen Deutschkenntnisse, Abschlüsse, Finanzen und Zeitplan, um den richtigen Weg zu wählen.`],
    [`Học theo lộ trình, chuẩn bị giấy tờ theo checklist rõ ràng.`, `Study along your path and prepare documents using a clear checklist.`, `Lernen nach Plan und Unterlagen anhand einer klaren Checkliste vorbereiten.`],
    [`Chuẩn bị phỏng vấn với đối tác và ký hợp đồng khi đạt.`, `Prepare for the interview with the partner and sign the contract once accepted.`, `Vorbereitung auf das Gespräch mit dem Partner und Vertragsunterzeichnung bei Zusage.`],
    [`Hoàn thiện hồ sơ visa, theo dõi lịch hẹn và trạng thái xử lý.`, `Complete the visa file and track appointments and processing status.`, `Visumunterlagen vervollständigen, Termine und Bearbeitungsstand verfolgen.`],
    [`Đồng hành sau khi nhập cảnh, ổn định những ngày đầu tại Đức.`, `Support after arrival to help you settle in during the first days in Germany.`, `Unterstützung nach der Einreise für einen guten Start in den ersten Tagen in Deutschland.`],

    // ===== Trang chủ — Rủi ro =====
    [`Minh bạch`, `Transparency`, `Transparenz`],
    [`Những rủi ro nên biết trước khi bắt đầu`, `Risks worth knowing before you start`, `Risiken, die Sie vorab kennen sollten`],
    [`Chúng tôi nói thẳng về rủi ro để bạn chuẩn bị chủ động — và cho biết DCC giúp bạn giảm thiểu từng điều ra sao.`, `We are upfront about the risks so you can prepare — and we show how DCC helps reduce each one.`, `Wir sprechen Risiken offen an, damit Sie sich vorbereiten können — und zeigen, wie DCC jedes davon verringert.`],
    [`Không đạt trình độ tiếng Đức đúng hạn`, `Not reaching the required German level on time`, `Das Deutschniveau nicht rechtzeitig erreichen`],
    [`DCC kiểm tra đầu vào, chia mục tiêu học theo mốc, cập nhật tiến độ lớp và nhắc lịch thi/chứng chỉ.`, `DCC runs a placement test, sets milestone goals, updates class progress and reminds you of exam/certificate dates.`, `DCC führt einen Einstufungstest durch, setzt Etappenziele, aktualisiert den Lernfortschritt und erinnert an Prüfungs-/Zertifikatstermine.`],
    [`Hồ sơ cá nhân thiếu hoặc sai thông tin`, `Missing or incorrect details in your application`, `Fehlende oder falsche Angaben im Antrag`],
    [`DCC dùng checklist giấy tờ, nhật ký xử lý và bước rà soát trước khi gửi đối tác hoặc cơ quan liên quan.`, `DCC uses a document checklist, a processing log and a review step before sending to partners or authorities.`, `DCC nutzt eine Dokumenten-Checkliste, ein Bearbeitungsprotokoll und eine Prüfung vor dem Versand an Partner oder Behörden.`],
    [`Bị yêu cầu bổ sung giấy tờ từ phía Đức`, `Being asked for extra documents from Germany`, `Nachforderung von Unterlagen aus Deutschland`],
    [`DCC ghi nhận yêu cầu bổ sung, phân công người phụ trách và nhắc deadline để hạn chế bỏ sót.`, `DCC records each request, assigns an owner and tracks deadlines to avoid anything slipping.`, `DCC erfasst jede Nachforderung, weist eine zuständige Person zu und überwacht Fristen, damit nichts übersehen wird.`],
    [`Lịch visa thay đổi hoặc thời gian xử lý kéo dài`, `Visa appointments changing or processing taking longer`, `Visumtermine ändern sich oder die Bearbeitung dauert länger`],
    [`DCC minh bạch trạng thái, cập nhật lịch hẹn và không hứa hẹn thời gian ngoài khả năng kiểm soát.`, `DCC keeps the status transparent, updates appointments and never promises timelines beyond its control.`, `DCC hält den Status transparent, aktualisiert Termine und verspricht keine Zeiten außerhalb seiner Kontrolle.`],
    [`Xem đầy đủ các rủi ro`, `See all the risks`, `Alle Risiken ansehen`],

    // ===== Trang chủ — Vì sao chọn DCC =====
    [`Vì sao chọn DCC`, `Why choose DCC`, `Warum DCC`],
    [`Uy tín đến từ hệ thống và sự minh bạch`, `Trust built on systems and transparency`, `Vertrauen durch System und Transparenz`],
    [`Không lời hứa hão — chỉ có quy trình rõ ràng, trách nhiệm cụ thể và tiến độ bạn theo dõi được mọi lúc.`, `No empty promises — just a clear process, concrete responsibility and progress you can track at any time.`, `Keine leeren Versprechen — nur ein klarer Ablauf, konkrete Verantwortung und jederzeit nachvollziehbarer Fortschritt.`],
    [`Lộ trình rõ ràng`, `Clear roadmap`, `Klarer Fahrplan`],
    [`Mỗi học viên có lộ trình riêng theo điều kiện thực tế: học tiếng, hồ sơ, phỏng vấn, visa và thời gian dự kiến.`, `Each student gets a personal roadmap based on their real situation: language, documents, interview, visa and expected timing.`, `Jede/r Lernende erhält einen persönlichen Fahrplan nach der realen Situation: Sprache, Unterlagen, Gespräch, Visum und Zeitplan.`],
    [`Hồ sơ minh bạch`, `Transparent application`, `Transparenter Antrag`],
    [`Bạn luôn biết hồ sơ đang ở bước nào, còn thiếu giấy tờ gì và ai đang phụ trách.`, `You always know which step your application is at, what documents are missing and who is in charge.`, `Sie wissen immer, in welchem Schritt Ihr Antrag ist, welche Unterlagen fehlen und wer zuständig ist.`],
    [`Tra cứu trạng thái hồ sơ, deadline và lịch hẹn mọi lúc, không phải hỏi đi hỏi lại.`, `Check your application status, deadlines and appointments any time, without asking again and again.`, `Status, Fristen und Termine jederzeit einsehen — ohne ständiges Nachfragen.`],
    [`Tư vấn đúng diện`, `Advice on the right route`, `Beratung zum richtigen Weg`],
    [`DCC đánh giá năng lực, bằng cấp và mục tiêu để tư vấn đúng chương trình, không ép chọn sai diện.`, `DCC assesses your ability, qualifications and goals to advise the right programme, never pushing the wrong route.`, `DCC bewertet Fähigkeiten, Abschlüsse und Ziele, um das richtige Programm zu empfehlen — ohne zum falschen Weg zu drängen.`],
    [`Đồng hành học tiếng`, `Language learning support`, `Begleitung beim Deutschlernen`],
    [`Lớp A1–B2 có kiểm tra đầu vào, lộ trình rõ ràng và nhắc lịch thi chứng chỉ đúng hạn.`, `A1–B2 classes with a placement test, a clear path and timely certificate-exam reminders.`, `A1–B2-Kurse mit Einstufungstest, klarem Lernweg und rechtzeitigen Erinnerungen an Zertifikatsprüfungen.`],
    [`Không bỏ sót khách hàng`, `No one falls through the cracks`, `Niemand geht verloren`],
    [`Hệ thống nhắc việc và phân công giúp không bỏ quên bất kỳ học viên hay deadline nào.`, `A reminder and assignment system ensures no student or deadline is ever forgotten.`, `Ein Erinnerungs- und Zuweisungssystem sorgt dafür, dass keine Person und keine Frist vergessen wird.`],
    [`Có hệ thống quản lý nội bộ`, `An internal management system`, `Internes Verwaltungssystem`],
    [`Toàn bộ hồ sơ, lịch hẹn và công việc được quản lý tập trung, hạn chế sai sót thủ công.`, `All applications, appointments and tasks are managed centrally, reducing manual errors.`, `Alle Anträge, Termine und Aufgaben werden zentral verwaltet — weniger manuelle Fehler.`],
    [`Cảnh báo rủi ro từ đầu`, `Risk warnings from the start`, `Risikohinweise von Anfang an`],
    [`DCC nói rõ rủi ro và chi phí ngay từ đầu để bạn chuẩn bị đúng, không vỡ kế hoạch.`, `DCC states the risks and costs clearly from the start so you can prepare properly and avoid surprises.`, `DCC nennt Risiken und Kosten von Anfang an klar, damit Sie richtig planen und es keine Überraschungen gibt.`],
    [`Kết nối đối tác Đức`, `Connected with German partners`, `Vernetzt mit deutschen Partnern`],
    [`DCC làm việc trực tiếp với đối tác tại Đức để cập nhật đơn hàng và cơ hội thực tế.`, `DCC works directly with partners in Germany to update real job offers and opportunities.`, `DCC arbeitet direkt mit Partnern in Deutschland zusammen, um reale Stellen und Chancen aktuell zu halten.`],

    // ===== Trang chủ — Khối đăng ký tư vấn + form nhiều bước =====
    [`Để lại thông tin, DCC gọi lại cho bạn.`, `Leave your details and DCC will call you back.`, `Daten hinterlassen — DCC ruft Sie zurück.`],
    [`Chỉ vài thông tin cơ bản, điền gọn ngay trên điện thoại. DCC sẽ liên hệ tư vấn miễn phí và đúng diện cho bạn.`, `Just a few basic details, quick to fill in on your phone. DCC will contact you for a free, route-specific consultation.`, `Nur ein paar Basisangaben, schnell am Handy ausgefüllt. DCC meldet sich für eine kostenlose, passende Beratung.`],
    [`🔒 Thông tin của bạn được bảo mật, chỉ dùng để tư vấn lộ trình phù hợp.`, `🔒 Your information is kept private and used only to advise the right path for you.`, `🔒 Ihre Daten bleiben vertraulich und dienen nur der passenden Beratung.`],
    [`Bước 1: Thông tin cá nhân`, `Step 1: Personal details`, `Schritt 1: Persönliche Angaben`],
    [`Bước 2: Chọn chương trình quan tâm`, `Step 2: Choose the programme you want`, `Schritt 2: Wunschprogramm wählen`],
    [`Bước 3: Trình độ hiện tại`, `Step 3: Your current level`, `Schritt 3: Aktueller Stand`],
    [`Bước 4: Mục tiêu và thời gian mong muốn`, `Step 4: Goals and preferred timing`, `Schritt 4: Ziele und Wunschzeitpunkt`],
    [`Họ tên`, `Full name`, `Vollständiger Name`],
    [`Ngày sinh`, `Date of birth`, `Geburtsdatum`],
    [`Số điện thoại`, `Phone number`, `Telefonnummer`],
    [`Tỉnh/thành phố`, `Province/city`, `Provinz/Stadt`],
    [`Trình độ tiếng Đức`, `German level`, `Deutschniveau`],
    [`Bằng cấp cao nhất`, `Highest qualification`, `Höchster Abschluss`],
    [`Ngành học/nghề hiện tại`, `Current field of study/occupation`, `Aktuelles Studien-/Berufsfeld`],
    [`Kinh nghiệm làm việc`, `Work experience`, `Berufserfahrung`],
    [`Tình trạng hộ chiếu`, `Passport status`, `Reisepass-Status`],
    [`Tình trạng hồ sơ`, `Application status`, `Unterlagen-Status`],
    [`Muốn đi Đức khi nào`, `When you want to go to Germany`, `Wann möchten Sie nach Deutschland`],
    [`Ngành mong muốn`, `Desired field`, `Wunschbereich`],
    [`Thành phố/bang mong muốn`, `Desired city/state`, `Wunschstadt/-bundesland`],
    [`Chọn chương trình`, `Choose a programme`, `Programm wählen`],
    [`Chuyển đổi văn bằng 18B`, `18B qualification recognition`, `Anerkennung 18B`],
    [`Chưa biết – cần tư vấn`, `Not sure – need advice`, `Noch unklar – Beratung nötig`],
    [`Chưa có`, `None yet`, `Noch keiner`],
    [`Đã có`, `Have one`, `Vorhanden`],
    [`Quay lại`, `Back`, `Zurück`],
    [`Tiếp tục`, `Continue`, `Weiter`],
    [`Gửi thông tin`, `Submit`, `Absenden`],
    [`Link hoặc số Zalo`, `Zalo link or number`, `Zalo-Link oder -Nummer`],
    [`THPT / Trung cấp / Cao đẳng / Đại học`, `High school / vocational / college / university`, `Abitur / Berufsausbildung / Hochschule / Universität`],
    [`Đã có bằng, thiếu hộ chiếu...`, `Have the diploma, missing passport...`, `Abschluss vorhanden, Reisepass fehlt...`],
    [`Ví dụ: 2026 hoặc sau khi có B1`, `e.g. 2026 or after reaching B1`, `z. B. 2026 oder nach B1`],
    [`Điều anh/chị muốn DCC tư vấn kỹ hơn`, `What you would like DCC to advise on in more detail`, `Wozu Sie von DCC ausführlicher beraten werden möchten`],
    [`Ví dụ: Hà Nội`, `e.g. Hanoi`, `z. B. Hanoi`],

    // ===== Trang Đơn hàng / Chương trình (hero) =====
    [`Đăng ký chương trình & công việc mong muốn`, `Register your desired programme & job`, `Wunschprogramm & -job angeben`],
    [`Cho DCC biết bạn muốn theo chương trình nào, làm ngành nghề gì và ở đâu trên nước Đức — chúng tôi sẽ tìm hợp đồng phù hợp và liên hệ tư vấn miễn phí.`, `Tell DCC which programme you want, what occupation and where in Germany — we will find a suitable contract and contact you for a free consultation.`, `Sagen Sie DCC, welches Programm, welcher Beruf und welcher Ort in Deutschland — wir finden einen passenden Vertrag und beraten Sie kostenlos.`],
    [`Chọn đúng diện trước khi chuẩn bị hồ sơ`, `Choose the right route before preparing documents`, `Den richtigen Weg wählen, bevor Sie Unterlagen vorbereiten`],
    [`DCC đánh giá điều kiện thực tế của bạn để tư vấn đúng diện — không hứa hẹn quá đà, không vẽ kỳ vọng sai.`, `DCC assesses your real situation to advise the right route — no overpromising, no false expectations.`, `DCC bewertet Ihre reale Situation, um den richtigen Weg zu empfehlen — ohne Übertreibung und falsche Erwartungen.`],

    // ===== Trang Chuyển việc / chuyển chủ =====
    [`Đang sống & làm việc tại Đức?`, `Living & working in Germany?`, `Leben & arbeiten Sie in Deutschland?`],
    [`Chuyển việc, chuyển chủ & đổi nghề tại Đức`, `Change job, employer & occupation in Germany`, `Job, Arbeitgeber & Beruf in Deutschland wechseln`],
    [`DCC đồng hành cùng các bạn đang ở Đức tìm một công việc mới, một nghề học mới hoặc một người chủ phù hợp hơn — đúng ngành, đúng thành phố và tiểu bang bạn mong muốn.`, `DCC supports those already in Germany to find a new job, a new apprenticeship or a better employer — in the right field, city and federal state you want.`, `DCC begleitet alle, die bereits in Deutschland sind, bei der Suche nach einem neuen Job, einer neuen Ausbildung oder einem besseren Arbeitgeber — im richtigen Bereich, in der gewünschten Stadt und im gewünschten Bundesland.`],
    [`Đăng ký chuyển việc`, `Register a job change`, `Jobwechsel anmelden`],
    [`Xem cho Azubi & 18A/18B`, `See for Azubi & 18A/18B`, `Für Azubi & 18A/18B ansehen`],
    [`Hai nhóm hỗ trợ`, `Two support groups`, `Zwei Unterstützungsgruppen`],
    [`Bạn thuộc nhóm nào?`, `Which group are you in?`, `Zu welcher Gruppe gehören Sie?`],
    [`DCC chia rõ hai lộ trình để hỗ trợ đúng tình huống pháp lý và đúng nhu cầu của bạn.`, `DCC clearly separates two paths to support your exact legal situation and needs.`, `DCC trennt klar zwei Wege, um Ihre rechtliche Situation und Ihre Bedürfnisse genau zu unterstützen.`],
    [`Dành cho bạn đang là Azubi`, `For you as an Azubi (apprentice)`, `Für Sie als Azubi (Auszubildende/r)`],
    [`Đang học nghề (Ausbildung) muốn ĐỔI CHỦ (Betrieb), đổi nghề học mới hoặc chuyển sang thành phố/bang khác.`, `Doing an apprenticeship (Ausbildung) and want to CHANGE EMPLOYER (Betrieb), switch to a new occupation or move to another city/state.`, `In der Ausbildung und möchten den BETRIEB WECHSELN, einen neuen Beruf lernen oder in eine andere Stadt/ein anderes Bundesland ziehen.`],
    [`Môi trường học nghề hiện tại không phù hợp, bị chèn ép hoặc ít được dạy nghề thật.`, `The current training environment is a poor fit, unfair or teaches little real skill.`, `Das aktuelle Ausbildungsumfeld passt nicht, ist unfair oder vermittelt wenig echtes Handwerk.`],
    [`Muốn đổi sang nghề học khác đúng sở thích, đúng năng lực hơn.`, `You want to switch to another apprenticeship that better fits your interests and abilities.`, `Sie möchten in eine andere Ausbildung wechseln, die besser zu Interessen und Fähigkeiten passt.`],
    [`Muốn chuyển tới thành phố/bang có thu nhập, cộng đồng hoặc cơ hội tốt hơn.`, `You want to move to a city/state with better pay, community or opportunities.`, `Sie möchten in eine Stadt/ein Bundesland mit besserem Verdienst, Gemeinschaft oder Chancen ziehen.`],
    [`Rà soát hợp đồng đào tạo & thời điểm được phép chuyển (Probezeit, thoả thuận chấm dứt).`, `Reviewing your training contract and when you may switch (probation period, termination agreement).`, `Prüfung des Ausbildungsvertrags und des Wechselzeitpunkts (Probezeit, Aufhebungsvertrag).`],
    [`Tìm Betrieb mới nhận tiếp nhận Azubi đúng nghề, đúng khu vực bạn muốn.`, `Finding a new Betrieb that takes on apprentices in your occupation and chosen area.`, `Suche nach einem neuen Betrieb, der Azubis in Ihrem Beruf und Ihrer Wunschregion aufnimmt.`],
    [`Hỗ trợ hồ sơ chuyển trường nghề (Berufsschule) và thủ tục với Ausländerbehörde.`, `Help with changing vocational school (Berufsschule) and procedures at the immigration office (Ausländerbehörde).`, `Unterstützung beim Wechsel der Berufsschule und bei Verfahren mit der Ausländerbehörde.`],
    [`Dành cho lao động diện 18A / 18B`, `For 18A / 18B skilled workers`, `Für Fachkräfte mit 18A / 18B`],
    [`§18a (bằng nghề) và §18b (bằng đại học) muốn ĐỔI CHỦ, đổi hợp đồng lao động hoặc chuyển vùng làm việc.`, `§18a (vocational qualification) and §18b (university degree) who want to CHANGE EMPLOYER, change employment contract or relocate.`, `§18a (Berufsabschluss) und §18b (Hochschulabschluss), die den ARBEITGEBER wechseln, den Arbeitsvertrag ändern oder die Region wechseln möchten.`],
    [`Hết hạn hoặc không hài lòng với hợp đồng lao động hiện tại.`, `Your current employment contract is ending or unsatisfactory.`, `Ihr aktueller Arbeitsvertrag läuft aus oder ist unbefriedigend.`],
    [`Có cơ hội việc làm mới với mức lương, vị trí hoặc ngành phù hợp hơn.`, `You have a new job opportunity with better pay, position or field.`, `Sie haben eine neue Stelle mit besserem Gehalt, besserer Position oder passenderem Bereich.`],
    [`Muốn chuyển tới bang/thành phố khác để gần gia đình hoặc cộng đồng người Việt.`, `You want to move to another state/city to be near family or the Vietnamese community.`, `Sie möchten in ein anderes Bundesland/eine andere Stadt ziehen, um näher bei Familie oder der vietnamesischen Gemeinschaft zu sein.`],
    [`Đánh giá điều kiện đổi chủ theo Luật Nhập cư (đổi chủ, đổi ngành cần lưu ý gì).`, `Assessing the conditions for changing employer under immigration law (what to watch when changing employer or field).`, `Prüfung der Bedingungen für den Arbeitgeberwechsel nach dem Zuwanderungsrecht (worauf bei Arbeitgeber- oder Branchenwechsel zu achten ist).`],
    [`Kết nối nhà tuyển dụng Đức và chuẩn bị hợp đồng lao động mới phù hợp diện 18a/18b.`, `Connecting German employers and preparing a new employment contract suited to the 18a/18b route.`, `Vermittlung deutscher Arbeitgeber und Vorbereitung eines neuen Arbeitsvertrags passend zu 18a/18b.`],
    [`Hỗ trợ thủ tục công nhận văn bằng (KMK/ZAB, NARIC) nếu chuyển ngành và cập nhật visa/giấy phép cư trú.`, `Help with qualification recognition (KMK/ZAB, NARIC) when changing field, and updating your visa/residence permit.`, `Unterstützung bei der Anerkennung (KMK/ZAB, NARIC) bei Branchenwechsel sowie bei der Aktualisierung von Visum/Aufenthaltstitel.`],
    [`Khi nào nên chuyển?`, `When should you change?`, `Wann sollten Sie wechseln?`],
    [`DCC hỗ trợ bạn`, `How DCC helps you`, `So hilft DCC`],
    [`Một số nghề có thể chuyển`, `Some occupations you can move to`, `Mögliche Berufe für den Wechsel`],
    [`Đăng ký chuyển Azubi`, `Register an Azubi change`, `Azubi-Wechsel anmelden`],
    [`Đăng ký chuyển 18A / 18B`, `Register an 18A / 18B change`, `18A/18B-Wechsel anmelden`],
    [`Gửi nguyện vọng & hồ sơ chuyển việc tại Đức`, `Submit your job-change request & documents in Germany`, `Wechselwunsch & Unterlagen in Deutschland absenden`],
    [`Cho DCC biết bạn đang ở diện nào, muốn chuyển đến đâu và làm nghề gì. Bạn có thể gửi kèm hồ sơ/CV để DCC tư vấn nhanh và chính xác hơn.`, `Tell DCC your current route, where you want to move and what occupation. You can attach your documents/CV for faster, more precise advice.`, `Sagen Sie DCC Ihren aktuellen Status, Ihren Wunschort und Ihren Beruf. Sie können Unterlagen/Lebenslauf anhängen für eine schnellere, genauere Beratung.`],
    [`Bạn đang ở diện nào? *`, `Which route are you on? *`, `In welchem Status sind Sie? *`],
    [`Nghề / ngành hiện tại`, `Current occupation / field`, `Aktueller Beruf / Bereich`],
    [`Nghề / công việc mong muốn chuyển sang`, `Occupation / job you want to move to`, `Gewünschter Beruf / Job`],
    [`Bang / thành phố ĐANG Ở`, `State / city you ARE IN`, `Aktuelles Bundesland / Stadt`],
    [`Bang / thành phố MUỐN CHUYỂN TỚI`, `State / city you WANT TO MOVE TO`, `Gewünschtes Bundesland / Stadt`],
    [`Thời gian mong muốn chuyển`, `Preferred time to change`, `Gewünschter Wechselzeitpunkt`],
    [`Họ và tên *`, `Full name *`, `Vollständiger Name *`],
    [`Số WhatsApp *`, `WhatsApp number *`, `WhatsApp-Nummer *`],
    [`Số điện thoại / Zalo khác`, `Other phone / Zalo`, `Weitere Telefon / Zalo`],
    [`Lý do muốn chuyển việc / chuyển chủ`, `Reason for changing job / employer`, `Grund für den Job-/Arbeitgeberwechsel`],
    [`📎 Gửi hồ sơ của bạn (DCC nhận hồ sơ tại Đức)`, `📎 Send your documents (DCC receives applications in Germany)`, `📎 Unterlagen senden (DCC nimmt Bewerbungen in Deutschland an)`],
    [`Link hồ sơ / CV (Google Drive, Dropbox…)`, `Document / CV link (Google Drive, Dropbox…)`, `Link zu Unterlagen / Lebenslauf (Google Drive, Dropbox…)`],
    [`Hoặc tải file lên (CV, hợp đồng, bằng cấp…)`, `Or upload files (CV, contract, certificates…)`, `Oder Dateien hochladen (Lebenslauf, Vertrag, Zeugnisse…)`],
    [`Tối đa 3 file, tổng dưới ~3MB. File lớn hơn vui lòng gửi qua link Drive hoặc WhatsApp. Hồ sơ chỉ dùng để tư vấn, được bảo mật.`, `Up to 3 files, under ~3MB total. For larger files please use a Drive link or WhatsApp. Documents are used only for advice and kept private.`, `Bis zu 3 Dateien, zusammen unter ~3 MB. Größere Dateien bitte per Drive-Link oder WhatsApp. Unterlagen dienen nur der Beratung und bleiben vertraulich.`],
    [`Gửi nguyện vọng & hồ sơ chuyển việc`, `Submit request & documents`, `Wunsch & Unterlagen absenden`],
    [`🔒 Thông tin & hồ sơ được bảo mật, chỉ dùng để tư vấn chuyển việc phù hợp.`, `🔒 Your information and documents are kept private, used only to advise a suitable job change.`, `🔒 Ihre Daten und Unterlagen bleiben vertraulich und dienen nur der passenden Wechselberatung.`],
    [`— Chọn diện hiện tại —`, `— Choose your current route —`, `— Aktuellen Status wählen —`],
    [`Azubi (đang học nghề)`, `Azubi (in apprenticeship)`, `Azubi (in Ausbildung)`],
    [`18A (bằng nghề)`, `18A (vocational qualification)`, `18A (Berufsabschluss)`],
    [`18B (bằng đại học)`, `18B (university degree)`, `18B (Hochschulabschluss)`],
    [`— Chọn nghề / công việc —`, `— Choose occupation / job —`, `— Beruf / Job wählen —`],
    [`Nghề khác`, `Other occupation`, `Anderer Beruf`],
    [`Nghề khác (ghi rõ ở ghi chú)`, `Other (specify in notes)`, `Andere (in Anmerkungen angeben)`],
    [`Ví dụ: Điều dưỡng, Nhà hàng – khách sạn…`, `e.g. Nursing, Hospitality…`, `z. B. Pflege, Gastronomie…`],
    [`(không bắt buộc)`, `(optional)`, `(optional)`],
    [`Mô tả ngắn tình huống hiện tại và mong muốn của bạn…`, `Briefly describe your current situation and what you want…`, `Beschreiben Sie kurz Ihre Situation und Ihren Wunsch…`],
    [`Mong muốn cụ thể về chủ mới, mức lương, khu vực…`, `Specific wishes about the new employer, salary, area…`, `Konkrete Wünsche zu neuem Arbeitgeber, Gehalt, Region…`],

    // ===== Tên nghề (chip & dropdown) =====
    [`Điều dưỡng – chăm sóc người cao tuổi`, `Nursing – elderly care`, `Pflege – Altenpflege`],
    [`Nhà hàng – khách sạn`, `Hospitality (hotel & restaurant)`, `Hotel & Gastronomie`],
    [`Đầu bếp`, `Chef / cook`, `Koch / Köchin`],
    [`Làm bánh`, `Baking`, `Bäckerei`],
    [`Chế biến thịt`, `Meat processing`, `Fleischverarbeitung`],
    [`Bán hàng – bán lẻ`, `Sales – retail`, `Verkauf – Einzelhandel`],
    [`Logistics – kho vận`, `Logistics – warehousing`, `Logistik – Lager`],
    [`Cơ khí – cơ điện tử`, `Mechanics – mechatronics`, `Mechanik – Mechatronik`],
    [`Điện – điện tử`, `Electrics – electronics`, `Elektrik – Elektronik`],
    [`Xây dựng`, `Construction`, `Bau`],
    [`Sơn – hoàn thiện công trình`, `Painting – finishing`, `Maler – Ausbau`],
    [`Cơ khí ô tô`, `Automotive mechanics`, `Kfz-Mechanik`],
    [`Công nghệ thông tin`, `Information technology`, `Informationstechnik`],
    [`Trợ lý nha khoa`, `Dental assistant`, `Zahnmedizinische Fachangestellte`],
    [`Cắt tóc – làm đẹp`, `Hairdressing – beauty`, `Friseur – Beauty`],
    [`Giáo dục mầm non`, `Early childhood education`, `Erzieher/in (Kita)`],
    [`Nông nghiệp – làm vườn`, `Agriculture – gardening`, `Landwirtschaft – Gartenbau`],
    [`Lái xe tải`, `Truck driving`, `Lkw-Fahrer/in`],
    [`Hàn – gia công kim loại`, `Welding – metalworking`, `Schweißen – Metallbau`],
    [`Điều dưỡng – y tế`, `Nursing – healthcare`, `Pflege – Gesundheit`],
    [`Bác sĩ`, `Doctor`, `Arzt / Ärztin`],
    [`Dược sĩ`, `Pharmacist`, `Apotheker/in`],
    [`Kỹ sư cơ khí`, `Mechanical engineer`, `Maschinenbauingenieur/in`],
    [`Kỹ sư điện – tự động hóa`, `Electrical & automation engineer`, `Elektro- & Automatisierungsingenieur/in`],
    [`Kỹ sư xây dựng`, `Civil engineer`, `Bauingenieur/in`],
    [`Kỹ sư ô tô`, `Automotive engineer`, `Kfz-Ingenieur/in`],
    [`Công nghệ thông tin (IT)`, `Information technology (IT)`, `Informationstechnik (IT)`],
    [`Kế toán – tài chính`, `Accounting – finance`, `Buchhaltung – Finanzen`],
    [`Quản lý nhà hàng – khách sạn`, `Hotel & restaurant management`, `Hotel- & Restaurantmanagement`],
    [`Logistics`, `Logistics`, `Logistik`],
    [`Kiến trúc`, `Architecture`, `Architektur`],
    [`Giáo viên – sư phạm`, `Teacher – education`, `Lehrkraft – Pädagogik`],

    // ===== Đăng ký tài khoản (/dang-ky) =====
    [`Tạo tài khoản DCC`, `Create your DCC account`, `DCC-Konto erstellen`],
    [`Đăng ký một lần và tự đặt mật khẩu. Những lần sau, bạn chỉ cần đăng nhập bằng`, `Register once and set your own password. Next time, simply log in with`, `Einmal registrieren und ein eigenes Passwort festlegen. Beim nächsten Mal meldest du dich einfach mit`],
    [`email hoặc số điện thoại + mật khẩu`, `email or phone number + password`, `E-Mail oder Telefonnummer + Passwort`],
    [`để theo dõi hồ sơ và làm việc với DCC.`, `to track your application and work with DCC.`, `an, um deine Unterlagen zu verfolgen und mit DCC zu arbeiten.`],
    [`Đã có tài khoản? Đăng nhập →`, `Already have an account? Log in →`, `Schon ein Konto? Anmelden →`],
    [`🎓 Học viên`, `🎓 Student`, `🎓 Lernende`],
    [`🤝 Đối tác`, `🤝 Partner`, `🤝 Partner`],
    [`Thông tin cơ bản`, `Basic information`, `Grundangaben`],
    [`Số điện thoại / Zalo *`, `Phone / Zalo *`, `Telefon / Zalo *`],
    [`Chương trình quan tâm`, `Program of interest`, `Programm von Interesse`],
    [`Ngành/nghề hiện tại`, `Current field/occupation`, `Aktuelles Fachgebiet/Beruf`],
    [`Mong muốn của bạn`, `Your goals`, `Deine Wünsche`],
    [`Tạo mật khẩu đăng nhập`, `Create a login password`, `Login-Passwort erstellen`],
    [`Mật khẩu * (tối thiểu 6 ký tự)`, `Password * (at least 6 characters)`, `Passwort * (mindestens 6 Zeichen)`],
    [`Nhập lại mật khẩu *`, `Confirm password *`, `Passwort bestätigen *`],
    [`Tạo tài khoản học viên`, `Create student account`, `Lernenden-Konto erstellen`],
    [`🔒 Mật khẩu được mã hoá, DCC không thấy mật khẩu thật của bạn.`, `🔒 Your password is encrypted; DCC never sees your real password.`, `🔒 Dein Passwort wird verschlüsselt; DCC sieht dein echtes Passwort nie.`],
    [`Loại đối tác`, `Partner type`, `Partnertyp`],
    [`Đối tác cá nhân`, `Individual partner`, `Einzelpartner`],
    [`Cộng tác viên, cá nhân giới thiệu học viên`, `Collaborator or individual referring students`, `Mitarbeiter oder Einzelperson, die Lernende vermittelt`],
    [`Đối tác công ty`, `Company partner`, `Unternehmenspartner`],
    [`Trung tâm, công ty, tổ chức hợp tác`, `Center, company or partner organization`, `Zentrum, Unternehmen oder Partnerorganisation`],
    [`Thông tin liên hệ`, `Contact information`, `Kontaktdaten`],
    [`Họ tên người đại diện *`, `Representative's full name *`, `Name des Ansprechpartners *`],
    [`Tên công ty / đơn vị`, `Company / organization name`, `Firmen- / Organisationsname`],
    [`Mã số thuế / Giấy phép`, `Tax code / license`, `Steuernummer / Lizenz`],
    [`Khu vực hoạt động`, `Area of operation`, `Tätigkeitsgebiet`],
    [`Lời nhắn tới DCC`, `Message to DCC`, `Nachricht an DCC`],
    [`Tạo tài khoản đối tác`, `Create partner account`, `Partner-Konto erstellen`],
    [`Điều bạn muốn DCC tư vấn kỹ hơn`, `What you'd like DCC to advise on in detail`, `Worüber DCC dich genauer beraten soll`],
    [`Tên trung tâm / công ty`, `Center / company name`, `Name des Zentrums / Unternehmens`],
    [`Mã số thuế hoặc số ĐKKD`, `Tax code or business registration number`, `Steuernummer oder Handelsregisternummer`],
    [`Đôi nét về bạn và mong muốn hợp tác…`, `A bit about you and your partnership goals…`, `Etwas über dich und deine Kooperationswünsche…`],

    // ===== Đăng nhập (/hoc-vien) =====
    [`Đăng nhập`, `Log in`, `Anmelden`],
    [`Cổng dành cho học viên & đối tác`, `Portal for students & partners`, `Portal für Lernende & Partner`],
    [`Đăng nhập bằng`, `Log in with`, `Anmelden mit`],
    [`bạn đã tạo khi đăng ký.`, `that you created when registering.`, `die du bei der Registrierung erstellt hast.`],
    [`Học viên`, `Student`, `Lernende`],
    [`Đăng nhập để tra cứu hồ sơ, tiến độ học tiếng, lịch hẹn và những giấy tờ cần bổ sung của riêng bạn.`, `Log in to check your application, language progress, appointments and the documents you still need to provide.`, `Melde dich an, um deine Unterlagen, deinen Sprachfortschritt, Termine und noch fehlende Dokumente einzusehen.`],
    [`Email hoặc số điện thoại`, `Email or phone number`, `E-Mail oder Telefonnummer`],
    [`Mật khẩu`, `Password`, `Passwort`],
    [`Chưa có tài khoản?`, `No account yet?`, `Noch kein Konto?`],
    [`Đăng ký học viên →`, `Register as student →`, `Als Lernende registrieren →`],
    [`Đối tác DCC`, `DCC partner`, `DCC-Partner`],
    [`Đăng nhập để theo dõi học viên bạn giới thiệu và phần dữ liệu thuộc quyền của mình — minh bạch, riêng tư.`, `Log in to track the students you referred and the data you own — transparent and private.`, `Melde dich an, um die von dir vermittelten Lernenden und deine eigenen Daten zu verfolgen — transparent und privat.`],
    [`Vào cổng đối tác`, `Enter partner portal`, `Zum Partner-Portal`],
    [`Chưa là đối tác?`, `Not a partner yet?`, `Noch kein Partner?`],
    [`Đăng ký đối tác →`, `Register as partner →`, `Als Partner registrieren →`],
    [`email@example.com hoặc 09xxxxxxxx`, `email@example.com or 09xxxxxxxx`, `email@example.com oder 09xxxxxxxx`],

    // ===== Cổng đối tác (/partner) =====
    [`Đồng hành cùng DCC — chúng tôi trân trọng từng đối tác`, `Partner with DCC — we value every partner`, `Mit DCC zusammenarbeiten — wir schätzen jeden Partner`],
    [`Với DCC, thành công của đối tác chính là thành công của chúng tôi. Mỗi học viên bạn gửi gắm đều được chăm sóc minh bạch, có trách nhiệm và theo dõi đến khi sang Đức an toàn.`, `At DCC, our partners' success is our success. Every student you entrust to us is cared for transparently and responsibly, and followed until they safely reach Germany.`, `Bei DCC ist der Erfolg unserer Partner unser Erfolg. Jeder Lernende, den du uns anvertraust, wird transparent und verantwortungsvoll betreut und bis zur sicheren Ankunft in Deutschland begleitet.`],
    [`Đăng ký hợp tác`, `Apply to partner`, `Kooperation beantragen`],
    [`Đăng nhập đối tác`, `Partner login`, `Partner-Login`],
    [`Vì sao hợp tác với DCC`, `Why partner with DCC`, `Warum mit DCC kooperieren`],
    [`Mối quan hệ xây trên sự minh bạch và tôn trọng`, `A relationship built on transparency and respect`, `Eine Beziehung auf Basis von Transparenz und Respekt`],
    [`Chúng tôi không xem đối tác là một kênh giao dịch — mà là người đồng hành cùng đưa học viên Việt sang Đức.`, `We don't see partners as a sales channel — but as companions in bringing Vietnamese students to Germany.`, `Wir sehen Partner nicht als Vertriebskanal — sondern als Wegbegleiter, um vietnamesische Lernende nach Deutschland zu bringen.`],
    [`Quan hệ bền vững`, `Lasting relationship`, `Dauerhafte Beziehung`],
    [`DCC xem mỗi đối tác là người đồng hành lâu dài, không phải một giao dịch ngắn hạn.`, `DCC sees each partner as a long-term companion, not a short-term deal.`, `DCC sieht jeden Partner als langfristigen Begleiter, nicht als kurzfristiges Geschäft.`],
    [`Quyền lợi rõ ràng`, `Clear benefits`, `Klare Vorteile`],
    [`Chính sách hợp tác minh bạch, trao đổi cụ thể và phối hợp đúng cam kết cho từng học viên.`, `Transparent cooperation terms, concrete communication and coordination true to commitments for each student.`, `Transparente Kooperationsbedingungen, konkrete Abstimmung und zuverlässige Zusammenarbeit für jeden Lernenden.`],
    [`Theo dõi realtime`, `Real-time tracking`, `Echtzeit-Verfolgung`],
    [`Cổng riêng giúp bạn nắm trạng thái từng học viên đã gửi, không phải hỏi đi hỏi lại.`, `A private portal lets you see the status of every student you sent, without asking again and again.`, `Ein eigenes Portal zeigt dir den Status jedes gesendeten Lernenden — ohne ständiges Nachfragen.`],
    [`Dữ liệu riêng tư`, `Private data`, `Private Daten`],
    [`Bạn chỉ xem được học viên của mình; dữ liệu các đối tác khác được tách biệt tuyệt đối.`, `You only see your own students; other partners' data is completely separated.`, `Du siehst nur deine eigenen Lernenden; die Daten anderer Partner sind strikt getrennt.`],
    [`Hỗ trợ chuyên môn`, `Professional support`, `Fachliche Unterstützung`],
    [`Tài liệu, đào tạo và đội ngũ tư vấn của DCC luôn sẵn sàng đồng hành cùng đối tác.`, `DCC's materials, training and advisory team are always ready to support partners.`, `DCCs Materialien, Schulungen und Beratungsteam stehen Partnern jederzeit zur Seite.`],
    [`Phản hồi tận tâm`, `Dedicated response`, `Engagierte Betreuung`],
    [`Đội ngũ phụ trách đối tác riêng, phản hồi nhanh và hỗ trợ bạn đến cùng.`, `A dedicated partner team responds quickly and supports you all the way.`, `Ein eigenes Partner-Team antwortet schnell und unterstützt dich bis zum Schluss.`],
    [`Đăng ký đối tác`, `Partner registration`, `Partner-Registrierung`],
    [`Trở thành đối tác của DCC`, `Become a DCC partner`, `DCC-Partner werden`],
    [`Tạo tài khoản đối tác (cá nhân hoặc công ty) và tự đặt mật khẩu. Lần sau bạn chỉ cần đăng nhập bằng email hoặc số điện thoại + mật khẩu.`, `Create a partner account (individual or company) and set your own password. Next time, just log in with email or phone number + password.`, `Erstelle ein Partner-Konto (Einzelperson oder Unternehmen) und lege ein eigenes Passwort fest. Beim nächsten Mal meldest du dich einfach mit E-Mail oder Telefonnummer + Passwort an.`],
    [`Đã là đối tác?`, `Already a partner?`, `Schon Partner?`],
    [`Cổng quản lý dành cho đối tác`, `Management portal for partners`, `Verwaltungsportal für Partner`],
    [`Sau khi đăng nhập, bạn theo dõi học viên đã gửi, trạng thái hồ sơ và phần dữ liệu thuộc quyền của mình.`, `After logging in, you can track the students you sent, their application status and your own data.`, `Nach der Anmeldung verfolgst du die gesendeten Lernenden, ihren Bearbeitungsstand und deine eigenen Daten.`],
    [`Thống kê đối tác`, `Partner statistics`, `Partner-Statistik`],
    [`Tổng học viên đã gửi: 24`, `Total students sent: 24`, `Gesendete Lernende gesamt: 24`],
    [`Đang tư vấn: 7`, `In consultation: 7`, `In Beratung: 7`],
    [`Đang học tiếng: 8`, `Learning German: 8`, `Beim Deutschlernen: 8`],
    [`Đã có hợp đồng: 3`, `Contract signed: 3`, `Vertrag erhalten: 3`],
    [`Đang visa: 4`, `Visa in progress: 4`, `Visum in Bearbeitung: 4`],
    [`Đã bay: 2`, `Departed: 2`, `Ausgereist: 2`],
    [`Form đối tác gửi học viên`, `Partner student submission form`, `Partner-Formular zur Lernenden-Übermittlung`],
    [`Tên đối tác`, `Partner name`, `Partnername`],
    [`Mã đối tác`, `Partner code`, `Partnercode`],
    [`Họ tên học viên`, `Student's full name`, `Name des Lernenden`],
    [`Bằng cấp`, `Qualifications`, `Qualifikationen`],
    [`Ghi chú`, `Notes`, `Notizen`],
    [`File đính kèm`, `Attachment`, `Anhang`],
    [`Đính kèm bằng cấp, CV hoặc giấy tờ liên quan nếu có.`, `Attach diplomas, CV or related documents if available.`, `Füge Zeugnisse, Lebenslauf oder relevante Dokumente bei, falls vorhanden.`],
    [`Gửi thông tin học viên`, `Submit student information`, `Lernenden-Daten senden`],
    [`Danh sách học viên mẫu`, `Sample student list`, `Beispielliste der Lernenden`],
    [`Trạng thái`, `Status`, `Status`],
    [`Thiếu hồ sơ`, `Missing documents`, `Fehlende Unterlagen`],
    [`Đang học tiếng`, `Learning German`, `Beim Deutschlernen`],
    [`Hộ chiếu`, `Passport`, `Reisepass`],
    [`Chờ phỏng vấn`, `Awaiting interview`, `Wartet auf Interview`],
    [`Không`, `No`, `Nein`],

    // ===== Tra cứu hồ sơ (/tra-cuu-ho-so) =====
    [`Nhập mã tra cứu DCC đã cấp, hoặc email / số điện thoại bạn dùng khi đăng ký để xem tiến độ từng hồ sơ.`, `Enter the lookup code DCC issued, or the email / phone number you used to register, to see the progress of each application.`, `Gib den von DCC vergebenen Suchcode oder die bei der Registrierung verwendete E-Mail / Telefonnummer ein, um den Fortschritt jeder Bewerbung zu sehen.`],
    [`Mã tra cứu / Email / Số điện thoại`, `Lookup code / Email / Phone`, `Suchcode / E-Mail / Telefon`],
    [`Tra cứu tiến độ`, `Track progress`, `Fortschritt prüfen`],
    [`Tra cứu hiển thị toàn bộ hồ sơ/chương trình bạn đã đăng ký với DCC và tiến độ của từng hồ sơ.`, `The lookup shows all applications/programs you registered with DCC and the progress of each one.`, `Die Suche zeigt alle bei DCC registrierten Bewerbungen/Programme und den Fortschritt jeder einzelnen.`],
    [`DCC-2026-xxxxx hoặc email / số điện thoại`, `DCC-2026-xxxxx or email / phone`, `DCC-2026-xxxxx oder E-Mail / Telefon`],

    // ===== Rủi ro cần biết (/rui-ro-can-biet) =====
    [`Chúng tôi trình bày rủi ro một cách nghiêm túc để bạn chuẩn bị đúng, thay vì tạo kỳ vọng sai.`, `We present risks seriously so you can prepare properly, instead of creating false expectations.`, `Wir stellen Risiken ernsthaft dar, damit du dich richtig vorbereiten kannst, statt falsche Erwartungen zu wecken.`],
    [`DCC hỗ trợ giảm rủi ro bằng cách nào?`, `How does DCC help reduce risk?`, `Wie hilft DCC, Risiken zu verringern?`],
    [`Đơn hàng thay đổi số lượng hoặc thời gian tiếp nhận`, `Job orders change in quantity or intake timing`, `Stellenangebote ändern Anzahl oder Aufnahmezeitpunkt`],
    [`DCC hiển thị trạng thái đơn, số lượng còn tuyển và tư vấn phương án thay thế khi cần.`, `DCC shows order status, remaining openings and advises alternatives when needed.`, `DCC zeigt den Status der Angebote, freie Plätze und berät bei Bedarf zu Alternativen.`],
    [`Không phù hợp ngành nghề sau khi tư vấn`, `Not suited to the occupation after consultation`, `Nach der Beratung nicht zum Beruf passend`],
    [`DCC ưu tiên tư vấn đúng diện, đánh giá năng lực, sức khỏe, kỳ vọng và kế hoạch dài hạn trước khi đăng ký.`, `DCC prioritizes advising the right path, assessing ability, health, expectations and long-term plans before registering.`, `DCC berät vorrangig zum richtigen Weg und prüft Fähigkeiten, Gesundheit, Erwartungen und langfristige Pläne vor der Anmeldung.`],
    [`Rủi ro tài chính nếu không chuẩn bị đúng kế hoạch`, `Financial risk if you don't prepare to plan`, `Finanzielles Risiko bei mangelnder Planung`],
    [`DCC trao đổi các khoản dự kiến, mốc cần chuẩn bị và cảnh báo trước các nghĩa vụ tài chính quan trọng.`, `DCC discusses estimated costs, preparation milestones and warns in advance about key financial obligations.`, `DCC bespricht voraussichtliche Kosten, Vorbereitungsschritte und warnt frühzeitig vor wichtigen finanziellen Verpflichtungen.`],
    [`Làm việc với đơn vị không minh bạch`, `Working with a non-transparent provider`, `Zusammenarbeit mit einem intransparenten Anbieter`],
    [`DCC xây hệ thống theo dõi hồ sơ, phân quyền dữ liệu, ghi chú chăm sóc và cho học viên/đối tác xem phần thuộc quyền.`, `DCC builds a system to track applications, manage data access, log care notes and let students/partners view what belongs to them.`, `DCC baut ein System zur Verfolgung von Unterlagen, zur Verwaltung der Datenrechte, für Betreuungsnotizen und lässt Lernende/Partner ihren Bereich einsehen.`],
    [`Ví dụ: ngay khi có chỗ, sau 3 tháng…`, `e.g. as soon as a spot opens, after 3 months…`, `z. B. sobald ein Platz frei ist, nach 3 Monaten…`],

    // ===== Giới thiệu / Liên hệ =====
    [`Giới thiệu`, `About`, `Über uns`],
    [`Trung tâm hỗ trợ học tiếng Đức, tuyển sinh du học nghề, chuyển đổi văn bằng 18B/18A, Au-pair, thời vụ 8 tháng, hồ sơ visa và kết nối đối tác tại Đức.`, `A center supporting German learning, vocational-training admissions, 18B/18A qualification recognition, Au pair, 8-month seasonal work, visa applications and partner connections in Germany.`, `Ein Zentrum für Deutschlernen, Ausbildungsvermittlung, Anerkennung 18B/18A, Au-pair, 8-Monate-Saisonarbeit, Visumsunterlagen und Partnervernetzung in Deutschland.`],
    [`Liên hệ`, `Contact`, `Kontakt`],

    // ===== Trang chi tiết chương trình =====
    [`Nhà hàng khách sạn • Điều dưỡng • Bếp • Bán hàng • Logistics • Kỹ thuật • Bánh • Thịt`, `Hospitality • Nursing • Kitchen • Sales • Logistics • Technical • Bakery • Meat`, `Gastronomie • Pflege • Küche • Verkauf • Logistik • Technik • Bäckerei • Fleisch`],
    [`Xem đơn du học nghề`, `View vocational training offers`, `Ausbildungsangebote ansehen`],
    [`Công nhận văn bằng • Hồ sơ nghề • Hợp đồng lao động • Visa việc làm`, `Qualification recognition • Professional file • Employment contract • Work visa`, `Anerkennung • Berufsunterlagen • Arbeitsvertrag • Arbeitsvisum`],
    [`Kiểm tra điều kiện 18B/18A`, `Check 18B/18A eligibility`, `18B/18A-Voraussetzungen prüfen`],
    [`A1/A2 • Gia đình bản xứ • Thư động lực • Lộ trình sau Au-pair`, `A1/A2 • Host family • Motivation letter • Path after Au pair`, `A1/A2 • Gastfamilie • Motivationsschreiben • Weg nach dem Au-pair`],
    [`Đăng ký tư vấn Au-pair`, `Request Au pair consultation`, `Au-pair-Beratung anfragen`],
    [`8 tháng • Lao động mùa vụ • Lịch nhập cảnh • Hồ sơ rõ ràng`, `8 months • Seasonal work • Entry schedule • Clear paperwork`, `8 Monate • Saisonarbeit • Einreiseplan • Klare Unterlagen`],
    [`Xem chương trình 8 tháng`, `View 8-month program`, `8-Monate-Programm ansehen`],
    [`A1 • A2 • B1 • B2 • Kiểm tra đầu vào`, `A1 • A2 • B1 • B2 • Placement test`, `A1 • A2 • B1 • B2 • Einstufungstest`],
    [`Đăng ký học tiếng`, `Register for German course`, `Für Deutschkurs anmelden`],
  ];

  const I18N = { en: {}, de: {} };
  T.forEach(([vi, en, de]) => { I18N.en[vi] = en; I18N.de[vi] = de; });

  // Tiêu đề hero có thẻ <em> → dịch nguyên cụm (giữ <em> để vẫn có nét vàng nghiêng).
  const HTML_I18N = {
    en: {
      'hero-main': `Your path to Germany — <em>clear</em>, <em>transparent</em> paperwork, a <em>solid</em> future.`,
      'home-hero': `<span class="bx-th-from">From <em>Vietnam</em> to <em>Germany</em></span><span class="bx-th-promise">Dedication for a journey done right</span>`,
      'home-bridge': `A solid bridge between two shores — where <em>dreams</em> meet <em>opportunity</em>.`,
      'home-cta': `Your journey to Germany <em>begins today</em>.`,
    },
    de: {
      'hero-main': `Dein Weg nach Deutschland — <em>klar</em>, <em>transparente</em> Unterlagen, eine <em>sichere</em> Zukunft.`,
      'home-hero': `<span class="bx-th-from">Von <em>Vietnam</em> nach <em>Deutschland</em></span><span class="bx-th-promise">Mit Hingabe für den richtigen Weg</span>`,
      'home-bridge': `Eine feste Brücke zwischen zwei Ufern — wo <em>Träume</em> auf <em>Chancen</em> treffen.`,
      'home-cta': `Ihre Reise nach Deutschland <em>beginnt heute</em>.`,
    },
  };

  const LABELS = {
    vi: { menu: 'MENU', close: 'ĐÓNG' },
    en: { menu: 'MENU', close: 'CLOSE' },
    de: { menu: 'MENÜ', close: 'SCHLIESSEN' },
  };

  let LANG = 'vi';
  try { LANG = localStorage.getItem('dcc_lang') || 'vi'; } catch (e) {}
  if (!['vi', 'en', 'de'].includes(LANG)) LANG = 'vi';

  const origText = new WeakMap();

  function apply() {
    const dict = I18N[LANG]; // undefined khi tiếng Việt

    // 1) Text node trong body (trừ lang-switch / script / style).
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = n.parentNode;
        if (p && p.nodeType === 1) {
          const tag = p.tagName;
          if (tag === 'SCRIPT' || tag === 'STYLE') return NodeFilter.FILTER_REJECT;
          if (p.closest('.lang-switch') || p.classList.contains('menu-toggle-icon') || p.classList.contains('menu-toggle-text')) return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => {
      if (!origText.has(n)) origText.set(n, n.nodeValue);
      const orig = origText.get(n);
      const key = orig.trim();
      const tr = dict && dict[key];
      n.nodeValue = tr ? orig.split(key).join(tr) : orig;
    });

    // 2) Placeholder.
    document.querySelectorAll('[placeholder]').forEach((el) => {
      if (el.__phOrig == null) el.__phOrig = el.getAttribute('placeholder') || '';
      const key = el.__phOrig.trim();
      const tr = dict && dict[key];
      el.setAttribute('placeholder', tr || el.__phOrig);
    });

    // 3) Khối HTML có <em> (hero).
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      if (el.__htmlOrig == null) el.__htmlOrig = el.innerHTML;
      const id = el.getAttribute('data-i18n-html');
      const tr = HTML_I18N[LANG] && HTML_I18N[LANG][id];
      el.innerHTML = tr || el.__htmlOrig;
    });

    // 4) Nút menu mobile (icon + chữ) theo trạng thái mở/đóng.
    const nav = document.querySelector('.nav-links');
    const open = nav ? nav.classList.contains('open') : false;
    const icon = document.querySelector('.menu-toggle-icon');
    const text = document.querySelector('.menu-toggle-text');
    if (icon) icon.textContent = open ? '✕' : '☰';
    if (text) text.textContent = open ? LABELS[LANG].close : LABELS[LANG].menu;

    // 5) Trạng thái nút chọn ngôn ngữ + thuộc tính lang.
    document.documentElement.lang = LANG;
    document.querySelectorAll('.lang-switch [data-lang]').forEach((b) => b.classList.toggle('active', b.dataset.lang === LANG));
  }

  function setLang(l) {
    if (!['vi', 'en', 'de'].includes(l)) return;
    LANG = l;
    try { localStorage.setItem('dcc_lang', l); } catch (e) {}
    apply();
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('.lang-switch [data-lang]');
    if (b) { e.preventDefault(); setLang(b.dataset.lang); }
  });

  window.DCC_I18N = { apply, setLang, getLang: () => LANG };
  document.addEventListener('DOMContentLoaded', apply);
})();
