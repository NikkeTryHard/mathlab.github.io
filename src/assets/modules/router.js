export function getInitialSlug(state) {
  const hash = new URLSearchParams(location.hash.replace('#',''));
  const saved = localStorage.getItem('activeLab');
  const requested = hash.get('lab');
  const exists = slug => state.labs.some(l => l.slug === slug);
  if (requested && exists(requested)) return requested;
  if (saved && exists(saved)) return saved;
  return state.labs[0]?.slug;
}

export function setupHashChange(state, showLab) {
  window.addEventListener('hashchange', () => {
    const slug = getInitialSlug(state);
    showLab(state, slug);
    const nav = document.querySelector('.sidebar');
    const scrim = document.getElementById('scrim');
    const toggle = document.getElementById('menuToggle');
    if (nav && scrim && toggle) {
      nav.classList.remove('open');
      scrim.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}