export const swiper = document.querySelectorAll('.slider').forEach(function(slider) {
    const slides = slider.querySelectorAll(".slide__img");
    const maxSlides = slides.length;
    let currentSlide = 0;
    slides.forEach(function(slide, i) {
        slide.style.transform = `translateX(${100 * i}%)`;
    });
    function goToSlide(slide) {
        slides.forEach(function (s, id) {
          s.style.transform = `translateX(${100 * (id - slide)}%)`;
        });
      };
    goToSlide(0);
    function nextSlide() {
        if (currentSlide === maxSlides - 1) {
          currentSlide = 0;
        } else {currentSlide++};
        goToSlide(currentSlide);
        // activeDot(currentSlide);
      }
      
      function prevSlide() {
        if (currentSlide === 0) {
          currentSlide = maxSlides - 1;
        } else {currentSlide--};
        goToSlide(currentSlide);
        // activeDot(currentSlide);

      };
    slider.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
          nextSlide();
        }
        if (e.key === 'ArrowLeft') {
          prevSlide();
        }
        // activeDot(currentSlide);
      });
      setInterval(function(slide) {
        nextSlide();
        if (currentSlide ===  maxSlides - 1)  {
          goToSlide(0);
          nextSlide();
        }
    }, 2000)
 })


