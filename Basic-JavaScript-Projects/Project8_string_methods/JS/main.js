
function fullSentence() {
    var aa = "Connect this";
    var bb = " and that";
    var cc = " to create a full sentence.";
    var wholeSentence = aa.concat(bb, cc); // concatenates bb and cc to variable aa
    document.getElementById("concatenate").innerHTML = wholeSentence;
}

function sliceMethod() {
    var aa = "Hot Lips is my favorite pizza right now.";
    var aaSection = aa.slice(24,29); //takes out section of above string at position 24 through 29
    document.getElementById("sliceDemo").innerHTML = aaSection;
}

function uppercaseFunc() {
    var aa = document.getElementById("word").value;
    document.getElementById("uppercaseIt").innerHTML = aa.toUpperCase(); // prints the user input in all uppercase
}

function searchFunc() {
    var aa = "I have many guitars.";
    var bb = aa.search("guitars"); // searches above string for word "guitars" and outputs position
    document.getElementById("searchDemo").innerHTML = bb;
}

function toStringFunc() {
    var aa = document.getElementById("number").value;
    document.getElementById("toStringDemo").innerHTML = aa.toString(); //converts a number to a string
}

function toPrecisionFunc() {
    var aa = 3.14159265359;
    document.getElementById("precDemo").innerHTML = aa.toPrecision(4); //prints 4 digits of number
}

function toFixedFunc() {
    var aa = 3.14159265359;
    document.getElementById("fixedDemo").innerHTML = aa.toFixed(2); //prints number to 2 decimals
}