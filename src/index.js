import './sass/main.scss';
import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#exampleModal'),
  subButton: document.querySelector('[data-subscribe]'),
};
const PROMT_DELAY = 1000;
const MAX_PROMT_ATTEMPTS = 3;
let promtCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#exampleModal');
// console.log(modal);

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subButton.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promtCounter === MAX_PROMT_ATTEMPTS || hasSubscribed) {
    console.log('максимальное кол событий или подписался');
    return;
  }
  setTimeout(() => {
    console.log('Открываем модалку');
    modal.show();
    promtCounter += 1;
  }, PROMT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}
