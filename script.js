// Mobile menu
const toggle = document.getElementById('mobile-menu');
const menu = document.getElementById('nav-menu');

if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('active'));
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('active'));
    });
}

// Smooth scroll for same-page anchor links only
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// Sticky nav — add .scrolled class on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
    }
}, { passive: true });

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.section, .hero, .page-header, .credibility-bar').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact form
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const original = btn.textContent;
        btn.textContent = 'Sent! I\'ll be in touch.';
        btn.style.background = '#6B8F71';
        form.reset();
        setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '#BFA16A';
        }, 3000);
    });
}
