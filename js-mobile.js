const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// buat overlay otomatis kalau belum ada
let overlay = document.getElementById('overlay');
if (!overlay) {
  overlay = document.createElement('div');
  overlay.id = 'overlay';
  document.body.appendChild(overlay);
}

menuToggle.addEventListener('click', () => {
  const isActive = navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active', isActive);
  overlay.classList.toggle('active', isActive);
});

// klik overlay juga tutup menu
overlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  menuToggle.classList.remove('active');
  overlay.classList.remove('active');
});
