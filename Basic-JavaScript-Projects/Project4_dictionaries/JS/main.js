// Dictionary that defines a Dog and its attributes
function dogDictionary() {
    var dog = {
        Breed: "Boxer",
        Color: "White",
        Name: "Murdok",
        Weight: 53,
        Age: 8,
        Sound: "Bark"
    };
    delete dog.Name; // deleting Name from the dictionary
    document.getElementById("Dictionary").innerHTML = dog.Name; //prints the dog's name
}