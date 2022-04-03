const themeSwitcher = document.querySelector('.theme-switcher');
const input = document.querySelector('input[type="checkbox"]');
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        input.checked = true;
    }
}

const themeSwitch = () => {
    if(document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

themeSwitcher.addEventListener('click', themeSwitch);
themeCheck();