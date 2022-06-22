const [rokishi_btn, erisu_btn, shirufi_btn] = document.getElementsByTagName("i");
const [rokishi_img, erisu_img, shirufi_img] = document.getElementsByTagName("img");

const colors = {
 rokishi: "#7989b6",
 shirufi: "#819e65",
 erisu: "#dc6e5b"
};

let shown_img = rokishi_img;
rokishi_btn.style.color = colors["rokishi"];
document.body.style.background = colors["rokishi"];

function Change(targetEL, targetImg) {
 targetEL.addEventListener("click", function () {
  shown_img.classList.toggle("show");
  targetImg.classList.toggle("show");
  shown_img = targetImg;

  document.body.style.background = colors[targetEL.id]

  const btns = document.getElementsByTagName("i");
  [...btns].forEach(el => {
   el.style.color = "";
  });
  targetEL.style.color = colors[targetEL.id];
 });
};

Change(erisu_btn, erisu_img);
Change(shirufi_btn, shirufi_img);
Change(rokishi_btn, rokishi_img);