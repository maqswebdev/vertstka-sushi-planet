/*import $ from "jquery";
window.jQuery = $;
window.$ = $; // import module example (npm i -D jquery)*/
import Headhesive from "headhesive";
import Swiper from "swiper";
import { scrollspy } from "bootstrap";
import Popper from "popper.js";
import mPageScroll2id from "page-scroll-to-id";

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu
  const $hamburgerBtn = document.querySelector(".hamburger");
  const $overlayMnu = document.querySelector(".overlay-nav");
  if ($hamburgerBtn) {
    $hamburgerBtn.addEventListener("click", function () {
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
  // Create a new instance of Headhesive || Липкое меню
  const header = new Headhesive(".header", {
    offset: 120,
    classes: {},
  });

  // SWIPER SLIDERS INIT
  const $mobileMenu = document.querySelector(".mobile-menu");
  function initMobileMenu() {
    const mobileMenuSlider = new Swiper(".mobile-menu", {
      slidesPerView: "auto",
      spaceBetween: window.innerWidth <= 767 ? 8 : 10,
      centeredSlides: true,
      loop: true,
    });
    const $mobileMenuWrapper = document.querySelector(".mobile-menu__wrapper");
    if ($mobileMenuWrapper) {
      setTimeout(() => {
        $mobileMenuWrapper.style.transform = "translate3d(0, 0, 0)";
        $mobileMenuWrapper.style["-webkit-transform"] = "translate3d(0, 0, 0)";
      }, 2000);
    }
  }
  // END SWIPER SLIDERS INIT

  /** START FUNCTIONS ON TABLET AND MOBILE VERSION */
  /*if (window.innerWidth <= 991) {
    initMobileMenu();
  }
  window.addEventListener(
    "resize",
    function () {
      if (
        !$mobileMenu.classList.contains("swiper-container-initialized") &&
        window.innerWidth <= 991
      ) {
        console.log("init");
        initMobileMenu();
      }
    },
    false
  );*/

  /* JQUERY FUNCTIONS !!!!!!!!! */

  /** ПЛАВНЫЙ СКРОЛЛ */
  $("a.nav-link").mPageScroll2id();
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
      console.log("this");
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

  /* END JQUERY FUNCTIONS !!!!!!!!! */
});
