// Получаем элементы DOM
const carouselInner = document.getElementById("carouselInner");
const slides = Array.from(carouselInner.children); // Все слайды
let currentIndex = 0; // Текущий индекс слайда

// Ширина одного слайда (равна ширине контейнера)
const slideWidth = carouselInner.offsetWidth;

// Функция для перемещения слайдов влево
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Функция для перемещения слайдов вправо
function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

// Функция обновления позиции карусели
function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
