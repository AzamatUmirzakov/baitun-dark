document.addEventListener("scroll", () => {
  if (
    window.pageYOffset + document.querySelector("div.header-top").offsetHeight >
    document.querySelector("header.page-header").offsetHeight
  ) {
    document.querySelector("div.header-top button.solid-button").style.display =
      "inline-block";
  } else {
    document.querySelector("div.header-top button.solid-button").style.display =
      "none";
  }
});
let determine_position = () => {
  let nav = document.querySelector("nav.header-nav");
  let scroll = window.pageYOffset;
  let header = document.querySelector("header.page-header");
  let services = document.querySelector("section.services");
  let projects = document.querySelector("section.projects");
  let about = document.querySelector("section.about");
  let header_top = document.querySelector(".header-top");
  if (
    scroll >
    header.getBoundingClientRect().top +
      window.pageYOffset -
      header_top.offsetHeight
  ) {
    if (nav.querySelector("a.active")) {
      nav.querySelector("a.active").classList.remove("active");
    }
    nav.querySelector("a:nth-child(1)").classList.add("active");
  }
  if (
    scroll >
    about.getBoundingClientRect().top +
      window.pageYOffset -
      header_top.offsetHeight
  ) {
    if (nav.querySelector("a.active")) {
      nav.querySelector("a.active").classList.remove("active");
    }
    nav.querySelector("a:nth-child(2)").classList.add("active");
  }
  if (
    scroll >
    projects.getBoundingClientRect().top +
      window.pageYOffset -
      header_top.offsetHeight
  ) {
    if (nav.querySelector("a.active")) {
      nav.querySelector("a.active").classList.remove("active");
    }
    nav.querySelector("a:nth-child(3)").classList.add("active");
  }
  if (
    scroll >
    services.getBoundingClientRect().top +
      window.pageYOffset -
      header_top.offsetHeight
  ) {
    if (nav.querySelector("a.active")) {
      nav.querySelector("a.active").classList.remove("active");
    }
    nav.querySelector("a:nth-child(4)").classList.add("active");
  }
};

document.addEventListener("DOMContentLoaded", determine_position);
document.addEventListener("scroll", determine_position);

document
  .querySelector("div.header-top button.solid-button")
  .addEventListener("click", () => {
    document.querySelector("section.idea-form").scrollIntoView(true);
  });
