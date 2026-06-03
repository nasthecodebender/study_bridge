function initContact() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    }

    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const description = document.getElementById('description').value.trim();

        statusMessage.style.color = '#c62828';

        if (!email || !email.includes('@')) {
            statusMessage.textContent = 'Please enter a valid email address.';
            return;
        }
        if (!description) {
            statusMessage.textContent = 'Please write your feedback before sending.';
            return;
        }

        // Success
        statusMessage.style.color = '#2e7d32';
        statusMessage.textContent = '✓ Feedback sent!';

        form.reset();

        setTimeout(() => {
            statusMessage.textContent = '';
        }, 4000);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContact);
} else {
    initContact();
}
