// GLOBAL VARIABLE
var ii = 3;

//Date.getHours function
function getDate() {
    
    var aa = new Date(); 
    var storeHours = aa.getHours(); 

    if (storeHours < 17 && storeHours > 9) {
        document.getElementById("Greeting").innerHTML = "We are open!";
    }
    else if (storeHours < 9) {
        document.getElementById("Greeting").innerHTML = "We are not open yet. We open at 9am."
    }
    else {
        document.getElementById("Greeting").innerHTML = "We closed at 5pm.";
    }

    console.log(age); // Intentionally throwing an undefined error to the console by printing a local variable from a different function
    
}

// Checks age variable against age of 18 to see if eligble to vote
function voteAge() {
    var age; // local variable
    age = document.getElementById("Age").value;

    if (age > 18) {
        document.getElementById("voteAgeOutput").innerHTML = "You are eligible to vote."
    }
    else if (age == 18)
        document.getElementById("voteAgeOutput").innerHTML = "You are just old enough to vote!"
    else {
        document.getElementById("voteAgeOutput").innerHTML = "You are not eligible to vote."
    }
}

function timeFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good Morning.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "Good Afternoon.";
    }
    else {
        Reply = "Good Evening.";
    }
    document.getElementById("timeOfDay").innerHTML = Reply;
}