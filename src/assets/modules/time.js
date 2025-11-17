let relTimer = null;

export function formatDateCompact(iso) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
  } catch {
    return '';
  }
}

export function formatRelative(ms) {
  if (!ms) return '';
  const diff = Date.now() - ms;
  const seconds = Math.max(0, Math.floor(diff / 1000));
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  return `${days} d ago`;
}

export function updateRelativeTimes() {
  const els = document.querySelectorAll('.tab-updated');
  els.forEach(el => {
    const ms = parseInt(el.dataset.updatedMs || '', 10);
    if (!ms) {
      el.textContent = '';
      return;
    }
    const iso = new Date(ms).toISOString();
    el.textContent = `${formatDateCompact(iso)}, ${formatRelative(ms)}`;
  });
}

export function startRelativeTimer() {
  if (relTimer) clearInterval(relTimer);
  updateRelativeTimes();
  relTimer = setInterval(updateRelativeTimes, 60000);
}