const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");
const form = document.getElementById("signupForm");

// Validation functions
function validateEmail(email) {
    return email.length > 3 && email.includes("@") && email.includes(".");
}

function validatePassword(password) {
    return password.length > 8;
}

// Live validation
function updateFeedback() {
    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
        feedback.textContent = "All good to go!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Please enter a valid email and password.";
        feedback.style.color = "red";
    }
}

// Trigger on typing
emailInput.addEventListener("input", updateFeedback);
passwordInput.addEventListener("input", updateFeedback);

// Form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop normal form submit

    const confirmed = confirm("Are you sure you want to submit?");

    if (confirmed) {
        alert("Successful signup!");
    } else {
        // Reload the page & clear inputs
        window.location.reload();
    }
});
