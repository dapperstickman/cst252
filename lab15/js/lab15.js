//Put a comment block at the top of your program
//Lab15
//
//Author: Phillip Guaracha
//Date: 3/22/2021
//Liscence: Whatever
//
//
//JavaScript for Web
//Using OOP

//proto method
//function Vehicle(make, model, year, color, extras) {
//  this.make = make;
//  this.model = model;
//  this.year = year;
//  this.color = color;
//  this.extras = extras;
//  this.info = function() {
//    return this.color + " " + this.year + " " + this.make + " " + this.model + " " + this.extras;
//  }
//}

// This is the NEW class method
//
class Vehicle {
  constructor(make, model, year, color, extras, name) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    this.name = name;
  }
  info() {
    return this.color + " " + this.year + " " + this.make + " " +  this.model + " with " +  this.extras + " called " + this.name;
  }
}


//make vehicle
var vehicles = [];

var newVehicle = new Vehicle("Cannondale", "???", "???", "grayish-silver", "Nice Seat");

vehicles.push(newVehicle);
//vehicles.push(new Vehicle("Cannondale", "???", "???", "grayish-silver", "Nice Seat"));


//out put it
outputEl = document.getElementById("output");
  for (var i = 0; i<vehicles.length; i++) {
    var newEl = document.createElement("p");
    var newEl = document.createElement("li");
    newEl.innerHTML = vehicles[i].info();
    outputEl.appendChild(newEl);
  }



  //OOP Hangman Design
  //
  //Set up
      //Create Board
      //Create Player
      //Assign Role
  //Begin Game
  //loop infinetely
      //renderboard method
        //input chosen word
      //Establish Lose Conditions- Number of incorrect guesses
      //collect letter inputs
        //Make sure guess only unguessed letter
  //Check for Win Condition
    //Win condition - Correct Guesses>Wrong Guesses

  //check_victory
    //Display Win / Loss message

  //Stop loop
