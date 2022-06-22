const open = document.querySelector(".open");
const close = document.querySelector(".close");
const display_area = document.querySelector(".display_area");

open.onclick = function () {
 display_area.classList.add("show_nav");
};

close.onclick = function () {
 display_area.classList.remove("show_nav");
};