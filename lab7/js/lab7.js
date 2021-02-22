//Put a comment block at the top of your program
//Functions
//How I get around
//
//Author: Phillip Guaracha
//Date: 2/8/2021
//Liscence: Whatever
//
//
//workinArray
// shuffleArray - take an array and shuffle the contents
// Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array and Wes Modes https://wmodes.github.io/cst252/lab7/index.html
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// given a string, return string in Title Case
// thanks to https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName(userName) {
    return userName.toLowerCase().split("").sort().join("");
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function randomizeName(userName) {
    // convert userName string to an array
    var nameArray = userName.toLowerCase().split("");
    console.log("nameArray =", nameArray);
    // shuffle array with our shuffle function
    var shuffledArray = shuffleArray(nameArray);
    console.log("shuffledArray =", shuffledArray);
    var shuffledString = shuffledArray.join("");
    // shift to Title Case (like a name)
    var newName = toTitleCase(shuffledString);
    // return array to a string
    return newName;
}
//Thanks to Wes Modes for complicated code example
function main() {
    var userName = window.prompt("Give me your name so we can begin.");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("Here's your sorted name: " + sortedName + "</br></br>");
    var randomName = randomizeName(userName);
    document.writeln("Check this out, I ruined your name.<br>Take this too.");
    document.writeln("<div class='name'>" + randomName + "</div>")
}

main();
