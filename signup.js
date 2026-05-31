function signupUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    message.style.color = "red";

    // Empty fields check
    if (email === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        return;
    }

    // Password strength
    const strongPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!strongPassword.test(password)) {
        message.textContent =
            "Password must contain uppercase, lowercase, number and be at least 8 characters.";
        return;
    }

    // Get existing users
    let users = JSON.parse(localStorage.getItem("studybridgeUsers")) || [];

    // Check duplicate email
    const exists = users.find(user => user.email === email);

    if (exists) {
        message.textContent =
            "This email is already registered.";
        return;
    }

    // Save user
    users.push({
        email: email,
        password: password
    });

    localStorage.setItem(
        "studybridgeUsers",
        JSON.stringify(users)
    );

    message.style.color = "green";
    message.textContent =
        "Account created successfully! Redirecting...";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
}
document.getElementById("showPassword")
.addEventListener("change", function () {

    const password =
        document.getElementById("password");

    password.type =
        this.checked ? "text" : "password";
});
