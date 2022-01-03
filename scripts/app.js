const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.header__menu');  

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('visible');
})