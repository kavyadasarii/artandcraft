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

})();
