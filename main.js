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
  function toggleSubcategories(subcategoryId) {
    const subcategory = document.getElementById(subcategoryId);
    const allSubcategories = document.querySelectorAll('.subcategory-list');

    allSubcategories.forEach((sub) => {
        if (sub.id !== subcategoryId) {
            sub.style.display = 'none';
        }
    });

    if (subcategory.style.display === 'block') {
        subcategory.style.display = 'none';
    } else {
        subcategory.style.display = 'block';
    }
}