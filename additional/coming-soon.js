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

  var STORAGE_KEY = 'artcraft-launch-date';
  var launch = localStorage.getItem(STORAGE_KEY);
  if(!launch){
    launch = String(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days out
    localStorage.setItem(STORAGE_KEY, launch);
  }
  var target = parseInt(launch, 10);

  var els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs')
  };

  function pad(n){ return String(n).padStart(2, '0'); }

  function tick(){
    var diff = Math.max(0, target - Date.now());
    if(els.days) els.days.textContent = pad(Math.floor(diff / 86400000));
    if(els.hours) els.hours.textContent = pad(Math.floor((diff % 86400000) / 3600000));
    if(els.mins) els.mins.textContent = pad(Math.floor((diff % 3600000) / 60000));
    if(els.secs) els.secs.textContent = pad(Math.floor((diff % 60000) / 1000));
    if(diff <= 0){ clearInterval(timer); }
  }
  tick();
  var timer = setInterval(tick, 1000);

  var form = document.getElementById('notifyForm');
  var success = document.getElementById('notifySuccess');
  var input = document.getElementById('notifyEmail');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(!input.checkValidity()){ return; }
      success.classList.add('show');
      form.reset();
    });
  }

})();
