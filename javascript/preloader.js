const swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// временно не работает
