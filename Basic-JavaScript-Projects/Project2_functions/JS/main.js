

// Passes 2 numbers to a function and outputs product when clicked
function multTwoNumbers(x,y) {
    document.getElementById("mult").innerHTML = x*y;
}

// Displays date when button is clicked
function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

// This function uses the += operator to build a sentence
function concFunc() {
    var sentence = "I used the concatenate operator";
    sentence += " to build this sentence.";
    document.getElementById("+=").innerHTML = sentence;
}