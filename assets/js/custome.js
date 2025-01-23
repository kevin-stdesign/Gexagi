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
      centeredSlides: true,
    },

    0: {
      centeredSlides: false,
      slidesPerView: 1.2,
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
      slidesPerGroup: 2,
      spaceBetween: 90,
      slidesPerView: 2,
    },
    576: {
      slidesPerGroup: 1,
      spaceBetween: 50,
      slidesPerView: 1,
    },
    0: {
      slidesPerGroup: 1,
      spaceBetween: 20,
      slidesPerView: 1,
    }
  }
});

// Tabs js 
document.addEventListener('DOMContentLoaded', function () {
  let tabs = document.querySelectorAll('.tabs-2-li');
  let panels = document.querySelectorAll('.tabs-2-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      let targetTab = this.getAttribute('data-tab');
      tabs.forEach(tab => tab.classList.remove('active'));
      panels.forEach(panel => panel.classList.remove('active'));
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');

    });
  });
});

jQuery(".popup-closed-btn").click(function () {
  jQuery(".popup-container").addClass("popup-container-display-none");
});

// Toggle Class
$(document).ready(function () {
  $('.theme-toggle .toggle').change(function () {
    $("body").toggleClass("light-theme");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var hash = window.location.hash;
  if (hash) {
    var targetAccordion = document.querySelector(hash + ' .accordion-collapse');
    if (targetAccordion) {
      var collapseInstance = new bootstrap.Collapse(targetAccordion, {
        toggle: true
      });
    }
  }
});

// Navbar Add Class
$(document).ready(function () {
  var scrollTop = $(document).scrollTop();
  if (scrollTop > 14) {
    $(".main-header").addClass("sticky");
  }

  $(document).scroll(function () {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 14) {
      $(".main-header").addClass("sticky");
    } else {
      $(".main-header").removeClass("sticky");
    }
  });
});