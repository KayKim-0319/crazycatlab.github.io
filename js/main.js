// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS (replace with your actual User ID)
    // Get your User ID from https://dashboard.emailjs.com/admin/account
    if (typeof emailjs !== 'undefined') {
        emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
    }
    
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize i18n (internationalization)
    if (typeof initI18n === 'function') {
        initI18n();
    }
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize mobile menu
    initMobileMenu();
    
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

// Scroll to section function
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Contact form initialization
function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showFormStatus('Please fill in all fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormStatus('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            showFormStatus('Sending message...', 'loading');
            
            try {
                // EmailJS integration
                if (typeof emailjs !== 'undefined') {
                    const result = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                        from_name: name,
                        from_email: email,
                        message: message,
                        to_email: 'your-email@example.com'
                    });
                    
                    showFormStatus('Message sent successfully!', 'success');
                    form.reset();
                } else {
                    throw new Error('EmailJS not loaded');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showFormStatus('Failed to send message. Please try again.', 'error');
            }
        });
    }
}

// Show form status
function showFormStatus(message, type) {
    const statusDiv = document.getElementById('form-status');
    if (statusDiv) {
        statusDiv.textContent = message;
        statusDiv.className = `form-status ${type}`;
        statusDiv.style.display = 'block';
        
        if (type === 'success') {
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 5000);
        }
    }
}

// Mobile menu functionality - DISABLED to prevent conflict with head event listener
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    // Mobile menu is handled by head section - this function is disabled
    
    // COMMENTED OUT to prevent double event registration
    // if (menuToggle && navMenu) {
    //     menuToggle.addEventListener('click', function() {
    //         toggleMobileMenu();
    //     });
        
    //     // Close menu when clicking on nav links
    //     navMenu.querySelectorAll('a').forEach(link => {
    //         link.addEventListener('click', function() {
    //             if (navMenu.classList.contains('active')) {
    //                 toggleMobileMenu();
    //             }
    //         });
    //     });
    //     
    //     // Close menu when clicking outside
    //     document.addEventListener('click', function(e) {
    //         if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
    //             if (navMenu.classList.contains('active')) {
    //                 toggleMobileMenu();
    //             }
    //         }
    //     });
    // }
}

// Toggle mobile menu
function toggleMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.classList.toggle('menu-open', navMenu.classList.contains('active'));
    }
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
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide/show header on scroll
            if (scrollTop > lastScrollTop && scrollTop > 300) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// App modal functionality
function openAppModal(appKey) {
    
    if (!appData || !appData[appKey]) {
        console.error('App data not found for:', appKey);
        return;
    }
    
    const app = appData[appKey];
    const currentLang = localStorage.getItem('language') || 'en';
    
    // Create modal HTML
    const modalHtml = `
        <div class="modal-overlay" id="app-modal">
            <div class="modal-content">
                <button class="modal-close" onclick="closeAppModal()">&times;</button>
                <div class="modal-header">
                    <h2>${currentLang === 'ko' ? app.titleKo : app.title}</h2>
                </div>
                <div class="modal-body">
                    <div class="app-gallery">
                        ${app.images ? app.images.map((img, index) => `
                            <img src="${img}" alt="${app.title} screenshot ${index + 1}" 
                                 onclick="openImageModal('${img}')" loading="lazy">
                        `).join('') : ''}
                    </div>
                    <div class="app-description">
                        <p>${currentLang === 'ko' ? app.descriptionKo : app.description}</p>
                    </div>
                    <div class="app-links">
                        ${app.storeUrl ? `<a href="${app.storeUrl}" target="_blank" class="btn btn-primary">Google Play</a>` : ''}
                        ${app.storeUrlIos ? `<a href="${app.storeUrlIos}" target="_blank" class="btn btn-secondary">App Store</a>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.body.classList.add('modal-open');
    
    // Add escape key listener
    document.addEventListener('keydown', handleModalEscape);
}

// Close app modal
function closeAppModal() {
    const modal = document.getElementById('app-modal');
    if (modal) {
        modal.remove();
        document.body.classList.remove('modal-open');
        document.removeEventListener('keydown', handleModalEscape);
    }
}

// Handle escape key for modal
function handleModalEscape(e) {
    if (e.key === 'Escape') {
        closeAppModal();
        closeImageModal();
    }
}

// Open image modal
function openImageModal(imageSrc) {
    const imageModalHtml = `
        <div class="image-modal-overlay" id="image-modal" onclick="closeImageModal()">
            <div class="image-modal-content">
                <button class="modal-close" onclick="closeImageModal()">&times;</button>
                <img src="${imageSrc}" alt="App screenshot" onclick="event.stopPropagation()">
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', imageModalHtml);
}

// Close image modal
function closeImageModal() {
    const imageModal = document.getElementById('image-modal');
    if (imageModal) {
        imageModal.remove();
    }
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// Global functions for modal access - REMOVED to prevent head override conflict
// These functions will be registered by head section after page load
// window.openAppModal = openAppModal;
// window.closeAppModal = closeAppModal; 
// window.toggleMobileMenu = toggleMobileMenu;

// Expose real functions for temporary functions to use
window.realOpenAppModal = openAppModal;
window.realCloseAppModal = closeAppModal;
window.realToggleMobileMenu = toggleMobileMenu;

// Main.js loaded successfully