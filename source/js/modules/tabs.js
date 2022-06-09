const subsBtns = document.querySelectorAll('.subscriptions__button');
const subsTabs = document.querySelectorAll('.subscriptions__tab');

const onTabs = () => {
  subsBtns.forEach((item) =>
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      const id = evt.target.getAttribute('href').replace('#', '');
      subsBtns.forEach((child) => child.classList.remove('subscriptions__button--active')
      );
      subsTabs.forEach((child) => child.classList.remove('subscriptions__tab--active')
      );
      item.classList.add('subscriptions__button--active');
      document.getElementById(id).classList.add('subscriptions__tab--active');
    })
  );
  document.querySelector('.subscriptions__button').click();
};

export {onTabs};
