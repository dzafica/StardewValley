function toggleTheme() {
    // Get the current theme by checking the href attribute of the stylesheet link
    const themeLink = document.getElementById('themeStylesheet');
    const currentHref = themeLink.getAttribute('href');

    // Debugging: Log current href
    console.log('Current Theme:', currentHref);

    if (currentHref.includes('registration_light.css')) {
        // Switch to dark theme
        themeLink.setAttribute('href', 'css/registration_dark.css');
        document.getElementById('themeToggle').textContent = 'Light Mode';
    } else {
        // Switch back to light theme
        themeLink.setAttribute('href', 'css/registration_light.css');
        document.getElementById('themeToggle').textContent = 'Dark Mode';
    }

    // Debugging: Log new href after change
    console.log('New Theme:', themeLink.getAttribute('href'));
}

