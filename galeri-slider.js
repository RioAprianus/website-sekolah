const galeriTrack = document.querySelector('.galeri-track');
const galeriSlides = document.querySelectorAll('.kegiatan-slide');

const galeriLeft = document.querySelector('.galeri-btn.left');
const galeriRight = document.querySelector('.galeri-btn.right');

let galeriIndex = 0;

function updateGaleri() {
  const slideWidth = galeriSlides[0].clientWidth;
  galeriTrack.style.transform = `translateX(-${galeriIndex * slideWidth}px)`;
}

// Event klik tombol kanan
galeriRight.addEventListener('click', () => {
  if (galeriIndex < galeriSlides.length - 1) {
    galeriIndex++;
    updateGaleri();
  }
});

// Event klik tombol kiri
galeriLeft.addEventListener('click', () => {
  if (galeriIndex > 0) {
    galeriIndex--;
    updateGaleri();
  }
});

// Ganti gambar otomatis dengan animasi tapi **berhenti di gambar terakhir**
const autoSlideInterval = 5000; // 5 detik

const autoSlide = setInterval(() => {
  if (galeriIndex < galeriSlides.length - 1) {
    galeriIndex++;
    updateGaleri();
  } else {
    // jika sudah gambar terakhir, stop auto slide
    clearInterval(autoSlide);
  }
}, autoSlideInterval);

window.addEventListener('resize', updateGaleri);
