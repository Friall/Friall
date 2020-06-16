$(document).ready(function () {
  // ! Слайдер + стрєлочки

  $(".decision-slider__inner").slick({
    speed: 1200,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-prew.svg" ></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next.svg" ></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".main-burger").click(function (e) {
    $(".main-burger, .main-top__menu").toggleClass("active");
  });
});
