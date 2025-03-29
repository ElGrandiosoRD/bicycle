document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: "#slide-next",
            prevEl: "#slide-prev",
        },
        on: {
            slideChangeTransitionEnd: function () {
                // Para animacioN del nuevo slide
                gsap.fromTo(".swiper-slide-active .slide-content > *", 
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
                );
            }
        }
    });

    // INICIA LA animacion del primer slide
    gsap.fromTo(".swiper-slide-active .slide-content > *", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
    );
});