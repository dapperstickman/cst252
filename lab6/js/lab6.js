//Put a comment block at the top of your program
//My Ride
//How I get around
//
//Author: Phillip Guaracha
//Date: 2/8/2021
//Liscence: Whatever
//
//
//Define Variables
mytransport = ["Red Van", "Bicycle", "Bus", "Walk", "Truck"];


myMainRide = {
    make: "Chevrolet",
    model: "Van",
    color: "Red",
    year: "2001",
    extras: "loose ceiling, faded hood"
}

// Output
document.writeln("Getting around: " + mytransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
