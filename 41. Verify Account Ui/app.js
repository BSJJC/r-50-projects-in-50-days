const slide = document.querySelector(".inputs");
const [...inputs] = document.getElementsByTagName("input");

let startX = 0;
let endX = 0;

function InputCheck(el) {
 if (isNaN(parseInt(el.value))) el.value = ""
 if (inputs[0].value !== "") slide.classList.add("has_input");
};

function InputFocus() {
 for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].value === "") {
   inputs[i].focus();
   break;
  }
 }
};

function SlideIn(e) {
 endX = e.pageX;

 if (startX - endX >= 100) {
  slide.classList = "inputs clear_input";

  setTimeout(() => {
   inputs.forEach(input => {
    input.value = "";
   });

   InputFocus();
   slide.classList = "inputs";
  }, 1000);

  startX = 0;
  endX = 0;
 }
};

inputs.forEach(input => {
 input.addEventListener("input", function () {
  InputCheck(input);
  InputFocus();
 });

 input.addEventListener("focus", InputFocus);
});

slide.addEventListener("mousedown", function (e) { startX = e.pageX });
slide.addEventListener("mouseup", SlideIn)

InputFocus();