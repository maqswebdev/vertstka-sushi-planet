/*import $ from "jquery";
window.jQuery = $;
window.$ = $; // import module example (npm i -D jquery)*/
import Headhesive from "headhesive";
import Swiper, { Autoplay, Pagination, Navigation } from "swiper";
import Popper from "popper.js";
import { ScrollSpy } from "bootstrap";
import mPageScroll2id from "page-scroll-to-id";

require("~/app/js/vendor/cookie-message-master/cookie-message.js");

Swiper.use([Autoplay, Pagination, Navigation]);

document.addEventListener("DOMContentLoaded", () => {
  document.body.className = document.body.className + " js_enabled";

  /** init popup modals */
  /*$("a[data-modal]").click(function (event) {
    $(this).modal();
    return false;
  });*/
  setTimeout(() => {
    $("#hours").modal({
      showClose: false,
      fadeDuration: 200,
    });
  }, 3000);

  /** LazyLoad Images */
  const $lazyImages = document.querySelectorAll("img[data-src]");
  const windowHeight = document.documentElement.clientHeight;

  let lazyImagesPositions = [];
  if ($lazyImages.length) {
    $lazyImages.forEach((lazyImg) => {
      if (lazyImg.dataset.src) {
        lazyImagesPositions.push(
          lazyImg.getBoundingClientRect().top + pageYOffset
        );
        lazyScrollCheck();
      }
    });
  }

  window.addEventListener("scroll", lazyScroll);

  function lazyScroll() {
    if (document.querySelectorAll("img[data-src]").length > 0) {
      lazyScrollCheck();
    }
  }

  function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
      (imgItem) => pageYOffset > imgItem - windowHeight
    );
    if (imgIndex >= 0) {
      if ($lazyImages[imgIndex].dataset.src) {
        $lazyImages[imgIndex].src = $lazyImages[imgIndex].dataset.src;
        $lazyImages[imgIndex].removeAttribute("data-src");
        setTimeout(() => {
          $lazyImages[imgIndex].parentElement.classList.remove("loading");
        }, 500);
      }
      delete lazyImagesPositions[imgIndex];
    }
  }
  /** End LazyLoad Images */

  // Hamburger Menu
  setTimeout(() => {
    const $hamburgerBtns = document.querySelectorAll(".hamburger");
    const $overlayMnu = document.querySelector(".overlay-nav");
    $hamburgerBtns.forEach((burgerBtn) => {
      if (burgerBtn) {
        burgerBtn.addEventListener("click", function () {
          if (this.classList.contains("is-active")) {
            this.classList.remove("is-active");
            $overlayMnu.classList.remove("active");
            document.body.style.overflow = "";
          } else {
            this.classList.add("is-active");
            $overlayMnu.classList.add("active");
            document.body.style.overflow = "hidden";
          }
        });
      }
    });
  }, 500);

  // Create a new instance of Headhesive || Липкое меню
  const header = new Headhesive(".header", {
    offset: 120,
  });

  const additionListSlider = new Swiper(".addition-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    breakpoints: {
      767: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      991: {
        slidesPerView: 5,
      },
    },
  });

  const $cartHeaderBackBtn = document.querySelectorAll(
    ".cart-header .back-btn span"
  );
  $cartHeaderBackBtn.forEach((cartHeaderItem) => {
    window.innerWidth <= 1200
      ? (cartHeaderItem.innerHTML = "Back")
      : (cartHeaderItem.innerHTML = "Back to menu");
  });

  /** Banner Slider */
  const banneSlider = new Swiper(".banner-slider", {
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".banner-slider__next",
      prevEl: ".banner-slider__prev",
    },
    pagination: {
      el: ".banner-slider__pagination",
    },
    breakpoints: {
      1200: {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
      },
      767: {
        spaceBetween: 15,
      },
    },
  });
  /** END Banner Slider */

  const $cookieCloseBtn = document.querySelector(".cookie-message__close");
  if ($cookieCloseBtn) {
    $cookieCloseBtn.addEventListener("click", function () {
      this.parentElement.style.display = "none";
    });
  }

  /* JQUERY FUNCTIONS !!!!!!!!! */

  /** ПЛАВНЫЙ СКРОЛЛ */
  $("a.nav-link").mPageScroll2id({
    offset: 100,
    scrollSpeed: 700,
  });
  /** END ПЛАВНЫЙ СКРОЛЛ */

  const $currentHeader = $(".header");
  $(".main-nav__item").on("mouseenter", function () {
    if ($currentHeader.hasClass("headhesive--stick")) {
      $(".header.headhesive--stick .main-nav__item")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
      $(this).find(".main-nav__link").removeClass("active");
    } else {
      $(".header .main-nav__item")
        .not(".header.headhesive .main-nav__item")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    }
  });
  $(".sub-menu").on("mouseleave", function () {
    $(".main-nav__item").removeClass("active");
  });

  $(".header .cart.link").on("mouseenter", function () {
    if ($currentHeader.hasClass("headhesive--stick")) {
      $(".header.headhesive--stick .cart-block").addClass("active");
    } else {
      $(".header .cart-block")
        .not(".header.headhesive .cart-block")
        .addClass("active");
    }
  });

  $(".header .cart-block .popup-cart").on("mouseleave", function () {
    $(".header .cart-block").removeClass("active");
  });

  /* END JQUERY FUNCTIONS !!!!!!!!! */
});
