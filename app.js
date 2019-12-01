const canvas = document.querySelector(".canvas");

let painting = false;

function getOffset(event) {
   const x = event.offsetX;
   const y = event.offsetY;
}

function beginPainting(event) {
   painting = true;
}

function endPainting(event) {
   painting = false;
}

canvas.addEventListener("mousemove", getOffset);
canvas.addEventListener("mousedown", beginPainting);
canvas.addEventListener("mouseup", endPainting)
canvas.addEventListener("mouseleave", endPainting)
