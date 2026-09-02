(function() {
  function isTouchDevice() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
  }

  function setupMobileDropdowns(root) {
    var nav = root || document;
    var dropdowns = nav.querySelectorAll('.nav-links .dropdown');
    if (!dropdowns.length) return;

    dropdowns.forEach(function(drop) {
      var trigger = drop.querySelector(':scope > a');
      if (!trigger) return;

      // Prevent default navigation for parent items on touch
      trigger.addEventListener('click', function(e) {
        if (!isTouchDevice()) return; // desktop keeps default hover behavior
        // If already open and link has href not '#', allow navigation on second tap
        if (!drop.classList.contains('open')) {
          e.preventDefault();
          closeAll(dropdowns);
          drop.classList.add('open');
        } else {
          // Second click: if href is '#' or empty, keep open; else allow navigation
          var href = trigger.getAttribute('href');
          if (!href || href === '#') {
            e.preventDefault();
          }
        }
        e.stopPropagation();
      }, { passive: false });

      // Also allow tapping inside menu without closing instantly
      var menu = drop.querySelector(':scope > .dropdown-menu');
      if (menu) {
        menu.addEventListener('click', function(e) {
          e.stopPropagation();
        });
      }
    });

    // Close when clicking outside
    document.addEventListener('click', function() {
      closeAll(dropdowns);
    });

    // Close on ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeAll(dropdowns);
    });

    function closeAll(list) {
      list.forEach(function(el) { el.classList.remove('open'); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setupMobileDropdowns(document); });
  } else {
    setupMobileDropdowns(document);
  }
})();


// 移动端抽屉菜单头部的关闭按钮（✕）
(function () {
  document.addEventListener('click', function (e) {
    var closeBtn = e.target.closest && e.target.closest('.nav-close');
    if (!closeBtn) return;
    var nav = document.getElementById('primary-nav');
    var toggle = document.querySelector('.menu-toggle');
    var backdrop = document.querySelector('.nav-backdrop');
    if (nav) nav.classList.remove('show');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.hidden = true;
    document.body.classList.remove('body--nav-open');
  });
})();
