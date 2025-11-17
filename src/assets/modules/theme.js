export function initThemeSelect(selectEl) {
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