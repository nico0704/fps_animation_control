var slider = document.getElementById("myRange");
var output = document.getElementById("msg");
slider.oninput = function() {
  output.innerHTML = this.value;
}

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - window.innerWidth * 0.2;
canvas.height = window.innerHeight - window.innerHeight * 0.45;
const ctx = canvas.getContext("2d");
var x = 200;
var y = 200;
var r = 30;
var color = "#d26832";
var dx = Math.random() * 4 + 1;
var dy = Math.random() * 4 + 1;

function createCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x += dx;
    y += dy;
    if (x + r > canvas.width || x - r < 0) {
        dx = -dx;
    }
    if (y + r > canvas.height || y- r < 0) {
        dy = -dy;
    }
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}

var slider = document.getElementById("myRange");
var output = document.getElementById("msg");
slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(output.innerHTML);
}

setInterval(createCircle, 10);
