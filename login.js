document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Function to display error messages
    const showError = (input, message) => {
        const formGroup = input.parentElement;
        let error = formGroup.querySelector('small');
        if (!error) {
            error = document.createElement('small');
            error.classList.add("error-message");
            formGroup.appendChild(error);
        }
        error.innerText = message;
        input.style.borderColor = "red";
    };

    // Function to clear error messages
    const clearError = (input) => {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('small');
        if (error) {
            formGroup.removeChild(error);
        }
        input.style.borderColor = "";
    };

    // Login form submission handler
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Retrieve saved signup data from localStorage
        const savedData = JSON.parse(localStorage.getItem("signUpData"));

        // Validate inputs
        let isValid = true;

        if (!emailInput.value.includes("@")) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (!passwordInput.value) {
            showError(passwordInput, "Please enter your password.");
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        if (!isValid) return;

        // Authenticate user
        if (savedData && savedData.email === emailInput.value && savedData.password === passwordInput.value) {
            alert("Login successful!");
            window.location.href = "./employerDashboard.html"; // Redirect to employer dashboard
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
