const blocks = document.querySelectorAll(".block");

window.addEventListener("load", show_block);
window.addEventListener("scroll", show_block);

function show_block() {
 blocks.forEach(b => {
  if (b.getBoundingClientRect().top < this.window.innerHeight - 100) {
   b.classList.add("show");
  }
  else {
   b.classList.remove("show");
  }
 });
}