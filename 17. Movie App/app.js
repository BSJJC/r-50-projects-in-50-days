const API_URL =
 `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=380252036c0c9514576ad6b6cd12feb1&page=${Math.ceil(Math.random() * 99 + 1)}`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w300';
const SEARCH_API =
 'https://api.themoviedb.org/3/search/movie?api_key=380252036c0c9514576ad6b6cd12feb1&query=';

const form = document.getElementsByTagName("form")[0];
const search = document.getElementsByTagName("input")[0];
const container = document.querySelector(".container");

function GetData(API) {
 const xhr = new XMLHttpRequest();
 xhr.open("get", API);
 xhr.onload = res => {
  const data = JSON.parse(res.currentTarget.response).results;
  UpData(data);
 };
 xhr.send();
}

function UpData(data) {
 container.innerHTML = "";

 data.forEach(data => {
  const template = document.createElement("div");
  template.classList = "block";
  template.innerHTML = `
  <img src=${IMG_PATH}${data.poster_path}>
   <div class="title">
    <div class="name"><span>${data.original_title}</span></div>
    <div class="vote"><span>${data.vote_average}</span></div>
   </div>
   <div class="info">
    <h2>Overview</h2>
    <p class="des">${data.overview}</p>
   </div>
  `;
  container.appendChild(template);
 });
};

form.addEventListener("submit", function (e) {
 e.preventDefault();

 GetData(`${SEARCH_API}${search.value}`);
})

GetData(API_URL);