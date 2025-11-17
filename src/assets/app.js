const state = { labs: [], active: null };

async function loadLabs() {
  try {
    const res = await fetch('labs.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('labs.json not found');
    state.labs = await res.json();
    renderTabs();
    const initial = getInitialSlug();
    await showLab(initial);
  } catch (e) {
    showError('Unable to load lab list.');
  }
}

function renderTabs() {
  const nav = document.getElementById('lab-tabs');
  nav.innerHTML = '';
  state.labs.forEach(lab => {
    const a = document.createElement('a');
    a.className = 'tab' + (lab.slug === state.active ? ' active' : '');
    a.textContent = lab.title;
    a.href = `#lab=${lab.slug}`;
    a.addEventListener('click', ev => {
      ev.preventDefault();
      routeTo(lab.slug);
    });
    nav.appendChild(a);
  });
}

function getInitialSlug() {
  const hash = new URLSearchParams(location.hash.replace('#',''));
  const saved = localStorage.getItem('activeLab');
  const requested = hash.get('lab');
  const exists = slug => state.labs.some(l => l.slug === slug);
  if (requested && exists(requested)) return requested;
  if (saved && exists(saved)) return saved;
  return state.labs[0]?.slug;
}

async function showLab(slug) {
  if (!slug) return;
  try {
    const lab = state.labs.find(l => l.slug === slug);
    const res = await fetch(lab.href, { cache: 'no-store' });
    if (!res.ok) throw new Error('lab not found');
    const html = await res.text();
    const container = document.getElementById('content-container');
    container.innerHTML = html;
    state.active = slug;
    localStorage.setItem('activeLab', slug);
    updateActiveTab();
    await typesetMath();
  } catch (e) {
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
  if (window.MathJax && window.MathJax.typesetPromise) {
    await window.MathJax.typesetPromise();
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
});

window.addEventListener('DOMContentLoaded', loadLabs);