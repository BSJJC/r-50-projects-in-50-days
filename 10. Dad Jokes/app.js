const joke = document.querySelector(".joke");
const btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", GetJoke);

GetJoke();

async function GetJoke() {
 joke.innerHTML = "Loading......";

 const config = {
  headers: {
   Accept: 'application/json',
  },
 };

 fetch("https://icanhazdadjoke.com/", config)
  .then(res => res.json())
  .then(data => { joke.innerHTML = data.joke });
}