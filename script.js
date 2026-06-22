// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Call button functionality
const callButtons = document.querySelectorAll('.btn-primary, .btn-large');
callButtons.forEach(button => {
    if (button.textContent.includes('CALL') || button.textContent.includes('☎')) {
        button.addEventListener('click', () => {
            // For production, replace with actual phone number or call functionality
            alert('Calling (555) 246-PEST (7378)');
            // Uncomment below for actual phone dialing on mobile:
            // window.location.href = 'tel:+15552467378';
        });
    }
});

// Schedule Online button
const scheduleButtons = document.querySelectorAll('.btn-secondary');
scheduleButtons.forEach(button => {
    if (button.textContent.includes('SCHEDULE')) {
        button.addEventListener('click', () => {
            alert('Redirecting to scheduling page...');
            // In production, link to your scheduling system
            // window.location.href = 'https://booking.example.com';
        });
    }
});

// Get Free Quote button
const quoteButton = document.querySelector('.btn-quote');
if (quoteButton) {
    quoteButton.addEventListener('click', () => {
        // Scroll to contact section or open modal
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Redirecting to quote request form...');
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Service card interactions
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.zIndex = '1';
    });
});

// Learn more link interactions
const learnMoreLinks = document.querySelectorAll('.learn-more');
learnMoreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceTitle = link.closest('.service-card').querySelector('h3').textContent;
        alert(`Loading more information about ${serviceTitle}...`);
        // In production, link to detailed service pages
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.4)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards and benefit cards
document.querySelectorAll('.service-card, .benefit-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Counter animation for stats (if added)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Form validation helper
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    // ESC closes mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// Log component loaded
console.log('Harrison Pest Management website loaded successfully');
