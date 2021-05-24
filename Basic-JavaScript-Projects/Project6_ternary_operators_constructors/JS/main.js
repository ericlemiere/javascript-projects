
// Checks age variable against age of 18 to see if eligble to vote
function voteAge() {
    var age, voteAbility;
    age = document.getElementById("Age").value;
    voteAbility = (age < 18) ? "You are not":"You are";
    document.getElementById("Vote").innerHTML = voteAbility + " eligible to vote.";
}

// Uses THIS and NEW keyword =======================================
function Vehicle(Make, Model, Year, Color) {
    this.vMake = Make;
    this.vModel = Model;
    this.vYear = Year;
    this.vColor = Color;
}
var Eric = new Vehicle("Honda", "Civic", 1979, "Blue");
var Amber = new Vehicle("Scion", "xB", 2006, "Dark Blue");
var Helo = new Vehicle("Vespa", "p200e", 1980, "White");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    ("Eric drives a " + Eric.vYear + " " + Eric.vColor + " " + 
    Eric.vMake + " " + Eric.vModel + ".");
}

// Function has a nested function within ===========================
function nestCount() {
    var aa = document.getElementById("countNum").value;
    document.getElementById("NestedFunction").innerHTML = Count();
    function Count() {
        aa++;
        return aa;
    }

}