const ratings = document.getElementsByClassName("rating");
const [container] = document.getElementsByClassName("container");
const [btn] = document.getElementsByTagName("button");

let selected_rating;

[...ratings].forEach(rating => {
 rating.addEventListener("mouseenter", function () {
  this.classList.add("hover-rating");
 });

 rating.addEventListener("mouseleave", function () {
  this.classList.remove("hover-rating");
 });

 rating.addEventListener("click", function () {
  selected_rating
   ? selected_rating.classList.remove("select-rating")
   : selected_rating = this
  this.classList = "rating select-rating";
  selected_rating = this;
 });
});

btn.addEventListener("click", function () {
 if (!selected_rating) return;

 container.classList.add("fade-out");

 const str = selected_rating.getAttribute("str");

 const template = document.createElement("div");
 template.classList = "feedback-container";
 template.innerHTML = `
 <h1>♥</h1>
 <strong>Thank You!</strong>
 <br>
 <strong>Feedback: ${str}</strong>
 <p>We'll use your feedback to <br> improve our customer support</p>
 `

 document.body.appendChild(template);
})