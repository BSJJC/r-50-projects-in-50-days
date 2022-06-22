const imgs = document.querySelector(".imgs");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");

let left = parseInt(getComputedStyle(imgs).left);
let timer;

function RunInterval() {
 timer = setInterval(() => {
  left - 450 < -900 ? left = 900 : left -= 450;
  imgs.style.left = `${left}px`;
 }, 1000);
}

pre.addEventListener("click", function () {
 clearInterval(timer);
 left + 450 > 900 ? left = -900 : left += 450;
 imgs.style.left = `${left}px`;
 RunInterval();
});

next.addEventListener("click", function () {
 clearInterval(timer);
 left - 450 < -900 ? left = 900 : left -= 450;
 imgs.style.left = `${left}px`;
 RunInterval();
});

RunInterval();