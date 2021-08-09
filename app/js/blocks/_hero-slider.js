new Swiper(".hero-slider", {
    loop: true,
    // autoplay: {
        
    // },

    navigation: {
        prevEl: ".hero-slider__arrow--prev",
        nextEl: ".hero-slider__arrow--next",
    },

    pagination: {
        el: ".hero-slider__pagination",
        bulletClass: "slider-pagination__bullet",
        bulletActiveClass: "slider-pagination__bullet--active",
        type: "bullets",
        clickable: true,
    },
});
