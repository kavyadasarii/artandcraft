(function(){

  // ---- Scroll reveal ----
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

  // ---- Countdown timer ----
  // Launch date persisted in localStorage so it doesn't reset on refresh.
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

  // ---- Notify form (front-end only — wire to your email/CRM endpoint) ----
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
