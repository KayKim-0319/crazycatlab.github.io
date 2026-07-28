// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize header scroll effect
    initHeaderScrollEffect();
});

// Smooth scrolling for navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight || 0;
                const targetPosition = target.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // The animation only runs once, so stop watching the element
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    if (header) {
        let ticking = false;

        function updateHeader() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            header.classList.toggle('scrolled', scrollTop > 100);
            // Hide/show header on scroll
            header.classList.toggle('hidden', scrollTop > lastScrollTop && scrollTop > 300);

            lastScrollTop = scrollTop;
            ticking = false;
        }

        // Scroll fires far more often than the screen repaints; coalesce the work
        // into one update per frame. passive tells the browser we never block scrolling.
        window.addEventListener('scroll', function() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(updateHeader);
        }, { passive: true });
    }
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').catch(function() {});
    });
}