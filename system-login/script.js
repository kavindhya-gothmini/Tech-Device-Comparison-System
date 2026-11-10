function togglePassword() {

    const password = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (password.type === "password") {

        password.type = "text";
        eyeIcon.classList.replace("bi-eye", "bi-eye-slash");

    } else {

        password.type = "password";
        eyeIcon.classList.replace("bi-eye-slash", "bi-eye");

    }
}