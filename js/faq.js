let buttons = document.querySelectorAll("button.faq-question");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    let answer = button.nextElementSibling;
    if (button.dataset.status == "on") {
      answer.style.maxHeight = "0px";
      button.dataset.status = "off";
      answer.style.paddingBottom = "0px";
      answer.style.transform = "translateZ(0)";
    } else {
      button.dataset.status = "on";
      answer.style.maxHeight = "150px";
      if (window.matchMedia("(max-width: 690px)").matches) {
        answer.style.paddingBottom = "20px";
      } else {
        answer.style.paddingBottom = "10px";
      }
      answer.style.transform = "translateZ(0)";
    }
  });
}
