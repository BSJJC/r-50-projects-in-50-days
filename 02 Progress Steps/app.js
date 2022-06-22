const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const progress = document.querySelector(".progress");

let all_icons = document.querySelectorAll(".icon");
let icons_length = document.querySelectorAll(".icon").length;
let currentActive = 0;

const update = function () {
 progress.style.width = (100 / (icons_length - 1)) * currentActive + "%";

 if (currentActive === 0) {
  prev.classList = "prev disable";
  next.classList = "nexnt active";
 }
 else if (currentActive === icons_length - 1) {
  prev.classList = "prev active";
  next.classList = "next disable";
 }
 else {
  prev.classList = "prev active";
  next.classList = "next active";
 }
};

next.addEventListener("click", function () {
 currentActive++;
 if (currentActive >= icons_length) currentActive = icons_length - 1;

 all_icons[currentActive].classList.add("reach");
 update();
})

prev.addEventListener("click", function () {
 currentActive--;
 if (currentActive < 0) currentActive = 0;

 all_icons[currentActive + 1].classList.remove("reach");
 update();
})