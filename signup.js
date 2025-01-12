document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registrationForm");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const companyNameInput = document.getElementById("company-name");
    const companyTypeInput = document.getElementById("company-type");
    const emailInput = document.getElementById("email");
    const contactInput = document.getElementById("contact-no");
    const panNoInput = document.getElementById("pan-no");
    const termsInput = document.getElementById("terms");

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

    // Function to validate a single field
    const validateField = (input, validationFn, errorMessage) => {
        if (!validationFn(input.value)) {
            showError(input, errorMessage);
            return false;
        } else {
            clearError(input);
            return true;
        }
    };

    // Function to validate password match
    const validatePasswordMatch = () => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, "Passwords do not match.");
            return false;
        } else {
            clearError(confirmPasswordInput);
            return true;
        }
    };

    // Real-time validation for specific fields
    registerForm.addEventListener("input", (event) => {
        const { id, value } = event.target;
        switch (id) {
            case "email":
                validateField(emailInput, (v) => v.includes("@"), "Please enter a valid email address.");
                break;
            case "contact-no":
                validateField(contactInput, (v) => /^[0-9]{10}$/.test(v), "Enter a valid 10-digit contact number.");
                break;
            case "pan-no":
                validateField(panNoInput, (v) => /^[A-Z0-9]{10}$/.test(v), "Enter a valid PAN number.");
                break;
            case "password":
            case "confirm-password":
                validatePasswordMatch();
                break;
        }
    });

    // Form submission logic
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        let formIsValid = true;

        // Validate all fields
        formIsValid &= validateField(emailInput, (v) => v.includes("@"), "Please enter a valid email address.");
        formIsValid &= validateField(contactInput, (v) => /^[0-9]{10}$/.test(v), "Enter a valid 10-digit contact number.");
        formIsValid &= validateField(panNoInput, (v) => /^[A-Z0-9]{10}$/.test(v), "Enter a valid PAN number.");
        formIsValid &= validatePasswordMatch();
        formIsValid &= termsInput.checked;

        if (!termsInput.checked) {
            showError(termsInput, "You must agree to the terms and conditions.");
        } else {
            clearError(termsInput);
        }

        if (formIsValid) {
            // Collect data
            const formData = {
                companyName: companyNameInput.value,
                companyType: companyTypeInput.value,
                email: emailInput.value,
                contact: contactInput.value,
                panNo: panNoInput.value,
                password: passwordInput.value,
                terms: termsInput.checked
            };

            // Save data to localStorage
            localStorage.setItem("signUpData", JSON.stringify(formData));
            alert("Registration successful! Data saved to localStorage.");
            registerForm.reset(); // Reset the form
        } else {
            alert("Please correct the errors before submitting.");
        }
    });
});
