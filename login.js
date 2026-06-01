const VALID_USERNAME = 'admin';
const VALID_PASSWORD = '123456';

function initLogin() {
    // Hamburger nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Login form handler
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;

            if (username === VALID_USERNAME && password === VALID_PASSWORD) {
                errorMessage.style.color = '#2e7d32';
                errorMessage.textContent = 'Login successful! Redirecting...';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                errorMessage.style.color = '#c62828';
                errorMessage.textContent = 'Invalid username or password.';
                document.getElementById('password').value = '';
                document.getElementById('password').focus();
            }
        });
    }
}

// Works whether the script is in <head> or end of <body>
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogin);
} else {
    initLogin();
}
