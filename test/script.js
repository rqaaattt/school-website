
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let index = 0;

  const slideWidth = slides[0].offsetWidth + 16; // ширина + отступ

  next.addEventListener('click', () => {
    if (index < slides.length - 3) {
      index++;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  });

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  });
