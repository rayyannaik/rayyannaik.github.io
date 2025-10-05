// main.js

// ---------- scroll reveal ----------
const reveals = document.querySelectorAll('.reveal');
const obsOptions = { root: null, rootMargin: '0px', threshold: 0.12 };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, obsOptions);
reveals.forEach(r => revealObserver.observe(r));

// ---------- simple parallax for shapes on mouse move ----------
const hero = document.querySelector('.hero');
const shapes = document.querySelectorAll('.hero-shapes .shape');
if (hero && shapes.length) {
  hero.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = hero.getBoundingClientRect();
    const relX = (e.clientX - left) / width - 0.5;
    const relY = (e.clientY - top) / height - 0.5;
    shapes.forEach((shape, i) => {
      const depth = (i + 1) * 6;
      shape.style.transform = `translate(${relX * depth}px, ${relY * depth}px)`;
    });
  });

  hero.addEventListener('mouseleave', () => {
    shapes.forEach(s => s.style.transform = '');
  });
}


// ---------- More Details Page Logic ----------
function goBack() {
  window.history.back(); // does not reload, just goes back
}

// Auto play videos when loaded
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".detail-body video");
  videos.forEach(video => {
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.play().catch(() => {});
  });
});