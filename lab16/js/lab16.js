//Put a comment block at the top of your program
//Lab16
//
//Author: Phillip Guaracha
//Date: 4/5/2021
//Liscence: Whatever
//
//
//JavaScript for Web
//Using JQuery

$("#output").append("<p><button id='my-button'>Press This</button></p>")
$("#my-button").click(function(){
  alert("Ooooooh you pressed it.");
})
$("button").css("background-color", "green")
