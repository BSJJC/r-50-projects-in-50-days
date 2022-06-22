const [input] = document.getElementsByTagName("input");
const [ul] = document.getElementsByTagName("ul");
let users = [];

let data;

async function GetUser(times) {
 times === undefined ? times = 10 : times;

 await fetch(`https://randomuser.me/api/?results=${times}`)
  .then(res => res.json())
  .then(json => data = json.results)

 document.getElementsByClassName("loading")[0].remove();

 data.forEach(user => {
  const template = document.createElement("li")
  template.innerHTML = `
  <img class="user-profile" src="${user.picture.medium}"></img>
  <div class="user-info">
  <div class="user-name">${user.name.first} ${user.name.last}</div>
  <div class="user-location">${user.location.city}</div>
  </div>
  `
  ul.appendChild(template);

  users.push(template)
 });
};

function UserSearch() {
 const key_word = this.value.toLowerCase();

 users.forEach(item => {
  const el_lower = item.innerText.toLowerCase();

  if (!el_lower.includes(key_word)) item.classList = ("hide");
  else item.classList = "";
 });
};

input.addEventListener("input", UserSearch);

GetUser(20);