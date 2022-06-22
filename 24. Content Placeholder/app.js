const loading_blocks = document.querySelectorAll(".loading_block");
const header = document.querySelector(".header");
const title = document.querySelector(".title");
const detail = document.querySelector(".detail");
const portrait = document.querySelector(".portrait");
const name = document.querySelector(".name");
const birthday = document.querySelector(".birthday");

const data = {
 header_bg_URL: "./img/bg.png",
 title: "I'm so weak, out of power :(",
 detail: "Can't make this good as the example",
 portrait_bg_URL: "./img/bg.png",
 name: "Joe",
 birthday: "20010803"
};

setTimeout(() => {
 header.innerHTML = `<img src="${data.header_bg_URL}"/>`;
 title.innerHTML = `<strong>${data.title}</strong>`;
 detail.innerHTML = data.detail;
 portrait.innerHTML = `<img src="${data.portrait_bg_URL}"/>`;
 name.innerHTML = data.name;
 birthday.innerHTML = data.birthday;
}, 2000);