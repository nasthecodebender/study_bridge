document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    const statusMessage = document.getElementById("statusMessage");

    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Validation
        if (!email || !password || !confirmPassword) {
            statusMessage.textContent = "Please fill in all fields.";
            statusMessage.style.color = "#ef4444";
            return;
        }

        // Basic email validation
        if (!email.includes("@") || !email.includes(".")) {
            statusMessage.textContent = "Please enter a valid email address.";
            statusMessage.style.color = "#ef4444";
            return;
        }

        if (password.length < 6) {
            statusMessage.textContent = "Password must be at least 6 characters.";
            statusMessage.style.color = "#ef4444";
            return;
        }

        if (password !== confirmPassword) {
            statusMessage.textContent = "Passwords do not match.";
            statusMessage.style.color = "#ef4444";
            return;
        }

        // Simulate successful signup
        statusMessage.textContent = "Account created successfully! Redirecting...";
        statusMessage.style.color = "#22c55e";

        // Redirect to index.html after short delay
        setTimeout(function() {
            window.location.href = "index.html";
        }, 800);
    });
});
