// Function executes a WHILE loop to output numbers 10 - 1
function Call_Loop() {
    var x = 10;
    var sent = ""

    while (x > 0) {
        sent += " " + x;
        x--;
    }
    document.getElementById("Loop").innerHTML = sent;
}

// Function lists elements of the array called instruments
function for_Loop() {
    var instruments = ["Gretsch Falcon", "Gretsch Jet", "Gibson J45", "Fender Jazzmaster", "Fender Tele", "Fender Strat"];
    var instList = "";
    var ii;

    for (ii=0; ii<instruments.length; ii++) {
        instList += instruments[ii] + "<br>";
    }
    document.getElementById("instrumentList").innerHTML = instList;
}

// Finds length of sentence input
function sentLength() {
    sentence = document.getElementById("sentence").value;
    document.getElementById("sentLengthOutput").innerHTML = sentence.length;
}

// Print one element of an array
function arrayFunc() {
    var instruments = ["Gretsch Falcon", "Gretsch Jet", "Gibson J45", "Fender Jazzmaster", "Fender Tele", "Fender Strat"];
    document.getElementById("Array").innerHTML = "The second guitar in this collection is a " +
        instruments[1] + ".";
}

// declares a CONST variable, adds to it and changes an element
function constantFunc() {
    const guitar = {make:"Fender", model:"Jazzmaster", color:"White"};
    guitar.originalColor = guitar.color;
    guitar.color = "Black";
    document.getElementById("Constant").innerHTML = "The original color of the " +
        guitar.make + " " + guitar.model + " was " + guitar.originalColor + " but was refinished to " +
        guitar.color + ".";
}

// uses the LET keyword
function useLet() {
    aa = "one";
    document.write(aa);
    {
        let aa = " is ";
        document.write(aa); 
    }
    document.write(aa);
}

// Uses RETURN
function returnGreeting(name) {
    var greeting = "Howdy, " + name;
    return greeting;
}
document.getElementById("nameGreeting").innerHTML = returnGreeting("Partner");


let amp = {
    make:"Vox", model:"AC30", year:1994, color:"Red", power:"120v", 
        description : function() {
        return "The amp is a " + this.color + " " + this.make + " " + 
            this.model + " from " + this.year + " and it runs on " +
            this.power + " power.";
    }
};
document.getElementById("ampOutput").innerHTML = amp.description();

// Loop with Break and Continue

var text = "";
var ii;

for (ii = 0; ii < 10; ii++) 
{
    if (ii === 3) { continue; }
    if (ii === 8) { break; }
    text += ii + " ";
}
document.getElementById("loopOutput").innerHTML = text;