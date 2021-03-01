//Put a comment block at the top of your program
//Functions
//Lab9
//
//Author: Phillip Guaracha
//Date: 3/1/2021
//Liscence: Whatever
//
//
//JavaScript for Web
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerHTML = ("Check This Out. Or don't.");
var new2El = document.createElement("p");
new2El.innerHTML = ("Would you Kindly?");
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
new1El.style.color = "red"
new2El.style.fontSize = "80px"
