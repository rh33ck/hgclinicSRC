const detailsSlider = new Swiper(".details-slider__inner", {
    spaceBetween: 16,

    navigation: {
        prevEl: ".details-slider__arrow--prev",
        nextEl: ".details-slider__arrow--next",
    },

    pagination: {
        el: ".details-slider__pagination",
        bulletClass: "slider-pagination__bullet",
        bulletActiveClass: "slider-pagination__bullet--active",
        type: "bullets",
        clickable: true,
    },
});
