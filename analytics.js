/* =====================================================================
   DCC — Đo lường quảng cáo (Meta Pixel + TikTok Pixel + Google GA4)
   ---------------------------------------------------------------------
   CÁCH DÙNG: chỉ cần điền ID vào 3 dòng dưới. Để trống = KHÔNG chạy gì
   (web hoạt động bình thường, không ảnh hưởng tốc độ/quyền riêng tư).

   - META_PIXEL_ID : lấy ở Meta Events Manager (business.facebook.com) — dạng số ~15 chữ số.
   - TIKTOK_PIXEL_ID: lấy ở TikTok Ads > Assets > Events > Web Events — dạng chuỗi chữ-số.
   - GA4_ID        : lấy ở Google Analytics 4 (Admin > Data Streams) — dạng "G-XXXXXXX".
   ===================================================================== */
window.DCC_ANALYTICS = {
  META_PIXEL_ID: '',     // ví dụ '1234567890123456'
  TIKTOK_PIXEL_ID: '',   // ví dụ 'CABCDE1234567890'
  GA4_ID: '',            // ví dụ 'G-ABCD1234'
};

(function () {
  var cfg = window.DCC_ANALYTICS;

  // ---- Meta (Facebook) Pixel ----
  if (cfg.META_PIXEL_ID) {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', cfg.META_PIXEL_ID);
    fbq('track', 'PageView');
  }

  // ---- TikTok Pixel ----
  if (cfg.TIKTOK_PIXEL_ID) {
    !(function (w, d, t) {
      w.TiktokAnalyticsObject = t; var ttq = w[t] = w[t] || [];
      ttq.methods = ['page','track','identify','instances','debug','on','off','once','ready','alias','group','enableCookie','disableCookie','holdConsent','revokeConsent','grantConsent'];
      ttq.setAndDefer = function (e, n) { e[n] = function () { e.push([n].concat(Array.prototype.slice.call(arguments, 0))); }; };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.instance = function (e) { for (var n = ttq._i[e] || [], i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(n, ttq.methods[i]); return n; };
      ttq.load = function (e, n) {
        var r = 'https://analytics.tiktok.com/i18n/pixel/events.js', o = n && n.partner;
        ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = r; ttq._t = ttq._t || {}; ttq._t[e] = +new Date(); ttq._o = ttq._o || {}; ttq._o[e] = n || {};
        var s = d.createElement('script'); s.type = 'text/javascript'; s.async = !0; s.src = r + '?sdkid=' + e + '&lib=' + t;
        var a = d.getElementsByTagName('script')[0]; a.parentNode.insertBefore(s, a);
      };
      ttq.load(cfg.TIKTOK_PIXEL_ID); ttq.page();
    })(window, document, 'ttq');
  }

  // ---- Google Analytics 4 (gtag) ----
  if (cfg.GA4_ID) {
    var g = document.createElement('script'); g.async = true;
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + cfg.GA4_ID;
    document.head.appendChild(g);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', cfg.GA4_ID);
  }

  /* Ghi nhận một hành động chuyển đổi (gửi tới cả 3 nền tảng đang bật).
     event: 'Lead' | 'CompleteRegistration' | 'Contact'
     params: { content_name, ... } tuỳ chọn */
  window.dccTrack = function (event, params) {
    params = params || {};
    try { if (cfg.META_PIXEL_ID && window.fbq) fbq('track', event, params); } catch (e) {}
    try {
      if (cfg.TIKTOK_PIXEL_ID && window.ttq) {
        var ttMap = { Lead: 'SubmitForm', CompleteRegistration: 'CompleteRegistration', Contact: 'Contact' };
        ttq.track(ttMap[event] || event, { content_name: params.content_name || event });
      }
    } catch (e) {}
    try {
      if (cfg.GA4_ID && window.gtag) {
        var gaMap = { Lead: 'generate_lead', CompleteRegistration: 'sign_up', Contact: 'contact' };
        gtag('event', gaMap[event] || event, params);
      }
    } catch (e) {}
  };

  // Tự ghi nhận khi khách bấm Zalo / WhatsApp / gọi điện (conversion "Contact").
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (/zalo\.me|wa\.me|whatsapp|^tel:/i.test(href)) {
      var ch = /zalo/i.test(href) ? 'Zalo' : /wa\.me|whatsapp/i.test(href) ? 'WhatsApp' : 'Gọi điện';
      window.dccTrack('Contact', { content_name: 'Liên hệ qua ' + ch });
    }
  }, true);
})();
