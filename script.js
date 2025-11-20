// Shared JS for all pages
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Sticky header
  window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
  });

  // Active link highlighting
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === current);
  });
});