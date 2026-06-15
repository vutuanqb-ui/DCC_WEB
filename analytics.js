/* =====================================================================
   DCC — Đo lường quảng cáo (Meta Pixel + TikTok Pixel + Google GA4)
   + Banner xin phép cookie (chỉ nạp pixel SAU khi khách bấm "Đồng ý")
   ---------------------------------------------------------------------
   CÁCH DÙNG: chỉ cần điền ID vào 3 dòng dưới. Để trống = KHÔNG chạy gì.
   - META_PIXEL_ID : Meta Events Manager (business.facebook.com) — ~15 chữ số.
   - TIKTOK_PIXEL_ID: TikTok Ads > Tools > Events > Web Events — chuỗi chữ-số.
   - GA4_ID        : Google Analytics 4 (Admin > Data Streams) — dạng "G-XXXX".

   Quyền riêng tư: pixel/GA chỉ tải khi khách ĐỒNG Ý ở banner cookie.
   Lựa chọn lưu trong localStorage 'dcc_consent' = 'granted' | 'denied'.
   ===================================================================== */
window.DCC_ANALYTICS = {
  META_PIXEL_ID: '1806004037231540',
  TIKTOK_PIXEL_ID: 'D8NSQ5BC77U56UIVCQ90',
  GA4_ID: 'G-BPYVJQ542D',
};

(function () {
  var cfg = window.DCC_ANALYTICS;
  var CONSENT_KEY = 'dcc_consent';
  var booted = false;

  function readConsent() { try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; } }
  function saveConsent(v) { try { localStorage.setItem(CONSENT_KEY, v); } catch (e) {} }

  // ---- Tải các pixel (chỉ gọi sau khi đã có sự đồng ý) ----
  function loadPixels() {
    if (booted) return; booted = true;

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
  }

  /* Ghi nhận một hành động chuyển đổi (gửi tới cả 3 nền tảng đang bật).
     event: 'Lead' | 'CompleteRegistration' | 'Contact'
     params: { content_name, ... } tuỳ chọn. An toàn khi chưa đồng ý cookie
     (pixel chưa nạp → tự bỏ qua). */
  window.dccTrack = function (event, params) {
    params = params || {};
    try { if (cfg.META_PIXEL_ID && window.fbq) fbq('track', event, params); } catch (e) {}
    try {
      if (cfg.TIKTOK_PIXEL_ID && window.ttq && window.ttq.track) {
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

  /* ===================== BANNER XIN PHÉP COOKIE ===================== */
  var hasAnyId = cfg.META_PIXEL_ID || cfg.TIKTOK_PIXEL_ID || cfg.GA4_ID;

  var TXT = {
    vi: {
      msg: 'DCC dùng cookie để hiểu bạn cần gì, và cải thiện trải nghiệm tốt hơn cho bạn. Bạn đồng ý chứ?',
      ok: 'Đồng ý', no: 'Từ chối'
    },
    en: {
      msg: 'DCC uses cookies to understand what you need and improve your experience. Do you agree?',
      ok: 'Accept', no: 'Decline'
    },
    de: {
      msg: 'DCC verwendet Cookies, um zu verstehen, was Sie brauchen, und Ihr Erlebnis zu verbessern. Stimmen Sie zu?',
      ok: 'Zustimmen', no: 'Ablehnen'
    }
  };

  function curLang() {
    var l; try { l = localStorage.getItem('dcc_lang'); } catch (e) {}
    return (l === 'en' || l === 'de') ? l : 'vi';
  }

  function injectStyle() {
    if (document.getElementById('dcc-cc-style')) return;
    var css =
      '.dcc-cc{position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;max-width:440px;margin:0 auto;' +
      'background:linear-gradient(180deg,#10213e,#0c1a31);color:#e7eefb;border:1px solid rgba(232,200,120,.34);' +
      'border-radius:16px;padding:16px 18px 15px;box-shadow:0 18px 50px rgba(0,0,0,.5);' +
      'font-family:"Be Vietnam Pro",system-ui,sans-serif;font-size:13px;line-height:1.55;' +
      'transform:translateY(140%);opacity:0;transition:transform .5s cubic-bezier(.2,.8,.2,1),opacity .4s}' +
      '.dcc-cc.is-in{transform:translateY(0);opacity:1}' +
      '.dcc-cc__msg{margin:0 0 12px;color:#cdd9ee}' +
      '.dcc-cc__row{display:flex;gap:10px}' +
      '.dcc-cc__btn{flex:1;border:0;border-radius:10px;padding:10px 12px;font:inherit;font-weight:600;cursor:pointer;' +
      'font-size:13px;transition:filter .2s,background .2s}' +
      '.dcc-cc__ok{background:linear-gradient(180deg,#f0d28a,#e3b85f);color:#11223f;font-weight:700}' +
      '.dcc-cc__ok:hover{filter:brightness(1.06)}' +
      '.dcc-cc__no{background:transparent;color:#aebbd1;border:1px solid rgba(255,255,255,.18);flex:0 0 auto;padding:10px 16px}' +
      '.dcc-cc__no:hover{background:rgba(255,255,255,.06)}' +
      '@media(max-width:520px){.dcc-cc{left:12px;right:12px;bottom:12px}}';
    var st = document.createElement('style');
    st.id = 'dcc-cc-style'; st.textContent = css;
    document.head.appendChild(st);
  }

  function showBanner() {
    var t = TXT[curLang()];
    injectStyle();
    var box = document.createElement('div');
    box.className = 'dcc-cc';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Cookie');
    var p = document.createElement('p'); p.className = 'dcc-cc__msg'; p.textContent = t.msg;
    var row = document.createElement('div'); row.className = 'dcc-cc__row';
    var ok = document.createElement('button'); ok.className = 'dcc-cc__btn dcc-cc__ok'; ok.textContent = t.ok;
    var no = document.createElement('button'); no.className = 'dcc-cc__btn dcc-cc__no'; no.textContent = t.no;
    row.appendChild(ok); row.appendChild(no);
    box.appendChild(p); box.appendChild(row);
    document.body.appendChild(box);
    requestAnimationFrame(function () { box.classList.add('is-in'); });

    function close() { box.classList.remove('is-in'); setTimeout(function () { box.remove(); }, 500); }
    ok.addEventListener('click', function () { saveConsent('granted'); loadPixels(); close(); });
    no.addEventListener('click', function () { saveConsent('denied'); close(); });
  }

  function whenBodyReady(fn) {
    if (document.body) fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  // Quyết định ban đầu
  if (!hasAnyId) return;                       // chưa có ID nào → không làm gì
  var consent = readConsent();
  if (consent === 'granted') loadPixels();     // đã đồng ý trước đó → nạp luôn
  else if (consent === 'denied') { /* đã từ chối → im lặng */ }
  else whenBodyReady(showBanner);              // chưa quyết định → hiện banner
})();
