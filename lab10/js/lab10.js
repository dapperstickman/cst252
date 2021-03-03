//Put a comment block at the top of your program
//Functions
//Lab10
//
//Author: Phillip Guaracha
//Date: 3/3/2021
//Liscence: Whatever
//
//
//JavaScript for Web
//Using Events in JS
//Acquire name
function main() {
    var userName = window.prompt("Give me your name so we can begin.");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
  }
//attempt at making achanging Title
var titleEl = document.getElementById("changeme");
console.log("Heres a title", titleEl);

var buttonEl = document.getElementById("my-button");
console.log("Heres a button", buttonEl);

var inputEl = document.getElementById("my-input");
console.log("something else", inputEl);

buttonEl.addEventListener("click", function(){
  var name = inputEl.value;

  titleEl.innerText = "Welcome", + name;
  inputEl.value = "";
})
//I didn't do well
