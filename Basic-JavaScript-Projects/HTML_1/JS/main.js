
function favFruit() {
    var choice = document.getElementById("fruitChoice").value;
    var fruitOutput;
    var fruitAffirm = " are delicious!";

    switch(choice) {
        case "Apples":
            fruitOutput = choice + fruitAffirm;
        break;
        case "Bananas":
            fruitOutput = choice + fruitAffirm;
        break;
        case "Avocados":
            fruitOutput = choice + fruitAffirm;
        break;
        case "Mangos":
            fruitOutput = choice + fruitAffirm;
        break;
        case "Strawberries":
            fruitOutput = choice + fruitAffirm;
        break;
        case "Cherries":
            fruitOutput = choice + fruitAffirm;
        break;
        default:
            fruitOutput = "Please select a fruit from the list."
    }
    document.getElementById("fruitOutput").innerHTML = fruitOutput;
}

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

