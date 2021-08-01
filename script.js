// TO CHECK IF JQUERY IS WORKING PROPERLY
// if (typeof jQuery == "undefined") {
//   alert("jQuery is not installed");
// } else {
//   alert("jQuery is working");
// }

// $("#circle").click(function () {
//   $(this).animate({ width: "400px", height: "400px" }, 2000, function () {
//     $(this).css("background-color", "red");
//   });
// });

// $("#circle").hover(function () {
//   $("p").html("This text has changed");
// });

// $("#square1").click(function () {
//   //   alert("One of the squares were clicked");
//   $("#square1").css("display", "none");
// });

// $("#square2").click(function () {
//   $("#square2").css("display", "none");
// });

// $("div").click(function () {
//   //   $(this).css("display", "none");
//   //   alert("You clicked on a " + $(this).attr("id"));
//   $(this).fadeOut("slow", function () {
//     alert("Fade out has finished");
//   });
// });

// $("#fadeOutButton").click(function () {
//   $("p").fadeOut();
// });

// $("#fadeInButton").click(function () {
//   $("#fadeInText").fadeIn("slow");
// });

// $("#toggleButton").click(function () {
//   $("#toggleText").toggle();
// });

// var regex = /Great/i;
var regex = /e/g; //returns all the Es.
var string = "Regex is great!";
var result = string.match(regex);
alert(result);
