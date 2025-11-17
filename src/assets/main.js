import { state } from './modules/state.js';
import { renderTabs } from './modules/tabs.js';
import { showLab } from './modules/lab.js';
import { getInitialSlug, setupHashChange } from './modules/router.js';
import { initBackToTop, initMobileNav } from './modules/ui.js';
import { initThemeSelect } from './modules/theme.js';

async function loadLabs() {
  try {
    const res = await fetch('labs.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('labs.json not found');
    state.labs = await res.json();
    renderTabs(state);
    const initial = getInitialSlug(state);
    await showLab(state, initial);
    initBackToTop();
    initMobileNav();
    setupHashChange(state, showLab);
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) initThemeSelect(themeSelect);
  } catch {
    const el = document.getElementById('error');
    if (el) {
      el.textContent = 'Unable to load lab list.';
      el.hidden = false;
    }
  }
}

window.addEventListener('DOMContentLoaded', loadLabs);