export function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      maybeShowBackToTop();
      scheduled = false;
    });
  }, { passive: true });
  maybeShowBackToTop();
}

export function maybeShowBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
  btn.classList.toggle('show', scrolled > 300);
}

export function initMobileNav() {
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.querySelector('.sidebar');
  const scrim = document.getElementById('scrim');
  const app = document.querySelector('.app');
  if (!toggle || !sidebar || !scrim || !app) return;
  const open = () => {
    sidebar.classList.add('open');
    scrim.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    sidebar.classList.remove('open');
    scrim.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', () => {
    if (window.innerWidth > 900) return;
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) close(); else open();
  });
  scrim.addEventListener('click', close);
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      close();
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
}