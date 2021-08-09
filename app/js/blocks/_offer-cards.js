new Swiper(".offer-cards__inner", {
    spaceBetween: 6,
    slidesPerView: "auto",
    slidesPerGroup: 3,
    navigation: {
        prevEl: ".offer-cards__arrow--prev",
        nextEl: ".offer-cards__arrow--next",
    },

    breakpoints: {
        480: {
            spaceBetween: 16
        },
    },
});
