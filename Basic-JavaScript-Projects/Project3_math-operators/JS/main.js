
function addNumbers() {
    var x = 7+10;
    document.getElementById("Math").innerHTML = "7+10=" + x;
}

function subtractNumbers() {
    var x = 7-10;
    document.getElementById("Math").innerHTML = "7-10=" + x;
}

function multiplyNumbers() {
    var x = 7*10;
    document.getElementById("Math").innerHTML = "7*10=" + x;
}

function divideNumbers() {
    var x = 7/10;
    document.getElementById("Math").innerHTML = "7/10=" + x;
}

// Makes use of multiple operators in on function
function multipleOperations() {
    var x = 7+10*7;
    document.getElementById("Math").innerHTML = "7+10*7=" + x;
}

// Makes use of Negation operator
function multipleOperationsNeg() {
    var x = 7+10*7;
    document.getElementById("Math").innerHTML = "7+10*7 with negation operator is " + -x;
}

function modulusOperator() {
    var x = 77 % 10;
    document.getElementById("Math").innerHTML = "77/10 produces a remainder of " + x;
}


function numbIncrement() {
    var x = 7;
    x++;
    document.getElementById("Math").innerHTML = x;
}

function numbDecrement() {
    var x = 7;
    x--;
    document.getElementById("Math").innerHTML = x;
}


// produces random number and rounds it to the nearest iteger
// also gives result in an alert window
function randomNum() {
    x = (Math.random() * 100);
    window.alert(Math.round(x));
}