
let slider_use_case = new Swiper(".mySwiper.slider-use-case", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed:600,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1400: {
          slidesPerView:3,
          spaceBetweenSlides: 20
      },
      1200: {
          slidesPerView: 2.5,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1.5,
      },
      0: {
        slidesPerView: 1.8,
        spaceBetween: 10,
      }
  }
  });

  let swiper = new Swiper(".mySwiper.key-benefits-slider", {
    slidesPerView: 2,
    spaceBetween: 90,
    loop: true,
    speed:600,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return number < 10 ? "0" + number : number;
      },
      formatFractionTotal: function (number) {
        return number < 10 ? "0" + number : number;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 90,
        slidesPerView: 2,
      },
      576: {
        spaceBetween: 50,
        slidesPerView: 1.5,
      },
      0: {
        spaceBetween: 20,
        slidesPerView: 1.2,
      }
  }
  });

