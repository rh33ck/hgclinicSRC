

function showSubmenu(event) {
    event.preventDefault();

    const clickedLink = event.target.closest(".sidebar-menu__link");
    clickedLink.classList.toggle("sidebar-menu__link--active");

    const submenu = clickedLink.nextElementSibling;
    slideToggle(submenu);
}


const menuLinks = document.querySelectorAll(".sidebar-menu__link");

for (const menuLink of menuLinks) {
    menuLink.addEventListener("click", showSubmenu);
}
