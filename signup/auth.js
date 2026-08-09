(function () {
  'use strict';

  var THEME_KEY = 'artcraft-theme';
  var DIR_KEY = 'artcraft-dir';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
    try { localStorage.setItem(DIR_KEY, dir); } catch (e) {}
    var btn = document.getElementById('dirToggle');
    if (btn) {
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to left-to-right' : 'Switch to right-to-left');
    }
  }

  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) {}
    var preferred = stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(preferred);
  }

  function initDirection() {
    var stored = null;
    try { stored = localStorage.getItem(DIR_KEY); } catch (e) {}
    applyDirection(stored || 'ltr');
  }

  function setupThemeToggle() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  function setupDirToggle() {
    var btn = document.getElementById('dirToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
      applyDirection(current === 'rtl' ? 'ltr' : 'rtl');
    });
  }

  function setupPasswordToggles() {
    document.querySelectorAll('.toggle-visibility').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var input = document.getElementById(btn.dataset.target);
        if (!input) return;
        var icon = btn.querySelector('i');
        var isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        if (icon) {
          icon.classList.toggle('fa-eye');
          icon.classList.toggle('fa-eye-slash');
        }
        btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
      });
    });
  }

  function setupForms() {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Logged in (demo only — connect this form to your backend).');
      });
    }

    var signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Account created (demo only — connect this form to your backend).');
        window.location.href = 'login.html';
      });
    }
  }

  initTheme();
  initDirection();

  document.addEventListener('DOMContentLoaded', function () {
    setupThemeToggle();
    setupDirToggle();
    setupPasswordToggles();
    setupForms();
  });
})();
