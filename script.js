document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const setMenu = (open) => {
  navLinks.classList.toggle('is-open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};
menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
navLinks.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

// Scroll animations: each part of the page gets its own entrance.
// Items that share a parent come in one after another (--i = stagger step).
const ANIMS = [
  ['.section > .eyebrow, .section > h2', 'up'],
  ['.cards > .card', 'rise'],
  ['.more', 'up'],
  ['.work__item--feature', 'left'],
  ['.work__item:not(.work__item--feature)', 'zoom'],
  ['.steps > li', 'left'],
  ['.tools__label, .tools li', 'pop'],
  ['.mba', 'zoom'],
  ['.mba__cols > div', 'up'],
  ['.final > *', 'up'],
  ['.footer__inner > *', 'fade'],
];

const animated = [];
ANIMS.forEach(([selector, type]) => {
  const perParent = new Map();
  document.querySelectorAll(selector).forEach((el) => {
    const i = perParent.get(el.parentElement) || 0;
    perParent.set(el.parentElement, i + 1);
    el.classList.add('reveal', `reveal--${type}`);
    el.style.setProperty('--i', i);
    animated.push(el);
  });
});

// once an item has finished animating, hand it back its normal styles (hover lifts etc.)
const settle = (el) => {
  el.classList.remove('reveal', 'is-in', ...[...el.classList].filter((c) => c.startsWith('reveal--')));
  el.style.removeProperty('--i');
};

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-in');
      const done = (e) => {
        if (e.target !== el || e.propertyName !== 'opacity') return;
        el.removeEventListener('transitionend', done);
        settle(el);
      };
      el.addEventListener('transitionend', done);
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  animated.forEach((el) => io.observe(el));
} else {
  animated.forEach(settle);
}

// Show the floating WhatsApp button once the hero button is off screen
const fab = document.getElementById('fab');
const heroCta = document.getElementById('hero-cta');
if (fab && heroCta && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    fab.classList.toggle('is-visible', !entry.isIntersecting && entry.boundingClientRect.top < 0);
  }).observe(heroCta);
}
