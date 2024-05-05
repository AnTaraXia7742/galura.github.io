let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times'); // Corrected: Remove space before 'fa-times'
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  // Consider adding logic here to conditionally toggle 'active' based on scroll position
  // Example:
  if (window.scrollY > 100) {
    // Hide navbar when scrolled past 100px
    menu.classList.remove('fa-times'); // Remove 'fa-times' if present
    navbar.classList.remove('active');
  } else {
    // Show navbar when scrolled back to the top
  }
};

var swiper = new Swiper('.home-slider', {
  spaceBetween: 120,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
});
