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

  // Shares the same storage keys as the rest of the site, so the
  // theme/direction chosen here stays in sync with home2.html etc.
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

  var form = document.getElementById('bookingForm');
  var successMsg = document.getElementById('bookingSuccess');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var valid = Array.prototype.every.call(
        form.querySelectorAll('[required]'),
        function(field){ return field.checkValidity(); }
      );
      if(!valid){
        form.reportValidity();
        return;
      }
      successMsg.classList.add('show');
      form.reset();
      setTimeout(function(){ successMsg.classList.remove('show'); }, 6000);
      successMsg.scrollIntoView({ behavior:'smooth', block:'nearest' });
    });
  }

})();
