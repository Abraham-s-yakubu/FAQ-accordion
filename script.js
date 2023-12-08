"use strict";
const fags = document.querySelectorAll(".fag");
let active = null;
fags.forEach(function (fag) {
  fag.addEventListener("click", () => {
    if (fag.classList.contains("active")) {
      fag.querySelector(".btn").src = "./assets/images/icon-plus.svg";
    } else {
      fag.querySelector(".btn").src = "./assets/images/icon-minus.svg";
    }
    if (fag.classList.contains("active")) {
      fag.classList.remove("active");
    } else {
      fag.classList.add("active");
      fags.forEach((cls) => {
        if (cls != fag) {
          cls.classList.remove("active");
          cls.querySelector(".btn").src = "./assets/images/icon-plus.svg";
        }
      });
    }
  });
});
