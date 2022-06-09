import iMask from 'imask';

const getMask = () => {
  const MIN_LENGTH = 16;
  const inputTel = document.querySelector('[data-input-tel]');

  iMask(inputTel, {mask: '+{7}(000)000-00-00'});

  inputTel.addEventListener('input', () => {
    inputTel.setCustomValidity('');
    if (inputTel.value.length < MIN_LENGTH) {
      inputTel.setCustomValidity('Номер телефона введён не полностью');
    } inputTel.reportValidity();
  });
};

export {getMask};
