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
