const hint = document.querySelector(".hint");
const info = document.querySelector(".info");
const key = document.querySelector(".key");
const key_code = document.querySelector(".key_code");
const code = document.querySelector(".code");

document.addEventListener("keypress", function (e) {
 hint.classList.add("hide");
 info.classList.remove("hide");

 key.innerHTML = e.key;
 key_code.innerHTML = e.keyCode;
 code.innerHTML = e.code;
})