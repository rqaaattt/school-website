const img = document.querySelector('.image-container img');
    img.onload = function() {
      img.style.display = 'block';  // Показываем изображение
      img.parentElement.classList.remove('skeleton'); // Убираем класс для скелетного экрана
    };