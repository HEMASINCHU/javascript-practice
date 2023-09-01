const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
form.addEventListener("submit", function (e) {
  let hasError = false;

  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  if (username.value.trim() === "") {
    usernameError.textContent = "Username is required";
    hasError = true;
  }
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    hasError = true;
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required";
    hasError = true;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long";
    hasError = true;
  } else if (password.value.length > 20) {
    passwordError.textContent = "Password cannot exceed 20 characters";
    hasError = true;
  }
  if (confirmPassword.value.trim() === "") {
    confirmPasswordError.textContent = "Please confirm your password";
    hasError = true;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    hasError = true;
  }

  if (hasError) {
    e.preventDefault();
  }
});
