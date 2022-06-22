const container = document.querySelector(".container");
const progress_bar = document.querySelector(".progress-bar");
let now_img;
let next_img;

function Init() {
 const template = document.createElement("img");
 const img_id = Math.random();

 template.src = `https://api.ixiaowai.cn/api/api.php?ran=${img_id}`;
 template.classList = "show";
 template.id = img_id;

 container.append(template);
 now_img = template;

 ImgChange();
};

function ImgChange() {
 progress_bar.classList.toggle("active");

 const template = document.createElement("img");
 const img_id = Math.random();

 template.src = `https://api.ixiaowai.cn/api/api.php?ran=${img_id}`;
 template.classList = "hide";
 template.id = img_id;

 container.append(template);
 next_img = template;

 setTimeout(() => {
  progress_bar.classList.toggle("active");

  now_img.classList = ("hide");
  next_img.classList = ("show");

  document.getElementById(now_img.id).remove();
  now_img = next_img;

  ImgChange();

 }, 5000);
};

Init();