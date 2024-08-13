
// JavaScript untuk mengaktifkan mode gelap
const themeToggle = document.getElementById('themeToggle');
const themeToggleText = document.getElementById('themeToggleText');

themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-bs-theme') === 'dark') {
        document.body.setAttribute('data-bs-theme', 'light');
        themeToggleText.textContent = 'Dark Mode';
        themeToggle.querySelector('i').classList.remove('fa-sun-o');
        themeToggle.querySelector('i').classList.add('fa-moon-o');
    } else {
        document.body.setAttribute('data-bs-theme', 'dark');
        themeToggleText.textContent = 'Light Mode';
        themeToggle.querySelector('i').classList.remove('fa-moon-o');
        themeToggle.querySelector('i').classList.add('fa-sun-o');
    }
});
    