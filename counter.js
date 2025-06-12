document.addEventListener('DOMContentLoaded', () => {
  const statBoxes = document.querySelectorAll('.stat-box');

  const options = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // cek apakah stat-number TIDAK punya .no-counter
        const statNumber = entry.target.querySelector('.stat-number');

        if (!statNumber.classList.contains('no-counter')) {
          const target = +statNumber.dataset.target;
          const suffix = statNumber.dataset.suffix || '';
          let count = 0;
          const step = Math.ceil(target / 40);

          const counter = setInterval(() => {
            count += step;
            if (count >= target) {
              statNumber.textContent = target + suffix;
              clearInterval(counter);
            } else {
              statNumber.textContent = count + suffix;
            }
          }, 30);
        }

        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  statBoxes.forEach(box => {
    observer.observe(box);
  });
});
