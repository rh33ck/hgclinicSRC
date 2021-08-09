
const staffThumbs = new Swiper(".doctor-thumbs", {
    spaceBetween: 16,
    slidesPerView: 5,
});

const staffSlider = new Swiper(".doctor-cards__inner", {
    spaceBetween: 16,
    speed: 500,

    navigation: {
        prevEl: ".doctor-cards__arrow--prev",
        nextEl: ".doctor-cards__arrow--next",
    },

    thumbs: {
        swiper: staffThumbs,
        slideThumbActiveClass: "doctor-thumbs__thumb--active",
    }
});
