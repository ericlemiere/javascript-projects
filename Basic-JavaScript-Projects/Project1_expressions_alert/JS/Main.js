var A = "Click OK to view this site", smiley = ":)"; //multiple variables
var blueFont = "This font is blue", blueFont = blueFont.fontcolor("blue"); //changing the color of font

//This is the pop up window seen when first visiting the website
window.alert(A)

document.write(blueFont + " and Seven multiplied by Three returns a value of " + 7*3 + ". " + smiley);

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}
