// Custom cursor
const dot = document.getElementById('cursorDot');
if (dot) {
  window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => { dot.style.width = '26px'; dot.style.height = '26px'; });
    el.addEventListener('mouseleave', () => { dot.style.width = '10px'; dot.style.height = '10px'; });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => io.observe(el));

// Header hide/show on scroll
let lastScroll = 0;
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (!header) return;

  const current = window.scrollY;
  if (current > 140 && current > lastScroll) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastScroll = current;
});

// Chat launcher placeholder
const launcher = document.getElementById('chatLauncher');
launcher?.addEventListener('click', () => {
  alert('This is where the AI Concierge widget opens — wired up in Phase 3.');
});
