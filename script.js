// =========================================================
// Raphael Albert Darius — Portfolio Script
// =========================================================

// ===== MOBILE NAVBAR TOGGLE =====
function toogleNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === '' || navbar.style.display === 'none') {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
}

// ===== EXPERIENCE TAB SWITCHING =====
function selectExperienceTab(experienceTab) {
    const active = document.querySelector('.tab-experience-item.active');
    const tabActive = document.querySelector('.tab-active');
    const experienceItemActive = document.querySelector('.experience-item-active');

    if (active) active.classList.remove('active');
    const selectedTabItem = document.getElementById('tab-' + experienceTab + '-item');
    if (selectedTabItem) selectedTabItem.classList.add('active');

    if (tabActive) tabActive.classList.remove('tab-active');
    const selectedTab = document.getElementById('tab-' + experienceTab);
    if (selectedTab) selectedTab.classList.add('tab-active');

    if (experienceItemActive) experienceItemActive.classList.remove('experience-item-active');
    const selectedItem = document.getElementById('item-' + experienceTab);
    if (selectedItem) selectedItem.classList.add('experience-item-active');
}

// ===== SMOOTH SCROLL NAVBAR =====
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                // collapse mobile nav after navigating
                const navbar = document.getElementById('navbar');
                if (navbar && window.innerWidth <= 920) {
                    navbar.style.display = 'none';
                }
            }
        }
    });
});

// ===== ACTIVE NAVBAR HIGHLIGHT ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        const href = a.getAttribute('href');
        if (current && href === '#' + current) {
            a.classList.add('active');
        }
    });
});

// ===== FADE-IN ANIMATION ON SCROLL =====
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .experience-item').forEach(el => {
    el.classList.add('fade');
    fadeObserver.observe(el);
});

// ===== TYPING EFFECT FOR NAME =====
function typing() {
    const el = document.querySelector('.intro-header highlight');
    if (!el) return;

    const text = el.textContent;
    el.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}
typing();

// ===== GRACEFUL FALLBACK FOR MISSING PROJECT IMAGES =====
// If a project screenshot hasn't been added yet to images/projects/,
// show a soft gradient placeholder instead of a broken image icon.
document.querySelectorAll('.project-image').forEach(img => {
    img.addEventListener('error', function () {
        this.classList.add('img-fallback');
        this.removeAttribute('src');
    }, { once: true });
});
