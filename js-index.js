// Slider galeri kegiatan di halaman utama
const galeriTrack = document.querySelector('.galeri-track');
const slides = document.querySelectorAll('.kegiatan-slide');
const btnLeft = document.querySelector('.galeri-btn.left');
const btnRight = document.querySelector('.galeri-btn.right');

let currentIndex = 0;

function updateSlide() {
  galeriTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

btnLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

btnRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});
