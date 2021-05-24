
function dogDictionary() {
    var dog = {
        Breed: "Boxer",
        Color: "White",
        Name: "Murdok",
        Weight: 53,
        Age: 8,
        Sound: "Bark"
    };

    var x = (typeof dog.Weight); //uses typeof operator
    document.getElementById("Test").innerHTML = x;
}

function typeCoercion() {
    document.getElementById("Test").innerHTML = ("10" + 7); //Coercion operator
}

// Function displays NaN
function notANumber() {
    document.getElementById("Test").innerHTML = 0/0;
}

// Function gets variable from HTML and tests to see if it is Not a Number
function notANumberTF(testVar) {
    document.getElementById("Test").innerHTML = isNaN(testVar);
}

// Function gets number from HTML and displays it
function infNumber(infNumVar) {
    document.getElementById("Test").innerHTML = infNumVar;
}

// Function returns True or False, and also prints result to console
function isGreaterThan(checkNum) {
    document.getElementById("Test").innerHTML = (checkNum > 2);
    console.log(checkNum > 2);
}

// Print to console
function consoleLog() {
    console.log(2+2/4);
}

// Function uses the === operator
function tripleEquals(aa) {
    var bb = 21;
    document.getElementById("Test").innerHTML = (aa === bb);
}


// Function uses boolean logic to output largest number
function andOrOp(aa,bb,cc) {
    if (aa == bb || aa == cc || bb == cc)
    {
        document.getElementById("Test").innerHTML = "Some of these numbers are the same";
    }
    else {
        if (aa > bb && aa > cc)
        {
            document.getElementById("Test").innerHTML = aa + " is the largest of the three.";
        }
        if (bb > aa && bb > cc)
        {
            document.getElementById("Test").innerHTML = bb + " is the largest of the three.";
        }
        else
        {
            document.getElementById("Test").innerHTML = cc + " is the largest of the three.";
        }
    }
}

// not function
function notFunc() {
    document.getElementById("Test").innerHTML = !(5>7);
}