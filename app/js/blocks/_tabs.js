

function changeTabContent(event) {
    event.preventDefault();
    const clickedTabBtn = event.target;
    const tabs = clickedTabBtn.closest(".tabs");

    const activeTabBtn = tabs.querySelector(".tabs-header__btn--active");
    activeTabBtn.classList.remove("tabs-header__btn--active");

    const activeTabContent = tabs.querySelector(".tabs-content__item--active");
    activeTabContent.classList.remove("tabs-content__item--active");

    clickedTabBtn.classList.add("tabs-header__btn--active");

    const newContentId = clickedTabBtn.dataset.tab;
    document.getElementById(newContentId).classList.add("tabs-content__item--active");
}


const tabBtns = document.querySelectorAll(".tabs-header__btn");

for (const tabBtn of tabBtns) {
    tabBtn.addEventListener("click", changeTabContent);
}
