//Put a comment block at the top of your program
//Functions
//Lab10
//
//Author: Phillip Guaracha
//Date: 3/8/2021
//Liscence: Whatever
//
//
//JavaScript for Web
//Using Conditionals in JS
function sortingHat(name) {
    var len = name.length;
    console.log("length:", len);

    var mod = len % 4;
    console.log("mod:", mod);
    if (mod == 0) {
        return("Gryfindor");
    } else if (mod == 1) {
        return("Ravenclaw");
    } else if (mod == 2) {
        return("Slytherin");
    } else {
        return("Hufflepuff");
    }
}
//code example followed from Wes Modes
// https://wmodes.github.io/cst252/lab11/js/lab11.js
var name = document.getElementById("text");
var house = sortingHat(name);
console.log(house);

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  // get value from input field
  var name = document.getElementById("input").value;
  // use name to get house from SortingHat function
  var houseObj = sortingHat(name);
  // output to output div
  newText = "<h3>You go into: " + houseObj
  document.getElementById("output").innerHTML = newText;
})
