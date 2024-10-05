let btn_primary = document.querySelector(".btn-primary");
let choynak = document.querySelector(".choynak");
let rect = document.querySelector(".water");
let raxmat = document.querySelector(".eraxmat");
let newDay = document.querySelector(".theme-switch__checkbox");
let textElement = document.querySelector(".stroke-text");

rect.setAttribute("class", "");

btn_primary.addEventListener("mouseover", function () {
  choynak.classList.add("choynak-anim");
  rect.setAttribute("class", "water");
});

btn_primary.addEventListener("mouseout", function () {
  choynak.classList.remove("choynak-anim");
  rect.setAttribute("class", "");
});

btn_primary.addEventListener("click", function () {
  raxmat.style.left = "0";
});

// kun tun rejimi
newDay.addEventListener("change", function () {
  document.body.classList.toggle("qora");

  if (newDay.checked) {
    textElement.setAttribute("stroke", "rgba(255, 255, 255, 0.5)");
  } else {
    textElement.setAttribute("stroke", "rgba(0, 0, 0, 0.5)");
  }
});
