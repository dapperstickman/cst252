//Put a comment block at the top of your program
//Lab14
//
//Author: Phillip Guaracha
//Date: 3/22/2021
//Liscence: Whatever
//
//
//JavaScript for Web
//Using Conscriptors


function Vehicle(make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.info = function() {
    return this.color + " " + this.year + " " + this.make + " " + this.model + " " + this.extras;
  }
}

var vehicles = [];

var newVehicle = new Vehicle("Cannondale", "???", "???", "grayish-silver", "Nice Seat");

vehicles.push(newVehicle);
//vehicles.push(new Vehicle("Cannondale", "???", "???", "grayish-silver", "Nice Seat"));



outputEl = document.getElementById("output");
  for (var i = 0; i<vehicles.length; i++) {
    var newEl = document.createElement("p");
    var newEl = document.createElement("li");
    newEl.innerHTML = vehicles[i].info();
    outputEl.appendChild(newEl);
  }
