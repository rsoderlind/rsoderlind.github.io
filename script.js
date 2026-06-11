document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        // Slide out the mobile navigation menu
        navLinks.classList.toggle('active');
        
        // Optional: Animation effect for the hamburger lines turning into an 'X'
        menuToggle.classList.toggle('toggle-open');
    });

    // Close the menu automatically when a user clicks any link
    const mobileLinks = navLinks.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});