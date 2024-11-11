document.getElementById("alertButton").addEventListener("click", function () {
    const password = document.getElementById("password").value;

    // Check if password length is valid (between 8 and 12 characters)
    if (password.length < 8 || password.length > 12) {
        Swal.fire({
            title: "Error!",
            text: "Password must be between 8 and 12 characters.",
            icon: "error",
            confirmButtonText: "OK",
            customClass: {
                confirmButton: 'custom-swal-confirm-button', // Ensure this class is applied to the button
            }
        });
        return;  // Stop further processing if validation fails
    }

    // Rest of the validation and form submission logic
});
