const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let painting = false;
let filling = false;

canvas.width = 660;
canvas.height = 640;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 0.1;

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

const colors = document.querySelectorAll(".color");

function handleColor(event) {
  ctx.strokeStyle = event.target.style.backgroundColor;
}

Array.from(colors).forEach(color => {
  color.addEventListener("click", handleColor);
});

const modeBtn = document.querySelector(".mode");

function handleModeClick() {
  if (filling) {
    filling = false;
    modeBtn.innerText = "FILL";
  } else {
    filling = true;
    modeBtn.innerText = "DRAW";
  }
}

function fill() {
  if (filling) {
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

canvas.addEventListener("click", fill);

modeBtn.addEventListener("click", handleModeClick);

const brushSizeSlider = document.querySelector(".brush-size");

function handleBrushSize(event) {
  ctx.lineWidth = event.target.value;
}

brushSizeSlider.addEventListener("input", handleBrushSize)