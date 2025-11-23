// pause animation when chevron is not visible to save cycles and avoid flashing offscreen
document.addEventListener('DOMContentLoaded', () => {
  const chevron = document.querySelector('.chevron-icon');
  if (!chevron) return;

  // Pause by default if not visible (safeguard)
  chevron.style.animationPlayState = 'paused';

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        chevron.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
    }, { threshold: 0.5 });
    io.observe(chevron);
  } else {
    // fallback: start animation after load
    chevron.style.animationPlayState = 'running';
  }
});