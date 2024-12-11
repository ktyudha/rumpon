var swiperHero = new Swiper(".swiperHero", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // Untuk layar lebih kecil dari 768px (tablet / mobile)
    768: {
      slidesPerView: 3, // Menampilkan 2 slide
      spaceBetween: 20, // Mengurangi jarak antar slide
    },
    0: {
      slidesPerView: "auto", // Menampilkan 1 slide
      spaceBetween: 10, // Mengurangi jarak antar slide
    },
  },
});

var swiperLightbox = new Swiper(".swiperLightbox", {
  loop: true,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiperLightbox2 = new Swiper(".swiperLightbox2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiperLightbox,
  },
});

var swiperJenis = new Swiper(".swiperJenis", {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3, // Menampilkan 2 slide
      spaceBetween: 30, // Mengurangi jarak antar slide
    },
    0: {
      slidesPerView: 1, // Menampilkan 1 slide
      spaceBetween: 10, // Mengurangi jarak antar slide
    },
  },
});

function next(swiper) {
  swiper.slideNext();
}

function prev(swiper) {
  swiper.slidePrev();
}

function showModal(that) {
  var id = $(that).data("modal");
  $(`#${id}`).modal({
    fadeDuration: 300,
    fadeDelay: 0.5,
  });
}
