import { formatDateCompact, formatRelative, startRelativeTimer } from './time.js';

export function renderTabs(state) {
  const nav = document.getElementById('lab-tabs');
  if (!nav) return;
  nav.innerHTML = '';
  state.labs.forEach(lab => {
    const a = document.createElement('a');
    a.className = 'tab' + (lab.slug === state.active ? ' active' : '');
    a.href = `#lab=${lab.slug}`;
    const iso = lab.updatedAt ? new Date(lab.updatedAt).toISOString() : '';
    const ms = lab.updatedAtMs || '';
    a.innerHTML = `
      <span class="tab-title">${lab.title}</span>
      <span class="tab-updated" data-updated-ms="${ms}" title="${iso ? new Date(iso).toLocaleString() : ''}">
        ${iso ? `${formatDateCompact(iso)}, ${formatRelative(ms)}` : ''}
      </span>
    `;
    a.addEventListener('click', ev => {
      ev.preventDefault();
      const slug = lab.slug;
      location.hash = `lab=${slug}`;
    });
    nav.appendChild(a);
  });
  startRelativeTimer();
}

export function updateActiveTab(state) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => {
    const raw = new URL(t.href).hash.split('=')[1] || '';
    const slug = decodeURIComponent(raw);
    t.classList.toggle('active', slug === state.active);
  });
}