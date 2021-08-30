import $ from "jquery";
window.jQuery = $;
window.$ = $; // import module example (npm i -D jquery)
import Headhesive from "headhesive";

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

  /* JQUERY FUNCTIONS !!!!!!!!! */

  const $currentHeader = $(".header");
  $(".main-nav__item").on("mouseenter", function () {
    if ($currentHeader.hasClass("headhesive--stick")) {
      $(".header.headhesive--stick .main-nav__item")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
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

  /* END JQUERY FUNCTIONS !!!!!!!!! */
});
