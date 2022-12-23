 const swiperOne = new Swiper('#swiperIntroD', {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    crossFade: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

 const swiperPartner = new Swiper('#swiperPartnership', {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    crossFade: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

