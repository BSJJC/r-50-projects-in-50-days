const [img] = document.getElementsByTagName("img");
let [num] = document.getElementsByClassName("num");

window.onload = function () {
 img.classList.add("clear");
 let start = 100;
 let int = setInterval(() => {
  if (start <= 0) {
   num.style.opacity = "0";
   clearInterval(int);
   return;
  }
  else {
   num.innerHTML = start + "%";
   num.style.opacity = start / 100;
   start--
  }
 }, 10);
}