import $ from "jquery";
window.jQuery = $;
window.$ = $; // import module example (npm i -D jquery)

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu
  const $hamburgerBtn = document.querySelector(".hamburger");
  const $overlayMnu = document.querySelector(".overlay-nav");
  if ($hamburgerBtn) {
    $hamburgerBtn.addEventListener("click", function () {
      this.classList.toggle("is-active");
      $overlayMnu.classList.toggle("active");
    });
  }

  $(".main-nav__item").on("mouseenter", function () {
    $(".main-nav__item")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
  $(".sub-menu").on("mouseleave", function () {
    $(".main-nav__item").removeClass("active");
  });
});
