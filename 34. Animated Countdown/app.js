const container = document.querySelector(".container");
const nums = document.getElementsByClassName("num");
const final = document.querySelector(".final");
const [replay] = document.getElementsByTagName("button");

replay.addEventListener("click", function () {
 container.classList = "container";
 final.classList = "final hide";
 RunAnimation();
});

function RunAnimation() {
 let delay = 0;
 for (let i = 0; i < nums.length; i++) {
  nums[i].classList.add("rotate");
  nums[i].style.animationDelay = `${i}s`;
  delay++;
 };

 setTimeout(() => {
  container.classList.add("hide");
  final.classList = "final show";
  for (let i = 0; i < nums.length; i++) {
   nums[i].classList.remove("rotate");
  };
 }, delay * 1000);
};

RunAnimation();