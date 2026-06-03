document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Simple validation
        if (!username || !password) {
            errorMessage.textContent = "Please fill in all fields.";
            errorMessage.style.color = "#ef4444";
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = "Password must be at least 6 characters.";
            errorMessage.style.color = "#ef4444";
            return;
        }

        // Simulate successful login
        errorMessage.textContent = "Login successful! Redirecting...";
        errorMessage.style.color = "#22c55e";

        // Redirect to books.html after short delay
        setTimeout(function() {
            window.location.href = "books.html";
        }, 800);
    });
});
