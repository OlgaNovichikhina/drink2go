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

const map = L.map('map-wrapper')
  .setView({
    lat: 59.968137,
    lng: 30.316272,
  }, 16);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './images/map-pin.png',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.968137,
    lng: 30.316272,
  },
  {
    icon: mainPinIcon,
  },
);

marker.addTo(map);
