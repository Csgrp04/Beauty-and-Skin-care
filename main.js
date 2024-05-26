document.addEventListener("DOMContentLoaded", function() {
    var mySwiper = new Swiper('.swiper', {
        
        loop: true, // Enable looping
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000, // Set autoplay delay to 3 seconds (3000 milliseconds)
            disableOnInteraction: false, // Continue autoplay even when user interacts with swiper
        },
    });
  });
  