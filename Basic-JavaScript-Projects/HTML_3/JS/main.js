
function displayFam(character) {
    var famMember = character.getAttribute("data-familyRelation");
    alert(character.innerHTML  + " is the " +  famMember + " in the Skywalker family.");
}