const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
 if (btn.children.length === 1) return;
 const circle = document.createElement("div");
 circle.classList = "circle";
 circle.style.left = `${e.layerX}px`;
 circle.style.top = `${e.layerY}px`;
 btn.appendChild(circle);

 setTimeout(() => { circle.remove(); }, 500);
});