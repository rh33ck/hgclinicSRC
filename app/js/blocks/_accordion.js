

function showAccordionBody(event) {
    event.preventDefault();

    const header = event.target.closest(".accordion-item__header");
    const body = header.nextElementSibling;

    header.classList.toggle("accordion-item__header--active");

    slideToggle(body);
}


const accordionHeaders = document.querySelectorAll(".accordion-item__header");

for (const accordionHeader of accordionHeaders) {
    accordionHeader.addEventListener("click", showAccordionBody);
}

