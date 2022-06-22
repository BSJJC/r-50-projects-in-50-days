const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseenter", function () {
 container.classList.add("hover_left");
});
left.addEventListener("mouseleave", function () {
 container.classList.remove("hover_left");
});

right.addEventListener("mouseenter", function () {
 container.classList.add("hover_right");
});
right.addEventListener("mouseleave", function () {
container.classList.remove("hover_right");
});