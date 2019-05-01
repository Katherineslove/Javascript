//console.log('Javascript is loaded');

//alert("computer says no");

//console.log(   (1 * 2)  - (" string data type")   );

//console.log("string 1" + " string 2");

//var variable1 = "this is now a string";

//console.log(variable1);

//var secondQuestion = prompt("What is your favourite colour?");
//console.log(question);
//console.log(secondQuestion);
//console.log("Hello " + question + " your favourite colour is " + secondQuestion

//var question1 = prompt("What is your name?");
//document.write("<h2 class='red'>" + "Your name is " + question1 + "</h2>");

//var question2 = prompt("How old are you?");
//document.write("<h2 class='green'>" + "You are " + question2 + " years old" + "</h2>");
//
//var question3 = prompt("What country do you live in?");
//document.write("<h2 class='yellow'>" + "You live in " + question3 + "</h2>");
//
//var question4 = prompt("Is it good or bad there?");
//document.write("<h2 class='blue'>" + "You think it is " + question4 + " to live there" + "</h2>");


var question1 = prompt("What is your name?");
document.getElementById("pageContainer").innerHTML = "<h2> What is your name?</h2>";
document.getElementById("pageContainer").innerHTML += "<h2>"+question1+"</h2>";
document.getElementById("heading").innerText = "Hello "+ question1;
