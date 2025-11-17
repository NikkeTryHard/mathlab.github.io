import { updateActiveTab } from './tabs.js';

export async function showLab(state, slug) {
  if (!slug) return;
  try {
    const lab = state.labs.find(l => l.slug === slug);
    const res = await fetch(lab.href, { cache: 'no-store' });
    if (!res.ok) throw new Error('lab not found');
    const html = await res.text();
    const container = document.getElementById('content-container');
    if (container) container.innerHTML = html;
    state.active = slug;
    localStorage.setItem('activeLab', slug);
    updateActiveTab(state);
    await typesetMath();
  } catch {
    const el = document.getElementById('error');
    if (el) {
      el.textContent = 'Unable to load lab content.';
      el.hidden = false;
    }
  }
}

export async function typesetMath() {
  try {
    if (window.MathJax && window.MathJax.typesetPromise) {
      await window.MathJax.typesetPromise();
    }
  } catch {}
}