//import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)

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
});
