const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

var currentTheme = root.style.getPropertyValue('--color-scheme') || 'dark';
if (root.style.getPropertyValue('--color-scheme-auto') === 'true') {
    currentTheme = root.style.getPropertyValue('--color-scheme') || 'dark';
}

toggle.addEventListener('click', () => {
    if (currentTheme === 'dark') {
        root.style.setProperty('--color-scheme', 'light');
        root.style.setProperty('--color-scheme-auto', 'false');
    } else {
        root.style.setProperty('--color-scheme', 'dark');
        root.style.setProperty('--color-scheme-auto', 'false');
    }
});