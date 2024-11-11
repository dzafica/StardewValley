function toggleTheme() {
    // Get the current theme by checking the href attribute of the stylesheet link
    const themeLink = document.getElementById('themeStylesheet');
    const currentHref = themeLink.getAttribute('href');
    console.log('Current Theme:', currentHref);  // Logs current theme

    if (currentHref === 'css/login_light.css') {
        // Switch to dark theme
        themeLink.setAttribute('href', 'css/login_dark.css');
        document.getElementById('themeToggle').textContent = 'Light Mode';
        console.log('Switched to Dark Mode');
    } else {
        // Switch back to light theme
        themeLink.setAttribute('href', 'css/login_light.css');
        document.getElementById('themeToggle').textContent = 'Dark Mode';
        console.log('Switched to Light Mode');
    }
    
}


