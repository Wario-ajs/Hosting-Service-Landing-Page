const botaoMenu = document.querySelector('.header__menu--button');
const menu = document.querySelector('.header__menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('header__menu-actv')
})