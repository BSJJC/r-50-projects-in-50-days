const container = document.querySelector(".container");
const btns = document.getElementsByTagName("button");
let imgs = [];
const img_arr = [GetImg(), GetImg(), GetImg(), GetImg(), GetImg()];

function GetImg() {
  return `https://api.ghser.com/random/api.php?ran=${Math.random()}`
};

function Init() {
  for (let i = 0; i < img_arr.length; i++) {
    const img = document.createElement("img");
    img.src = img_arr[i];
    if (i === 0) {
      img.classList = "show";
    }
    container.appendChild(img);
  };
  imgs = document.getElementsByTagName("img");
};

function ImgChange(direction) {
  if (direction === "next") {
    imgs[POSITION].classList.remove("show");
    POSITION + 1 <= imgs.length - 1 ? POSITION += 1 : POSITION = 0
    imgs[POSITION].classList.add('show');
  }
  else {
    imgs[POSITION].classList.remove("show");
    POSITION - 1 < 0 ? POSITION = imgs.length - 1 : POSITION -= 1
    imgs[POSITION].classList.add('show');
  }
};

function BgChange() {
  document.body.style.backgroundImage = `url(${img_arr[POSITION]})`;
  console.log(img_arr);
}

let POSITION = 0;

[...btns].forEach(b => {
  b.classList.contains("next")
    ? b.addEventListener("click", function () { ImgChange("next"); BgChange(); })
    : b.addEventListener("click", function () { ImgChange("pre"); BgChange(); })
});

Init();
BgChange();