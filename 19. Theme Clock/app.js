const btn = document.querySelector(".change");
const second_hand = document.querySelector(".second_hand");
const minute_hand = document.querySelector(".minute_hand");
const hour_hand = document.querySelector(".hour_hand");
const time_num = document.querySelector(".time");
const date = document.querySelector(".date");

const week = [
 "MONDAY",
 "TUESDAY",
 "WEDNESDAY",
 "THURSDAY",
 "FRIDAY",
 "SATURDAY",
 "SUNDAY"
];
const month = [
 "JAN",
 "FEB",
 "MAR",
 "APR",
 "MAY",
 "JUN",
 "JUL",
 "AUG",
 "SEP",
 "OCT",
 "NOV",
 "DEC"
]

function GetTime() {
 const data = new Date();
 const sec = data.getSeconds() + 1;
 const min = data.getMinutes();
 const hou = data.getHours();
 return [sec, min, hou];
}

function SetTime() {
 const time = GetTime();
 second_hand.style.transform = `rotate(${time[0] * 6 + 90}deg)`;
 minute_hand.style.transform = `rotate(${time[1] * 6 + 90}deg`;
 hour_hand.style.transform = `rotate(${(time[2] % 12 > 0 ? time[2] % 12 : time[2]) * 30 + 90}deg)`;

 time_num.innerHTML = `${time[2]} ${time[1]} ${time[2] < 12 ? "AM" : "PM"}`;
 date.innerHTML =
  `${week[new Date().getDay() - 1]}, ${month[new Date().getMonth()]}   <span>${new Date().getDate()}</span>`;
}

btn.addEventListener("click", function () {
 document.querySelector("html").classList.toggle("dark");
 btn.innerHTML === "Dark Mode"
  ? btn.innerHTML = "Light Mode"
  : btn.innerHTML = "Dark Mode";
})

SetTime();
setInterval(SetTime, 500);