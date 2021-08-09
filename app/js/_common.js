

function toggleBodyScroll() {
    document.body.classList.toggle("body--locked");
}

function slideToggle(element) {
    if (element.style.maxHeight) {
        element.style.maxHeight = null;
    } else {
        const elementHeight = element.scrollHeight;

        element.style.maxHeight = elementHeight + "px";
    }
}

function isElementVisible(element) {
    // проверяет видимость только по вертикали
    const scrollTop = window.pageYOffset;
    const distToElement = element.getBoundingClientRect().top;
    const elementY = scrollTop + distToElement;

    if (scrollTop + document.documentElement.clientHeight > elementY) {
        return true;
    }

    return false;
}
