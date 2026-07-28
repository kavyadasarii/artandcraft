 document.querySelectorAll('.toggle-visibility').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      const icon = btn.querySelector('i');
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      icon.classList.toggle('fa-eye');
      icon.classList.toggle('fa-eye-slash');
      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  });

  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Hook up to your real login endpoint here.
    alert('Logged in (demo only — connect this form to your backend).');
  });

document.querySelectorAll('.toggle-visibility').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.target);
      const icon = btn.querySelector('i');
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      icon.classList.toggle('fa-eye');
      icon.classList.toggle('fa-eye-slash');
      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  });

  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Hook up to your real sign-up endpoint here.
    alert('Account created (demo only — connect this form to your backend).');
  });