// StudyBridge JavaScript

document.addEventListener("DOMContentLoaded", () => {

    // Login Form Validation
    const loginForm = document.querySelector("form");

    if (window.location.pathname.includes("login")) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.querySelector('input[type="email"]').value;
            const password = document.querySelector('input[type="password"]').value;

            if (email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            alert("Login successful!");
        });
    }

    // Signup Form Validation
    if (window.location.pathname.includes("signup")) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.querySelector('input[type="email"]').value;
            const password = document.querySelector('input[type="password"]').value;

            if (email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }

            alert("Account created successfully!");
        });
    }

    // Search Books
    const searchInput = document.querySelector("#searchInput");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const filter = this.value.toLowerCase();
            const books = document.querySelectorAll(".book-card");

            books.forEach(book => {
                const text = book.textContent.toLowerCase();

                if (text.includes(filter)) {
                    book.style.display = "block";
                } else {
                    book.style.display = "none";
                }
            });
        });
    }

});
