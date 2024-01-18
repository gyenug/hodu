const btnPopMobileMenu = document.querySelector('.btn-menu');
const btnBack = document.querySelector('.btn-back');
const dimed = document.querySelector('.dimed');

const toggleMobileMenu = () => {
    document.querySelector('.menu-mobile').classList.toggle('on');
};

btnPopMobileMenu.addEventListener('click', toggleMobileMenu);
btnBack.addEventListener('click', toggleMobileMenu);
dimed.addEventListener('click', toggleMobileMenu);

const btnSubscribe = document.querySelector('.btn-subscribe');
const btnOkHodu = document.querySelector('.btn-okhodu');
const dimedBlack = document.querySelector('.dimed-black');

const toggleThanksSubscribe = () => {
    document.querySelector('.modal-thanks').classList.toggle('on');
}

btnSubscribe.addEventListener('click', toggleThanksSubscribe);
btnOkHodu.addEventListener('click', toggleThanksSubscribe);
dimedBlack.addEventListener('click', toggleThanksSubscribe);
