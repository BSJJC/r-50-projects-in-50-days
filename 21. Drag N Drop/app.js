const inclusion = document.querySelector(".inclusion");
const blocks = document.querySelectorAll(".block");

inclusion.addEventListener("drag", StartDrag);
inclusion.addEventListener("dragend", EndDrag);

blocks.forEach(b => {
 b.addEventListener("dragenter", DragEnter);
 b.addEventListener("dragover", DragOver);
 b.addEventListener("dragleave", DragLeave);
 b.addEventListener("drop", Drop);
});

function StartDrag() {
 this.classList.add("hide");
};

function EndDrag() {
 this.classList.remove("hide");
};

function DragOver(e) {
 e.preventDefault();
};

function DragEnter() {
 this.classList.add("drag_over");
};

function DragLeave() {
 this.classList.remove("drag_over");
};

function Drop() {
 this.append(inclusion);
 this.classList = "block";
};