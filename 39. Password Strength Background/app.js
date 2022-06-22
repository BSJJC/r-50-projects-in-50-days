const [, psw] = document.getElementsByClassName("form-input");
const [bg] = document.getElementsByClassName("bg");

psw.addEventListener("input", function () {
 bg.style.filter = `blur(${20 - (this.value.length) * 2}px)`;
});