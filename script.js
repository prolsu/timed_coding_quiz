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

document.getElementById("readyBtn").addEventListener("click", startQuiz);


function startQuiz() {
    var timeEl = document.querySelector("#clock");
    var timer = 10*60;
    
   
    var intervalID = setInterval(function() {
        timer--;
        timeEl.textContent = "Time left: "+ timer;
        if(timer == 0){
            clearInterval(intervalID);
            //showResults(); RESULTS WILL GO HERE!!!
        }
        },1000);

    
    document.getElementById("welcomePage").setAttribute("style", "display: none;");
    var firstQ = document.getElementById("myQ1").setAttribute("style", "");
    document.getElementById("quizThisWay").appendChild(firstQ);
}
