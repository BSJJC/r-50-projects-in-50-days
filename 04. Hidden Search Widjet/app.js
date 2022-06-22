const btn = document.querySelector(".button_area");
const bar = document.querySelector(".search_bar");

btn.addEventListener("click", function () {
 bar.classList.contains("show")
  ? bar.classList.remove("show")
  : bar.classList.add("show");
 bar.focus();
})