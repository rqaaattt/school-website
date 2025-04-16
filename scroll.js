window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  