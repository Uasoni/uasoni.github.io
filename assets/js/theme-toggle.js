const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const key = 'my-site-theme';

const saved = localStorage.getItem(key);
if (saved) root.setAttribute('data-theme', saved);

toggle?.addEventListener('click', e => {
    e.preventDefault();
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(key, next);
});