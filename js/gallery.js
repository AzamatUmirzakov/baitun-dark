let list = document.querySelector("ul.projects-slider-inside");
let margin =
  document.querySelector("section.projects div.projects-slider")
    .firstElementChild.offsetHeight -
  document.querySelector("section.projects div.projects-slider")
    .firstElementChild.clientHeight;

let sources = [
  [
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
  ],
  [
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
  ],
  [
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
  ],
  [
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
  ],
  [
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
  ],
  [
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
  ],
  [
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
  ],
  [
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
  ],
  [
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
  ],
  [
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
    "assets/images/project-1-1.png",
  ],
];
list.addEventListener("click", (e) => {
  let target = e.target;
  if (target.parentElement.tagName != "LI") {
    return false;
  }
  target = e.target.parentElement;
  if (document.querySelector("div.gallery-popup")) {
    document.querySelector("div.gallery-popup").remove();
  }
  let popup = document.createElement("div");
  let inside = document.createElement("div");
  inside.classList.add("center");
  inside.classList.add("gallery-popup-inside");
  popup.className = "gallery-popup";
  let name = document.createElement("h1");
  name.innerHTML = target.querySelector("p.item-name").innerHTML;
  let back_button = document.createElement("button");
  back_button.className = "back-button";
  back_button.append(document.createElement("img"));
  back_button.querySelector("img").src = "assets/images/back-button.svg";
  back_button.addEventListener("click", () => {
    popup.style.top =
      window.pageYOffset +
      document.querySelector("div.header-top").offsetHeight +
      50 +
      "px";
    popup.style.opacity = "0";
    popup.ontransitionend = function () {
      popup.remove();
      popup.ontransitionend = null;
    };
    document.body.style.overflow = "";
  });
  inside.append(name, back_button);
  let index = Array.from(list.children).indexOf(target);
  let source = sources[index];
  for (let image of source) {
    let img = document.createElement("img");
    img.src = image;
    inside.append(img);
  }

  let i_want_it = document.createElement("h2");
  i_want_it.innerHTML = "Хочу так же!";
  let bottom_p = document.createElement("p");
  bottom_p.innerHTML = "Сначала заполните заявку";

  let application_button = document.createElement("button");
  application_button.innerHTML = "ОСТАВИТЬ ЗАЯВКУ";
  application_button.addEventListener("click", () => {
    back_button.dispatchEvent(new Event("click"));
    document.querySelector("section.idea-form").scrollIntoView(true);
  });

  inside.append(i_want_it, bottom_p, application_button);

  popup.append(inside);
  document.body.append(popup);
  popup.style.position = "absolute";
  popup.style.opacity = "0";
  popup.style.top = window.pageYOffset + 100 + "px";
  popup.style.left = "0";
  popup.style.transition = "all 0.3s ease-in-out";
  popup.style.top = window.pageYOffset + "px";
  popup.style.opacity = "1";
  document.body.style.overflow = "hidden";
});
