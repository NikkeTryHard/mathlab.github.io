const state = { labs: [], active: null };

async function loadLabs() {
  try {
    const res = await fetch('labs.json', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('labs.json not found');
    }
    state.labs = await res.json();
    renderTabs();
    const initial = getInitialSlug();
    await showLab(initial);
    initBackToTop();
    initMobileNav();
  } catch {
    showError('Unable to load lab list.');
  }
}

function renderTabs() {
  const nav = document.getElementById('lab-tabs');
  nav.innerHTML = '';
  state.labs.forEach(lab => {
    const a = document.createElement('a');
    a.className = 'tab' + (lab.slug === state.active ? ' active' : '');
    a.innerHTML = `
      <span class="tab-title">${lab.title}</span>
      <span class="tab-updated" data-updated-ms="${lab.updatedAtMs || ''}" title="${formatDate(lab.updatedAt)}"></span>
    `;
    a.href = `#lab=${lab.slug}`;
    a.addEventListener('click', ev => {
      ev.preventDefault();
      routeTo(lab.slug);
    });
    nav.appendChild(a);
  });
  startRelativeTimer();
}

function getInitialSlug() {
  const hash = new URLSearchParams(location.hash.replace('#',''));
  const saved = localStorage.getItem('activeLab');
  const requested = hash.get('lab');
  const exists = slug => state.labs.some(l => l.slug === slug);
  if (requested && exists(requested)) {
    return requested;
  }
  if (saved && exists(saved)) {
    return saved;
  }
  return state.labs[0]?.slug;
}

async function showLab(slug) {
  if (!slug) {
    return;
  }
  try {
    const lab = state.labs.find(l => l.slug === slug);
    const res = await fetch(lab.href, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('lab not found');
    }
    const html = await res.text();
    const container = document.getElementById('content-container');
    container.innerHTML = html;
    state.active = slug;
    localStorage.setItem('activeLab', slug);
    updateActiveTab();
    await typesetMath();
    maybeShowBackToTop();
  } catch {
    showError('Unable to load lab content.');
  }
}

function updateActiveTab() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => {
    const slug = new URL(t.href).hash.split('=')[1];
    t.classList.toggle('active', slug === state.active);
  });
}

function routeTo(slug) {
  location.hash = `lab=${slug}`;
}

async function typesetMath() {
  try {
    if (window.MathJax && window.MathJax.typesetPromise) {
      await window.MathJax.typesetPromise();
    }
  } catch (e) {
    console.warn('MathJax typeset failed', e);
  }
}

function showError(msg) {
  const el = document.getElementById('error');
  el.textContent = msg;
  el.hidden = false;
}

window.addEventListener('hashchange', () => {
  const slug = getInitialSlug();
  showLab(slug);
  closeMobileNav();
});

window.addEventListener('DOMContentLoaded', loadLabs);

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) {
    return;
  }
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) {
      return;
    }
    scheduled = true;
    requestAnimationFrame(() => {
      maybeShowBackToTop();
      scheduled = false;
    });
  }, { passive: true });
  maybeShowBackToTop();
}

function maybeShowBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) {
    return;
  }
  const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
  btn.classList.toggle('show', scrolled > 300);
}

function initMobileNav() {
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.querySelector('.sidebar');
  const scrim = document.getElementById('scrim');
  const app = document.querySelector('.app');
  if (!toggle || !sidebar || !scrim) {
    return;
  }
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
    if (window.innerWidth > 900) {
      // Desktop: disable minimizing for stability
      return;
    } else {
      const isOpen = sidebar.classList.contains('open');
      if (isOpen) {
        close();
      } else {
        open();
      }
    }
  });
  scrim.addEventListener('click', close);
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      close();
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Theme select
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    initThemeSelect(themeSelect);
  }
}

function closeMobileNav() {
  const sidebar = document.querySelector('.sidebar');
  const scrim = document.getElementById('scrim');
  const toggle = document.getElementById('menuToggle');
  if (!sidebar || !scrim || !toggle) {
    return;
  }
  sidebar.classList.remove('open');
  scrim.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
}

function initThemeSelect(selectEl) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const resolve = setting => setting === 'system' ? (media.matches ? 'dark' : 'light') : setting;
  const apply = setting => {
    const theme = resolve(setting);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('themeSetting', setting);
    selectEl.value = setting;
  };
  const saved = localStorage.getItem('themeSetting') || 'system';
  apply(saved);
  selectEl.addEventListener('change', e => apply(e.target.value));
  media.addEventListener('change', () => {
    if ((localStorage.getItem('themeSetting') || 'system') === 'system') {
      apply('system');
    }
  });
}

function formatDate(iso) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return '';
  }
}

function formatDateCompact(iso) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
  } catch {
    return '';
  }
}

function formatRelative(ms) {
  if (!ms) return '';
  const diff = Date.now() - ms;
  const seconds = Math.max(0, Math.floor(diff / 1000));
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hr ago`;
  }
  const days = Math.floor(hours / 24);
  return `${days} d ago`;
}

function updateRelativeTimes() {
  const els = document.querySelectorAll('.tab-updated');
  els.forEach(el => {
    const ms = parseInt(el.dataset.updatedMs, 10);
    if (!ms) {
      el.textContent = '';
      return;
    }
    const iso = new Date(ms).toISOString();
    el.textContent = `${formatDateCompact(iso)}, ${formatRelative(ms)}`;
  });
}

let relTimer = null;
function startRelativeTimer() {
  if (relTimer) {
    clearInterval(relTimer);
  }
  updateRelativeTimes();
  relTimer = setInterval(updateRelativeTimes, 60000);
}