document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('login-modal');
  const loginBtn = document.getElementById('pieslegties');
  const closeBtn = document.querySelector('.close');
  const tabBtns = document.querySelectorAll('.tab-btn');

  loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      // Add active class to clicked button and corresponding content
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // Prevent form submission (since this is just a simulation)
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Malacis! Tu esi pieslēdzies! 👍');
      modal.style.display = 'none';
    });
  });
});