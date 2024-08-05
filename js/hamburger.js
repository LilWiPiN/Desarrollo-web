const container = document.querySelector('.menu-icon');
const menuHamburger = document.querySelector('.menu-hamburger');

container.addEventListener('click', ()=>{
    menuHamburger.classList.toggle('animate');
})