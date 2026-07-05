// Forest Sage (light) <-> Midnight Jungle (dark) theme toggle
(function () {
  const body = document.body;
  const switchBtn = document.getElementById('theme-switch');

  function applyIcon() {
    const icon = switchBtn ? switchBtn.querySelector('i') : null;
    if (!icon) return;
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }

  // Restore saved preference on load
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    body.classList.add('dark-mode');
  }
  applyIcon();

  // Toggle on click
  if (switchBtn) {
    switchBtn.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
      applyIcon();
    });
  }
})();
