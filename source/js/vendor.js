// Swiper 7.4.1
// import './vendor/swiper';

import Swiper, {Navigation} from 'swiper';

const swiper = new Swiper('.coaches__wrapper', {
  spaceBetween: 0,
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    320: {
      spaceBetween: 40,
      slidesPerView: 1,
      initialSlide: 2,
    },

    768: {
      spaceBetween: 30,
      slidesPerView: 2,
      initialSlide: 2,
    },

    1200: {
      spaceBetween: 40,
      slidesPerView: 4,
      initialSlide: 4,
    },
  },
});

const swiperReviews = new Swiper('.reviews__wrapper', {
  spaceBetween: 40,
  slidesPerView: 1,
  autoHeight: true,
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.init();
swiperReviews.init();
