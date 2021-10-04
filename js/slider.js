let section = document.querySelector("section.projects");
let slider = document.querySelector("section.projects div.projects-slider");

let button_right = document.querySelector("button.slider-right");
let button_left = document.querySelector("button.slider-left");

// making padding
let padding_left =
  parseFloat(
    getComputedStyle(section.previousElementSibling.querySelector("div.center"))
      .marginLeft
  ) + "px";

for (let child of section.firstElementChild.children) {
  if (child.className != "projects-slider-wrap") {
    child.style.marginLeft = padding_left;
  }
}

let scrollbar_width =
  slider.firstElementChild.offsetHeight - slider.firstElementChild.clientHeight;

slider.style.width = "calc(100vw - " + scrollbar_width + "px)";

// slider.style.marginRight = "-" + scrollbar_width + "px";
if (!window.matchMedia("(max-width: 768px").matches) {
  slider.style.marginBottom = "-" + scrollbar_width + "px";
  slider.firstElementChild.style.marginBottom = "-" + scrollbar_width + "px";
}
slider.firstElementChild.style.paddingLeft = padding_left;
slider.firstElementChild.style.paddingRight = padding_left;

let scroller = document.querySelector(".slider-scroll");
let max_scroller_margin =
  scroller.offsetWidth - scroller.firstElementChild.offsetWidth;
let max_scroll = slider.scrollWidth - slider.offsetWidth;

for (let child of slider.querySelector("ul").children) {
  child.ondragstart = function () {
    return false;
  };
}

slider.onscroll = function () {
  if (
    Math.ceil(slider.scrollLeft) == max_scroll ||
    Math.floor(slider.scrollLeft) == max_scroll
  ) {
    button_right.style.opacity = "0";
  } else {
    button_right.style.opacity = "1";
  }
  if (slider.scrollLeft > 0) {
    button_left.style.opacity = "1";
  } else {
    button_left.style.opacity = "0";
  }
  let percent = slider.scrollLeft / max_scroll;
  scroller.firstElementChild.style.marginLeft =
    percent * max_scroller_margin + "px";
};

button_left.onclick = function () {
  slider.scrollLeft -= 400;
};
button_right.onclick = function () {
  slider.scrollLeft += 400;
};
