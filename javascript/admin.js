// Импорт стилей, если ты работаешь с сборщиком
import 'swiper/swiper-bundle.css';

// Импорт Swiper
import Swiper from 'swiper';

// Инициализация
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
