let navMain = document.querySelector('.header__navigation');
let navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header__navigation--closed')) {
    navMain.classList.remove('header__navigation--closed');
    navMain.classList.add('header__navigation--opened');
  } else {
    navMain.classList.add('header__navigation--closed');
    navMain.classList.remove('header__navigation--opened');
  }
});


const swiper = new Swiper('.swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletElement: 'button',
    bulletActiveClass:'swiper-pagination-bullet--active'
  },
}
);
