const [good, fast, cheap] = document.getElementsByClassName("container");
let queue = [];

function ToggleCheck(el) {
 el.addEventListener("click", function () {
  if (el.classList.contains("unchecked")) {
   el.classList = "container checked";
   AddToQueue(this);
  }
  else {
   el.classList = "container unchecked";
   RemoveFromQueue(this);
  }
 })
};

function AddToQueue(el) {
 if (!queue.includes(el)) queue.push(el);
 if (queue.length === 3) {
  queue[0].classList = "container unchecked";
  queue.splice(0, 1);
 }
};

function RemoveFromQueue(el) {
 queue.splice(queue.indexOf(el), 1);
}

ToggleCheck(good);
ToggleCheck(fast);
ToggleCheck(cheap);
