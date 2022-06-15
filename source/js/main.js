import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {getMask} from './modules/input-tel';
import {onTabs} from './modules/tabs';

const subscriptions = document.querySelector('.subscriptions__wrapper');
const anchors = document.querySelectorAll('.scroll-to');
const videoBtn = document.querySelector('[data-video-button]');

window.addEventListener('DOMContentLoaded', () => {

  subscriptions.classList.remove('subscriptions__wrapper--nojs');

  iosVhFix();
  onTabs();
  getMask();

  const getscroll = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseFloat(scrollY || '0') * -1);
  };

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();
      getscroll();
      const blockID = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  videoBtn.onclick = function (evt) {
    evt.preventDefault();
    this.style.display = 'none';
    const div = document.querySelector('div.gym__video');
    div.style.display = 'block';
    div.querySelector('iframe').src = 'https://www.youtube.com/embed/9TZXsZItgdw?controls=0';
  };

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
