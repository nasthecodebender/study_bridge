function initSignup() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    }

    const form = document.getElementById('signupForm');
    const statusMessage = document.getElementById('statusMessage');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Reset
        statusMessage.style.color = '#c62828';
        statusMessage.textContent = '';

        // Validation
        if (!email || !email.includes('@')) {
            statusMessage.textContent = 'Please enter a valid email address.';
            return;
        }
        if (password.length < 6) {
            statusMessage.textContent = 'Password must be at least 6 characters.';
            return;
        }
        if (password !== confirmPassword) {
            statusMessage.textContent = 'Passwords do not match.';
            document.getElementById('confirmPassword').value = '';
            document.getElementById('confirmPassword').focus();
            return;
        }

        // Success
        statusMessage.style.color = '#2e7d32';
        statusMessage.textContent = 'Login successful! Redirecting...';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1200);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSignup);
} else {
    initSignup();
}
