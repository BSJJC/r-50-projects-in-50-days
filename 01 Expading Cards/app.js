const outter_container = document.querySelector(".outter_container");
const containers = document.querySelectorAll(".container");

const all_reset = function () {
 containers.forEach(e => {
  e.classList.remove("active");
 })
}

outter_container.onclick = function (e) {
 let clicked_el = null;
 if (e.target.tagName == "H2" || e.target.tagName == "IMG") {
  clicked_el = e.target.parentNode;
 }
 else {
  clicked_el = e.target;
 }

 all_reset();
 clicked_el.classList.add("active")
}