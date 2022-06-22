const [side_bar] = document.getElementsByClassName("side-bar");
const [...btns] = document.getElementsByClassName("btn");

btns.forEach(btn => {
 btn.addEventListener("click", function () {
  side_bar.classList.toggle("active");
  side_bar.classList.toggle("close");
 })
});