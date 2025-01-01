
let slider_use_case = new Swiper(".mySwiper.slider-use-case", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 600,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
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
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

let swiper = new Swiper(".mySwiper.key-benefits-slider", {
  slidesPerView: 2,
  spaceBetween: 90,
  loop: true,
  speed: 600,
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

// tabs js 
document.addEventListener('DOMContentLoaded', function () {
  let tabs = document.querySelectorAll('.tabs-li');
  let panels = document.querySelectorAll('.tabs-1-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      let targetTab = this.getAttribute('data-tab');

      // Remove active class from all tabs and panels
      tabs.forEach(tab => tab.classList.remove('active'));
      panels.forEach(panel => panel.classList.remove('active'));

      // Add active class to the clicked tab and the corresponding panel
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let tabs = document.querySelectorAll('.tabs-2-li');
  let panels = document.querySelectorAll('.tabs-2-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      let targetTab = this.getAttribute('data-tab');

      // Remove active class from all tabs and panels
      tabs.forEach(tab => tab.classList.remove('active'));
      panels.forEach(panel => panel.classList.remove('active'));

      // Add active class to the clicked tab and the corresponding panel
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
});

jQuery(".popup-closed-btn").click(function () {
  jQuery(".popup-container").addClass("popup-container-display-none");
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".ifrem-video", {
    scale: 1,
    ease: "none",
    scrollTrigger: {
        trigger: ".video-section",
        start: "top 90%",
        end: "top 40%",
        scrub: true
    }
});













