// header hamburger menu
let scrollbar =
  document.querySelector("section.projects div.projects-slider")
    .firstElementChild.offsetHeight -
  document.querySelector("section.projects div.projects-slider")
    .firstElementChild.clientHeight;

let button = document.querySelector("button.nav-hamburger");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  if (button.classList.contains("active")) {
    document.querySelector("nav.header-nav").style.top =
      document.querySelector("div.header-top").offsetHeight + "px";
    document.querySelector("div.grey-effect").style.backgroundColor = "#000";
    document.querySelector("div.grey-effect").style.zIndex = "50";
    document.documentElement.style.overflow = "hidden";
    // document.querySelector("div.header-top").style.paddingRight =
    //   parseFloat(
    //     getComputedStyle(document.querySelector("div.header-top")).paddingRight
    //   ) +
    //   scrollbar +
    //   "px";
    document.querySelector("div.grey-effect").style.display = "block";
  } else {
    document.querySelector("div.grey-effect").style.display = "none";
    document.querySelector("nav.header-nav").style.top = "-300px";
    document.querySelector("div.grey-effect").style.backgroundColor =
      "transparent";
    document.querySelector("div.grey-effect").style.zIndex = "-50";
    document.documentElement.style.overflow = "";
    ("transparent");
    // document.querySelector("div.header-top").style.paddingRight =
    //   parseFloat(
    //     getComputedStyle(document.querySelector("div.header-top")).paddingRight
    //   ) -
    //   scrollbar +
    //   "px";
  }
});

let services = document.querySelector("div.service-items");

services.style.marginBottom = "-" + scrollbar + "px";

if (window.matchMedia("(max-width: 690px)").matches) {
  document
    .querySelector("main")
    .append(document.querySelector("div.social-links"));
  if (document.querySelector("div.header-top > button.solid-button"))
    document.querySelector("div.header-top > button.solid-button").remove();
}

if (window.matchMedia("(max-width: 768px)").matches) {
  document
    .querySelector("div.header-top > div.header-logo")
    .after(document.querySelector("nav.header-nav > button"));
}
