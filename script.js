// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? '#2563eb' : '';
  });
});
