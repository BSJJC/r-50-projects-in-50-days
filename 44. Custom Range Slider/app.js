const [range] = document.getElementsByTagName("input");
const [label] = document.getElementsByTagName("label");

range.addEventListener("input", function () {
 const persent = parseInt(range.value);
 const offset_left = 360 * persent * 0.01 - 180;

 label.style.left = offset_left + "px";
 label.innerHTML = range.value;
});