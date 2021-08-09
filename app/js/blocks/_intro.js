;(function () {
    const moreBtn = document.querySelector(".intro__more-btn");
    const lessBtn = document.querySelector(".intro__less-btn");
    const details = document.querySelector(".intro__details");

    if (moreBtn && lessBtn) {
        moreBtn.addEventListener("click", function () {
            this.style.display = "none";

            slideToggle(details);
        });

        lessBtn.addEventListener("click", function () {
            moreBtn.style.display = "block";

            slideToggle(details);
        });
    }


    // ====================================

    const introVideo = document.querySelector(".intro__video");

    if (!introVideo) {
        return;
    }

    function loadVideo() {
        const iframe = introVideo.querySelector("iframe");

        iframe.src = iframe.getAttribute("data-src");
    }

    function checkVideoOnScreen() {
        if (isElementVisible(introVideo)) {
            loadVideo();
            window.removeEventListener("scroll", checkVideoOnScreen);
        }
    }

    window.addEventListener("scroll", checkVideoOnScreen);
    checkVideoOnScreen();
})();
