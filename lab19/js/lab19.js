//Put a comment block at the top of your program
//Lab19
//
//Author: Phillip Guaracha
//Date: 4/14/2021
//Liscence: Whatever
//
//
//JavaScript for Web
//Using JQuery + AJAX

//choose endpoint
var endpoint = "https://api.kanye.rest/";

$("#activate").click(function(){
	$("#output").append("<p>Check Console!</p>");
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: endpoint,
      // The data to send (will be converted to a query string)
      data: { },
      // Whether this is a POST or GET request
      type: "GET",

  })
  // Append to output, and fail
  .done(function(data) {
		console.log(data);
      $("#output").append("<b>" + endpoint + "</b>");
  })

})
