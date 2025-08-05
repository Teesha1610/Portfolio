// Fade-in on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < triggerBottom) {
      sec.style.transition = "all 0.7s ease";
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// Click effect on project boxes
document.querySelectorAll('.projects .box').forEach(box => {
  box.addEventListener('click', () => {
    alert(`You clicked on: ${box.textContent}`);
  });
});
