const btn = document.querySelector(".btn");
const nav = document.getElementsByTagName("nav")[0];

btn.addEventListener("click", function () {
 [...btn.children].forEach(el => {
  el.classList.contains("line1")
   ? el.classList.toggle("one_rotate")
   : el.classList.toggle("two_rotate")
 });
 nav.classList.toggle("active");
})