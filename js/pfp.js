// Function to handle profile picture preview
const fileInput = document.getElementById('file');
const profilePicture = document.getElementById('profilePicture');

fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file) {
        // Check if the selected file is an image
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function (e) {
                profilePicture.src = e.target.result; // Update image src to the selected file
            };

            reader.readAsDataURL(file); // Convert image to base64 format
        }
    }
});
