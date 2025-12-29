/* --- 1. NAVIGATION & UI LOGIC --- */

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

/* --- 2. USER STATUS CHECK (Hides Join Button) --- */
function checkUserStatus() {
    const status = localStorage.getItem('userStatus');

    if (status === 'joined') {
        const joinButtons = document.querySelectorAll('.btn-signup');
        joinButtons.forEach(button => {
            button.style.setProperty('display', 'none', 'important');
        });

        const loginBtn = document.querySelector('.btn-login');
        if (loginBtn) {
            loginBtn.innerHTML = '<i class="fas fa-user-circle"></i> Profile';
            loginBtn.style.color = '#2563EB';
            loginBtn.style.fontWeight = '700';
        }
    }
}
// Run immediately
checkUserStatus();
document.addEventListener('DOMContentLoaded', checkUserStatus);


/* --- 3. SCROLL ANIMATION OBSERVER (New!) --- */
document.addEventListener('DOMContentLoaded', function() {
    
    // Select everything you marked with the class
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that forces opacity: 1
                entry.target.classList.add('show');
                // Stop watching to save performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});


// Mobile Menu Toggle Fix
document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.querySelector('.checkbtn'); // The hamburger icon
    const navLinks = document.querySelector('.nav-links'); // The menu list
    const checkBox = document.getElementById('check'); // The actual checkbox

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            checkBox.checked = false; // Uncheck the box to close menu
        });
    });
});