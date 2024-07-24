import "./styles.css";
import "./scss/styles.scss";
import "./fonts/fonts.scss";
import "./reset.css";
import { Swiper } from "swiper/bundle";
import * as bootstrap from "bootstrap";
import Alert from "bootstrap/js/dist/alert";
import "swiper/css";
// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from "bootstrap";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "/node_modules/swiper/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./scss/swiper.scss";
console.log("1,2,3");
console.log(Swiper);
var swiper1 = new Swiper(".Swiper1", {
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper2 = new Swiper(".Swiper2", {
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});

var swiper3 = new Swiper(".Swiper3", {
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
});

let openMenuButton = document.querySelector("#menu__button");
let menuContainer = document.querySelector(".menu-container");
let hidden = document.querySelector(".menu-hidden");
let menuOpen = document.querySelector(".menu-open");
let body = document.querySelector(".main");
let header = document.querySelector(".header");
let closeMenuButton = document.querySelector(".menu-hidden-close");
let hiddenOpenButton = document.querySelector("#menu__button-close");
openMenuButton.addEventListener("click", function () {
  hidden.classList.remove("menu-hidden");
  header.classList.add("blur");
  menuContainer.classList.add(".menu-container-hidden");
  closeMenuButton.classList.remove(".menu-hidden-close");
  body.classList.add("blur");
});
hiddenOpenButton.addEventListener("click", function () {
  menuOpen.classList.add("menu-hidden");
  header.classList.remove("blur");
  body.classList.remove("blur");
  menuContainer.classList.remove(".menu-container-hidden");
  closeMenuButton.classList.add(".menu-hidden-close");
});

let showMoreButton = document.querySelector("#showMore-button");
let showMore = document.querySelector(".showMore");
let hiddenM = document.querySelectorAll(".hidden--m");
let hiddenL = document.querySelectorAll(".hidden--l");
let showLess = document.querySelector(".showLess--hidden");
let showLessButton = document.querySelector("#showLess-button");
showMoreButton.addEventListener("click", function () {
  for (let i = 0; i < hiddenM.length; i++) {
    hiddenM[i].classList.remove("hidden--m");
  }
  for (let i = 0; i < hiddenL.length; i++) {
    hiddenL[i].classList.remove("hidden--l");
  }
  showMore.classList.add("showMore--hidden");
  showLess.classList.remove("showLess--hidden");
});
showLessButton.addEventListener("click", function () {
  for (let i = 0; i < hiddenM.length; i++) {
    hiddenM[i].classList.add("hidden--m");
  }
  for (let i = 0; i < hiddenL.length; i++) {
    hiddenL[i].classList.add("hidden--l");
  }
  showMore.classList.remove("showMore--hidden");
  showLess.classList.add("showLess--hidden");
});
