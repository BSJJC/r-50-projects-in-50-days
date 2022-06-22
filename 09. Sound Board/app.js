const sounds = ["moon", "fish", "bridge"];

function StopSound() {
 sounds.forEach(e => {
  const sound = document.getElementById(e);

  sound.pause();
  sound.currentTime = 0;
 });
}

sounds.forEach(e => {
 const el = document.createElement("button");
 el.innerHTML = e;
 el.id = e;
 el.addEventListener("click", function () {
  StopSound();
  document.getElementById(this.innerHTML).play();
 })
 document.body.appendChild(el);
});