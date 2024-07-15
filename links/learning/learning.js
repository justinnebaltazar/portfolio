let slideIndex = {
  'web-development-slideshow': 1,
  'general-programming-slideshow': 1
};

document.addEventListener("DOMContentLoaded", function() {
  initSlides();
  showSlides(1, 'web-development-slideshow');
  showSlides(1, 'general-programming-slideshow');
});

function initSlides() {
  let slideshows = ['web-development-slideshow', 'general-programming-slideshow'];
  slideshows.forEach(slideshowId => {
      let slides = document.querySelectorAll(`#${slideshowId} .resources`);
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      if (slides.length > 0) {
          slides[0].style.display = "block"; // display the first slide of each slideshow
      }
  });
}

function plusSlides(n, slideshowId) {
  showSlides(slideIndex[slideshowId] += n, slideshowId);
}

function currentSlide(n, slideshowId) {
  showSlides(slideIndex[slideshowId] = n, slideshowId);
}

function showSlides(n, slideshowId) {
  let i;
  let slides = document.querySelectorAll(`#${slideshowId} .resources`);
  let dots = document.querySelectorAll(`#${slideshowId} .dot`);
  if (n > slides.length) { slideIndex[slideshowId] = 1 }
  if (n < 1) { slideIndex[slideshowId] = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[slideshowId] - 1].style.display = "block";
  dots[slideIndex[slideshowId] - 1].className += " active";
}
