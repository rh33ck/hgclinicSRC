
function toggleBurgerMenu(event) {
    burgerMenu.classList.toggle("burger-menu--active");
    toggleBodyScroll();
}


const burgerMenu = document.querySelector(".burger-menu"); // можно взять next element от burger

const burger = document.querySelector(".burger");
burger.addEventListener("click", toggleBurgerMenu);

const closeBtn = document.querySelector(".burger-menu__btn-close");
closeBtn.addEventListener("click", toggleBurgerMenu);
