let slideIndex = 1;
let slides = document.getElementsByClassName("carousel-slides")[0].children;
let dots = document.getElementsByClassName("dot");
let autoSlideInterval;

initCarousel();

function initCarousel() {
  showSlides(slideIndex);
  resetAutoSlideTimer();
}

function plusSlides(n) {
  showSlides((slideIndex += n));
  resetAutoSlideTimer();
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  resetAutoSlideTimer();
}

function resetAutoSlideTimer() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => plusSlides(1), 5000);
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // hides all slides
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block"; // show the active slide
  dots[slideIndex - 1].className += " active"; // highlight the active dot
}

resetAutoSlideTimer();
