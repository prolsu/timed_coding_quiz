//EXAMPLE OF A TIMER REACHING 0 AND STOPPING... when time stops, a picture replaces the targeted area...

/*
var timeEl = document.querySelector("#questions");    
var secondsLeft = 5;

var intervalID = setInterval(function() {
secondsLeft--;
timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

if (secondsLeft == 0) {
clearInterval(intervalID);
sendRandomPic();
}}, 1000);

function sendRandomPic(){
timeEl.textContent = " ";

var imgEl = document.createElement("img");

imgEl.setAttribute("src", "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg");
timeEl.appendChild(imgEl);
}

*/

