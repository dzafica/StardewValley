document.getElementById("alertButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    let missingFields = [];

    // Check if required fields are filled
    if (username === "") missingFields.push("Username");
    if (password === "") missingFields.push("Password");
    if (name === "") missingFields.push("Name");
    if (email === "") missingFields.push("Email");

    // Check if password is at least 8 characters long
    if (password.length < 8) {
        Swal.fire({
            title: "Password too short!",
            text: "Password must be at least 8 characters long.",
            icon: "error",
            confirmButtonText: "OK"
        });
        return;  // Exit the function if the password is too short
    }

    // Check if the email contains "@" and something before and after it
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

    if (!emailPattern.test(email)) {
        Swal.fire({
            title: "Invalid Email Format!",
            text: "Please enter a valid email address.",
            icon: "error",
            confirmButtonText: "OK"
        });
        return;  // Exit the function if the email format is not valid
    }

    // If any required fields are missing, show the pop-up
    if (missingFields.length > 0) {
        Swal.fire({
            title: "Missing Fields!",
            text: `Please fill in the following required fields: ${missingFields.join(", ")}`,
            icon: "error",
            confirmButtonText: "OK"
        });
    } else {
        // If all required fields are filled, proceed with the registration process
        Swal.fire({
            title: "Congratulations!",
            text: "Registration was successful!",
            icon: "success",
            allowOutsideClick: false,
            confirmButtonText: "Login"
        }).then(() => {
            // Redirect to login page
            window.location.href = "login.html";

            // Clear the input fields after confirmation (optional, as you are redirecting)
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("email").value = "";
            document.getElementById("name").value = "";
            document.getElementById("lastname").value = "";

            // Clear the radio buttons (gender selection)
            const genderRadios = document.getElementsByName("gender");
            for (let i = 0; i < genderRadios.length; i++) {
                genderRadios[i].checked = false;
            }
        });
    }
});
