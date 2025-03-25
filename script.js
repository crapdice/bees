// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// GSAP animations on page load
gsap.from("header", { duration: 1, y: -50, opacity: 0 });
gsap.from(".hero-content", { duration: 1.5, x: -100, opacity: 0, delay: 0.5 });
gsap.from(".hero-banner", { duration: 1.5, x: 100, opacity: 0, delay: 0.5 });
