var slider = document.getElementById("myRange");
var output = document.getElementById("msg");

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - window.innerWidth * 0.2;
canvas.height = window.innerHeight - window.innerHeight * 0.45;
const ctx = canvas.getContext("2d");

// Setup
var x = 200;
var y = 200;
var r = 30;
var color = "#d26832";
var dx = 25;
var dy = 25;
var fps = 30;

slider.oninput = function () {
    fps = this.value;
    output.innerHTML = this.value + " fps";
};

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x += dx;
    y += dy;
    if (x + r > canvas.width || x - r < 0) {
        dx *= -1;
    }
    if (y + r > canvas.height || y - r < 0) {
        dy *= -1;
    }
    //console.log(fps);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}

animate();
