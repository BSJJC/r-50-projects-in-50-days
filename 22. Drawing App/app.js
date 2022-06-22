const panel = document.querySelector(".panel");
const reduce = document.querySelector(".reduce");
const increase = document.querySelector(".increase");
const size_show = document.querySelector(".size_show");
const color_select = document.querySelector(".color");
const clear = document.querySelector(".clear");

let ctx = panel.getContext('2d');
let STATE = false;
let beginX = undefined;
let beginY = undefined;
let size = 10;
let color = "black";

function DrawCircular(x, y) {
 ctx.beginPath();
 ctx.fillStyle = color;
 ctx.arc(x, y, size, 0, Math.PI * 2);
 ctx.fill();
};

function DrawLine(beginX, beginY, endX, endY) {
 ctx.beginPath();
 ctx.moveTo(beginX, beginY);
 ctx.lineTo(endX, endY);
 ctx.strokeStyle = color;
 ctx.lineWidth = size * 2;
 ctx.stroke();
}

panel.addEventListener("mousedown", function (e) {
 STATE = !STATE;

 beginX = e.offsetX;
 beginY = e.offsetY;
});
panel.addEventListener("mouseup", function () {
 STATE = !STATE;

 beginX = undefined;
 beginY = undefined;
});

panel.addEventListener("mousemove", function (e) {
 if (!STATE) return;
 const endX = e.offsetX;
 const endY = e.offsetY;

 DrawCircular(endX, endY);
 DrawLine(beginX, beginY, endX, endY);

 beginX = endX;
 beginY = endY;
});

reduce.addEventListener("click", function () {
 size - 5 <= 5 ? size = 5 : size -= 5;
 size_show.innerHTML = size;
});
increase.addEventListener("click", function () {
 size + 5 >= 50 ? size = 50 : size += 5;
 size_show.innerHTML = size;
});

color_select.addEventListener("change", function (e) {
 color = e.target.value;
});

clear.addEventListener("click", function () {
 ctx.clearRect(0, 0, panel.width, panel.height);
});