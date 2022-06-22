const text = document.querySelector(".text");
const [speed_input] = document.getElementsByTagName("input");

const str = "diannaobaozhale";
let index = 0;
let speed = 300 / speed_input.value;

function Write() {
 text.innerHTML += str[index];
 index++;

 if (index > str.length) {
  index = 0;
  text.innerHTML = ""
 };

 setTimeout(Write, speed);
};

speed_input.addEventListener("input", function () {
 speed = 300 / this.value;
})

Write();