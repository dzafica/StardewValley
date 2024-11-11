document.getElementById("alertButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name") ? document.getElementById("name").value : ""; // Check if name exists

    let formIsValid = true; // Assume form is valid

    // Clear existing asterisks
    document.getElementById("username-required").textContent = "";
    document.getElementById("password-required").textContent = "";

    // Check if required fields are filled
    if (username === "") {
        document.getElementById("username-required").textContent = "*";
        formIsValid = false; // Mark form as invalid
    }
    if (password === "") {
        document.getElementById("password-required").textContent = "*";
        formIsValid = false; // Mark form as invalid
    }

    // If form is valid, show the success SweetAlert
    if (formIsValid) {
        Swal.fire({
            title: "Congratulations!",
            text: "Registration was successful!",
            icon: "success",
            allowOutsideClick: false, // Prevents closing by clicking outside
            confirmButtonText: "OK",
            customClass: {
                popup: 'custom-swal-popup', // Custom class for the alert box
                confirmButton: 'custom-swal-confirm-button', // Custom class for the confirm button
                title: 'custom-swal-title', // Custom class for the title
                text: 'custom-swal-text' // Custom class for the text
            }
        }).then(() => {
            // Clear the input fields after confirmation
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            if (document.getElementById("name")) {
                document.getElementById("name").value = ""; // Clear name field if it exists
            }
        });
    } else {
        // Show error SweetAlert if fields are empty
        Swal.fire({
            title: "Error!",
            text: "Please fill in all required fields.",
            icon: "error",
            confirmButtonText: "OK",
            customClass: {
                popup: 'custom-swal-popup-error', // Custom class for the alert box
                confirmButton: 'custom-swal-confirm-button-error', // Custom class for the confirm button
                title: 'custom-swal-title-error', // Custom class for the title
                text: 'custom-swal-text-error', // Custom class for the text
            }
        });
    }
});
