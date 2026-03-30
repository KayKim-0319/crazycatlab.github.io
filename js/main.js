// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
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

// Mobile menu handled by head section script
function initMobileMenu() {}

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
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
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

// Safe text escaping to prevent XSS
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Safe URL validation
function isValidUrl(url) {
    try {
        const parsed = new URL(url);
        return ['http:', 'https:'].includes(parsed.protocol);
    } catch { return false; }
}

// App modal functionality (safe DOM API version)
function openAppModal(appKey) {
    if (!appData || !appData[appKey]) return;

    const app = appData[appKey];
    const currentLang = localStorage.getItem('language') || 'en';

    // Build modal using safe DOM APIs
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'app-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'app-modal-title');

    const content = document.createElement('div');
    content.className = 'modal-content';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.textContent = '\u00D7';
    closeBtn.setAttribute('aria-label', 'Close modal');
    closeBtn.addEventListener('click', closeAppModal);

    const header = document.createElement('div');
    header.className = 'modal-header';
    const title = document.createElement('h2');
    title.id = 'app-modal-title';
    title.textContent = currentLang === 'ko' ? (app.titleKo || app.title) : app.title;
    header.appendChild(title);

    const body = document.createElement('div');
    body.className = 'modal-body';

    // Gallery
    const gallery = document.createElement('div');
    gallery.className = 'app-gallery';
    if (app.images) {
        app.images.forEach(function(imgSrc, index) {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = escapeHtml(app.title) + ' screenshot ' + (index + 1);
            img.loading = 'lazy';
            img.addEventListener('click', function() { openImageModal(imgSrc); });
            gallery.appendChild(img);
        });
    }

    // Description
    const desc = document.createElement('div');
    desc.className = 'app-description';
    const descP = document.createElement('p');
    descP.textContent = currentLang === 'ko' ? (app.descriptionKo || app.description) : app.description;
    desc.appendChild(descP);

    // Store links
    const links = document.createElement('div');
    links.className = 'app-links';
    if (app.storeUrl && isValidUrl(app.storeUrl)) {
        const a = document.createElement('a');
        a.href = app.storeUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'btn btn-primary';
        a.textContent = 'Google Play';
        links.appendChild(a);
    }
    if (app.storeUrlIos && isValidUrl(app.storeUrlIos)) {
        const a = document.createElement('a');
        a.href = app.storeUrlIos;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'btn btn-secondary';
        a.textContent = 'App Store';
        links.appendChild(a);
    }

    body.appendChild(gallery);
    body.appendChild(desc);
    body.appendChild(links);
    content.appendChild(closeBtn);
    content.appendChild(header);
    content.appendChild(body);
    overlay.appendChild(content);
    document.body.appendChild(overlay);
    document.body.classList.add('modal-open');
    closeBtn.focus();
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

// Open image modal (safe DOM API version)
function openImageModal(imageSrc) {
    if (!isValidUrl(imageSrc) && !imageSrc.startsWith('image/')) return;

    const overlay = document.createElement('div');
    overlay.className = 'image-modal-overlay';
    overlay.id = 'image-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.addEventListener('click', closeImageModal);

    const content = document.createElement('div');
    content.className = 'image-modal-content';
    content.addEventListener('click', function(e) { e.stopPropagation(); });

    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.textContent = '\u00D7';
    closeBtn.setAttribute('aria-label', 'Close image');
    closeBtn.addEventListener('click', closeImageModal);

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'App screenshot';

    content.appendChild(closeBtn);
    content.appendChild(img);
    overlay.appendChild(content);
    document.body.appendChild(overlay);
    closeBtn.focus();
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
        navigator.serviceWorker.register('/sw.js').catch(function() {});
    });
}