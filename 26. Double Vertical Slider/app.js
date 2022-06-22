const [up, down] = document.querySelectorAll(".control_btn");
const [intros, imgs] = document.querySelectorAll(".content");
let INTROS_TOP = 0;
let IMGS_TOP = -200;

function GetTop(state) {
 if (state === "down") {
  IMGS_TOP + 100 > 0 ? IMGS_TOP = -200 : IMGS_TOP += 100;
  INTROS_TOP - 100 < -200 ? INTROS_TOP = 0 : INTROS_TOP -= 100;
 }
 else if (state === "up") {
  IMGS_TOP - 100 < -200 ? IMGS_TOP = -0 : IMGS_TOP -= 100;
  INTROS_TOP + 100 > 0 ? INTROS_TOP = -200 : INTROS_TOP += 100;
 }
};

function Change() {
 intros.style.top = `${INTROS_TOP}vh`;
 imgs.style.top = `${IMGS_TOP}vh`;
};

down.addEventListener("click", function () {
 GetTop("down");
 Change();
});

up.addEventListener("click", function () {
 GetTop("up");
 Change();
});

document.addEventListener("wheel", function (e) {
 if (e.wheelDeltaY === 150) {
  GetTop("up");
  Change();
 }
 else {
  GetTop("down");
  Change();
 }
});

Change();