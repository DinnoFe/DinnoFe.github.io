const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dots li')
let slideIndex = 0;

function mostrarSlide(index) {
    slides.forEach((slides, i) => {
        slides.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

function trocarSlides() {
    slideIndex = (slideIndex + 1) % slides.length;
    mostrarSlide(slideIndex)
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      slideIndex = i;
      mostrarSlide(slideIndex);
    });
  });

setInterval(trocarSlides, 5000)
