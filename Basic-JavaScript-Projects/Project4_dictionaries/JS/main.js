
function dogDictionary() {
    var dog = {
        Breed: "Boxer",
        Color: "White",
        Name: "Murdok",
        Weight: 53,
        Age: 8,
        Sound: "Bark"
    };
    delete dog.Name;
    document.getElementById("Dictionary").innerHTML = dog.Name;
}