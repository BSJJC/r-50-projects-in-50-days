const inputs = document.getElementsByTagName("textarea")[0];
const area = document.getElementsByClassName("choices")[0];


function Clear() {
 [...document.getElementsByClassName("choice")].forEach(el => {
  el.classList = "choice";
 });
};

function Select(length) {
 document.getElementsByClassName("choice")[Math.floor(Math.random() * length)].classList += " active";
}

inputs.addEventListener("keyup", function (e) {
 const choices = inputs.value.split("，").filter(function (x) {
  return x !== "";
 });

 if (e.keyCode === 13) {
  inputs.value = "";

  let count = 0;
  let timer = setInterval(() => {
   Clear();
   Select(choices.length - 1)
   count++
   if (count === 20) {
    clearInterval(timer);
   }
  }, 50);

  return;
 };

 area.innerHTML = "";
 choices.forEach(c => {
  area.innerHTML += `<div class="choice">${c}</div>`
 });
});