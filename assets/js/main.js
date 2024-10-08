// Ensure 'submitted' is in the global scope
window.submitted = false;

window.formSubmissionSuccess = function() {
    if (window.submitted) {
        document.getElementById('message').textContent = 'Thanks for joining the waitlist! We\'ll be in touch soon.';
        document.getElementById('signup-form').reset();
        window.submitted = false;
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const form = document.getElementById('signup-form');
    const messageElement = document.getElementById('message');

    // Navigation Menu Toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close Menu When Clicking Outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Close the navigation menu if it's open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }

            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight Active Section in Navigation
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 60)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Handle Form Submission
    form.addEventListener('submit', function() {
        window.submitted = true;
        messageElement.textContent = 'Submitting...';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.site-header');
    const heroSection = document.querySelector('#hero');

    // Function to add/remove solid class based on scroll position
    function handleScroll() {
        const heroBottom = heroSection.offsetHeight;

        // Add the "solid" class once the user scrolls past the hero section
        if (window.scrollY > heroBottom) {
            navbar.classList.add('solid');
        } else {
            navbar.classList.remove('solid');
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Initialize the navbar state on page load
    handleScroll();
});
