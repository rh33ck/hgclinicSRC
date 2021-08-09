;(function () {
    const mapSection = document.querySelector(".map");


    function initMap() {
        if (typeof ymaps === "undefined") {
            return;
        }

        ymaps.ready(function () {
            const map = new ymaps.Map("ymap", {
                center: [55.767479, 37.632691],
                zoom: 17,
                controls: []
            }, {
                searchControlProvider: "yandex#search"
            });

            const placemark = new ymaps.Placemark([55.767479, 37.632691], {
                balloonContent: "Клинико-диагностическая клиника High Guard Clinic",
                iconCaption: "Рыбников переулок, 1"
            }, {
                preset: "islands#redDotIconWithCaption"
            });

            map.geoObjects
                .add(placemark);

            map.behaviors.disable("scrollZoom");
        });
    }

    function loadMap() {
        const script = document.createElement("script");
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";

        document.body.appendChild(script);

        script.addEventListener("load", initMap);
    }

    function checkMapOnScreen() {
        if (isElementVisible(mapSection)) {
            loadMap();
            window.removeEventListener("scroll", checkMapOnScreen);
        }
    }

    window.addEventListener("scroll", checkMapOnScreen);
    checkMapOnScreen();
})();
