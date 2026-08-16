(function(){

  var THEME_KEY = 'artcraft-theme';
  var RTL_KEY = 'artcraft-rtl';
  var body = document.body;
  var themeBtn = document.getElementById('themeToggle');
  var langBtn = document.getElementById('langToggle');

  function applyTheme(theme){
    var isDark = theme === 'dark';
    body.classList.toggle('dark', isDark);
    if(themeBtn){
      themeBtn.innerHTML = isDark
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
      themeBtn.setAttribute('aria-pressed', String(isDark));
    }
  }
  function applyDir(isRtl){
    body.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    if(langBtn){
      langBtn.setAttribute('aria-label', isRtl ? 'Switch to left-to-right' : 'Switch to right-to-left');
      langBtn.setAttribute('aria-pressed', String(isRtl));
    }
  }

  applyTheme(localStorage.getItem(THEME_KEY) || 'light');
  applyDir(localStorage.getItem(RTL_KEY) === 'true');

  if(themeBtn){
    themeBtn.addEventListener('click', function(){
      var next = body.classList.contains('dark') ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }
  if(langBtn){
    langBtn.addEventListener('click', function(){
      var next = body.getAttribute('dir') !== 'rtl';
      applyDir(next);
      localStorage.setItem(RTL_KEY, String(next));
    });
  }
  window.addEventListener('storage', function(e){
    if(e.key === THEME_KEY){ applyTheme(e.newValue || 'light'); }
    if(e.key === RTL_KEY){ applyDir(e.newValue === 'true'); }
  });

  document.querySelectorAll('.nav-dropdown > .nav-drop-btn').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var parent = btn.closest('.nav-dropdown');
      var isOpen = parent.classList.contains('open');
      document.querySelectorAll('.nav-dropdown.open').forEach(function(d){
        d.classList.remove('open');
        d.querySelector('.nav-drop-btn').setAttribute('aria-expanded', 'false');
      });
      if(!isOpen){
        parent.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
  document.addEventListener('click', function(){
    document.querySelectorAll('.nav-dropdown.open').forEach(function(d){
      d.classList.remove('open');
      d.querySelector('.nav-drop-btn').setAttribute('aria-expanded', 'false');
    });
  });

  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  function closeMobileNav(){
    if(!navLinks || !navToggle) return;
    navLinks.classList.remove('mobile-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  function openMobileNav(){
    if(!navLinks || !navToggle) return;
    navLinks.classList.add('mobile-open');
    navToggle.setAttribute('aria-expanded', 'true');
  }
  if(navToggle && navLinks){
    navToggle.addEventListener('click', function(e){
      e.stopPropagation();
      navLinks.classList.contains('mobile-open') ? closeMobileNav() : openMobileNav();
    });
    navLinks.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', closeMobileNav);
    });
    document.addEventListener('click', function(e){
      if(!navLinks.classList.contains('mobile-open')) return;
      if(navLinks.contains(e.target) || navToggle.contains(e.target)) return;
      closeMobileNav();
    });
    window.addEventListener('resize', function(){
      if(window.innerWidth > 1023){ closeMobileNav(); }
    });
  }

  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el){ observer.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in-view'); });
  }

  var form = document.getElementById('contactForm');
  var successMsg = document.getElementById('formSuccess');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var valid = Array.prototype.every.call(
        form.querySelectorAll('[required]'),
        function(field){ return field.checkValidity(); }
      );
      if(!valid) return;
      successMsg.classList.add('show');
      form.reset();
      setTimeout(function(){ successMsg.classList.remove('show'); }, 6000);
    });
  }

  // ============================================
  // Shop by category — Collections
  // (product cards live directly in the HTML now;
  //  this just shows/hides them by category)
  // ============================================

  var categoryTabs = document.getElementById('categoryTabs');
  var productsGrid = document.getElementById('productsGrid');
  var productCards = productsGrid ? productsGrid.querySelectorAll('.product-card') : [];
  var actionToast = document.getElementById('actionToast');
  var actionToastMsg = document.getElementById('actionToastMsg');
  var toastTimer = null;

  function showToast(message){
    if(!actionToast || !actionToastMsg) return;
    actionToastMsg.textContent = message;
    actionToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ actionToast.classList.remove('show'); }, 2500);
  }

  function filterProducts(categoryId){
    var visibleIndex = 0;
    productCards.forEach(function(card){
      var matches = categoryId === 'all' || card.getAttribute('data-category') === categoryId;
      if(matches){
        card.style.display = '';
        card.classList.remove('in');
        (function(el, delay){
          setTimeout(function(){ el.classList.add('in'); }, 20 + delay);
        })(card, (visibleIndex % 10) * 50);
        visibleIndex++;
      } else {
        card.style.display = 'none';
        card.classList.remove('in');
      }
    });
  }

  if(productsGrid){
    productsGrid.addEventListener('click', function(e){
      var card = e.target.closest('.product-card');
      if(!card) return;
      var name = card.getAttribute('data-name');

      if(e.target.closest('.add-to-cart-btn')){
        showToast(name + ' added to cart');
      } else if(e.target.closest('.buy-now-btn')){
        showToast('Order started for ' + name + ' — our team will confirm shortly.');
      }
    });
  }

  if(categoryTabs){
    var tabs = categoryTabs.querySelectorAll('.category-tab');
    tabs.forEach(function(tab){
      tab.addEventListener('click', function(){
        tabs.forEach(function(t){
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        filterProducts(tab.getAttribute('data-category'));
      });
    });

    var initialTab = categoryTabs.querySelector('.category-tab.active') || tabs[0];
    if(initialTab){ filterProducts(initialTab.getAttribute('data-category')); }
  }

})();