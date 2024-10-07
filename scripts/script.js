let btn_primary = document.querySelector(".btn-primary");
let choynak = document.querySelector(".choynak");
let rect = document.querySelector(".water");
let newDay = document.querySelector(".theme-switch__checkbox");
let textElement = document.querySelector(".stroke-text");
let textshadow = document.querySelector(".h1bu");
let avatarshadow = document.querySelector(".dark-avatar");
let subtitle = document.querySelector(".subtitle");
let teaSound = document.querySelector(".tea-sound")


// Boshlang'ich suvdan foydalanish uchun
rect.setAttribute("class", "");

// Hover uchun animatsiyalar
btn_primary.addEventListener("mouseover", function () {
  choynak.classList.add("choynak-anim");
  rect.setAttribute("class", "water");
  setTimeout(function() {
    teaSound.play()
}, 1000);


});

btn_primary.addEventListener("mouseout", function () {
  choynak.classList.remove("choynak-anim");
  rect.setAttribute("class", "");
});

// Kun-tun rejimi o'zgarishi
newDay.addEventListener("change", function () {
  document.body.classList.toggle("qora");
  document.body.classList.toggle("dark-mode");
  textshadow.classList.toggle("text-shadow");
  subtitle.classList.toggle("dark-subtitle");
  btn_primary.classList.toggle("dark-btn");
  avatarshadow.classList.toggle("dark-avatar");

  // Stroke rangini o'zgartirish
  if (newDay.checked) {
    textElement.style.stroke = "rgba(255, 255, 255, 0.5)"; // oq rang
  } else {
    textElement.style.stroke = "rgba(0, 0, 0, 0.5)"; // qora rang
  }
});


// boshqa pagega o'tkazish

btn_primary.addEventListener("click", function () {
  setTimeout(function() {
    window.location.href = "purchase.html"; 
}, 4000);
});