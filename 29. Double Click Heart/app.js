const [h3] = document.getElementsByTagName("h3");
const [img] = document.getElementsByTagName("img");
let liked_count = 0;
let click_times = 0;

img.addEventListener("click", function (e) {
 click_times++;
 if (click_times === 1) {
  setTimeout(() => {
   click_times = 0;
  }, 500);
 }
 else if (click_times === 2) {
  liked_count++;
  h3.innerHTML = `You liked it ${liked_count} times`;
  const temp = document.createElement("div");
  temp.classList = "heart";
  temp.style.top = `${e.pageY - 25}px`;
  temp.style.left = `${e.pageX - 25}px`;
  temp.innerHTML = "♥";
  document.body.append(temp);
  setTimeout(() => {
   temp.remove();
  }, 500);
 };
});