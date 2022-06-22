const container = document.querySelector(".container");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

function Init() {
 for (let i = 0; i < 588; i++) {
  const template = document.createElement("div");
  template.classList = "block";
  template.addEventListener("mouseenter", function () { SetColor(this); });
  template.addEventListener("mouseleave", function () { RemoveColor(this); });
  container.appendChild(template);
 }
};

function SetColor(el) {
 const i = Math.floor(Math.random() * colors.length);
 el.style.background = colors[i];
 el.style.boxShadow = `0 0 2px ${colors[i]}, 0 0 10px ${colors[i]}`;
};

function RemoveColor(el) {
 el.style.background = "rgb(27, 27, 27)";
 el.style.boxShadow = `0 0 2px #000`;
}

Init();