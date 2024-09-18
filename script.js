// Add active class on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const menuItems = document.querySelectorAll('.menu-item');
  
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    menuItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').includes(currentSection)) {
        item.classList.add('active');
      }
    });
  });
  