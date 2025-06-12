// menu-toggle.js
const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const galeriSection = document.querySelector('.galeri-kegiatan');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
  galeriSection.classList.toggle('nav-open');
});

