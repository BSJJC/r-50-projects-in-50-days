const btns = document.getElementsByClassName("button");

[...btns].forEach(btn => {
 btn.addEventListener("click", function () {
  btn.parentNode.parentNode.classList.toggle("active");
 })
});