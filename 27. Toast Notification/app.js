const btn = document.getElementsByTagName("button")[0];
const notes = document.querySelector(".notes");

const colors = ["#BC656A", "#E9786F", "#ECD9C2", "#E2E5BA", "#7D9793"];
const texts = ["Msg one", "Msg two", "Msg three", "Msg four", "Msg five"];

let msg_count = 0;
let msg_reset = 3;
let timer;

btn.addEventListener("click", function () {
 if (timer) { msg_reset = 3; }
 else {
  timer = setInterval(() => {
   msg_reset--;
   if (msg_reset === 0) {
    msg_count = 0;
    clearInterval(timer);
   }
  }, 1000);
 }

 const note = document.createElement("div");
 note.classList = "note";
 note.style.background = colors[Math.floor(Math.random() * 5)];
 note.innerHTML = texts[msg_count];
 notes.appendChild(note);

 setTimeout(() => {
  note.classList.add("hide");
  setTimeout(() => {
   note.remove();
  }, 300);
 }, 3000);

 msg_count + 1 > texts.length - 1 ? msg_count = 0 : msg_count++;
});