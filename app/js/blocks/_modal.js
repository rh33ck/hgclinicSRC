
function showModal(event) {
    const clickedBtn = event.target.closest("[data-modal]");
    const modalClass = clickedBtn.getAttribute("data-modal");

    if (modalClass) {
        const modal = document.querySelector("." + modalClass);

        modal.classList.add("modal--active");
        toggleBodyScroll();
    }
}

function hideModal(event) {
    const clickedBtn = event.target;
    const modal = clickedBtn.closest(".modal");

    modal.classList.remove("modal--active");
    toggleBodyScroll();
}


const btns = document.querySelectorAll("[data-modal]");

for (const btn of btns) {
    btn.addEventListener("click", showModal);
}

const closeBtns = document.querySelectorAll(".modal__btn-close");

for (const closeBtn of closeBtns) {
    closeBtn.addEventListener("click", hideModal);
}

// const modals = document.querySelectorAll(".modal");

// for (const modal of modals) {
//     modal.addEventListener("click", hideModal);
// }
