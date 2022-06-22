const container = document.querySelector(".container");

function LoadImgs(rows) {
 if (rows === undefined) rows = 5;

 for (let i = 0; i < rows * 3; i++) {
  CreateImg();
 }
};

function CreateImg() {
 const template = document.createElement("img");
 const img_id = Math.ceil(Math.random() * 1000);
 template.src = `https://source.unsplash.com/random/${img_id}`;

 container.append(template);
};

function LoadMore() {
 document.addEventListener("scroll", function () {

  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  const scrollBottom = scrollHeight - windowHeight - scrollTop;

  if (scrollBottom < 100) {
   LoadImgs(3);
  };
 })
};

function Init() {
 LoadImgs(5);
 LoadMore();
};

Init();