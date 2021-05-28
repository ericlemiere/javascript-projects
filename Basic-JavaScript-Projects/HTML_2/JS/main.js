

var c = document.getElementById("canvasCircle");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "gray");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 125);

ctx.beginPath();
ctx.arc(250, 125, 60, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
ctx.stroke();

