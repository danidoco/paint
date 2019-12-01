const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let painting = false;

canvas.width = 660;
canvas.height = 640;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 1;

function draw(event) {
   const x = event.offsetX;
   const y = event.offsetY;

   if (!painting) {
      ctx.beginPath();
      ctx.moveTo(x, y);
   } else {
      ctx.lineTo(x, y);
      ctx.stroke();
   }
}

function beginPainting(event) {
   painting = true;
}

function endPainting(event) {
   painting = false;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", beginPainting);
canvas.addEventListener("mouseup", endPainting);
canvas.addEventListener("mouseleave", endPainting);
