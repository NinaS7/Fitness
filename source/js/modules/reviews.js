let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const track = document.getElementById('list');
const reviews = document.querySelector('.reviews');
const btnPrev = reviews.querySelector('.toggle--previous');
const btnNext = reviews.querySelector('.toggle--next');
const items = document.querySelectorAll('.reviews__item');
const itemsCount = items.length;
const itemWidth = track.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.getElementsByClassName.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
