// Simple fade-in on load, no delay, no complex timing
window.onload = function() {
  const sections = document.querySelectorAll('section');
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.opacity = 1;
    sections[i].style.transform = 'translateY(0)';
  }
};
