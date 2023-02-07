const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-btn');

const mobileMenu = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileNav.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
