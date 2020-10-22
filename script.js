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
    var timerM = 9;
    var timerS = 60;
        
    var clockF = setInterval(function() {
        timerS--;
        if(timerS == 0){
            timerS = 59;
            timerM--
        }
        if(timerM == 0){
            timerS = 0;
            clearInterval(clockF);
            //showResults(); RESULTS HERE????
        }
        if (timerM == 0 && timerS == 0){
            document.querySelector("#clock").setAttribute("style", "display: none;");
            var newText = document.createElement("h4");
            newText.textContent = "Time's Up!";
            document.querySelector("#timerEl").appendChild(newText);
        }
        timeEl.textContent = "Time left: "+ timerM + ":" + timerS;
        
    },1000);
    
    document.getElementById("welcomePage").setAttribute("style", "display: none;");
    document.getElementById("myQ1").setAttribute("style", "");

    
    

    /*var firstQ = document.querySelector("#myQ1").childNodes[5].children;
        firstQ[2].addEventListener("click",rightAnswer);*/

    //var allQuestions = document.querySelector("#questionsAndAnswers").children;
    var searchLight = document.querySelectorAll(".correct"); 
    var searchMyQs = document.querySelectorAll(".outsideWrapper");
    var clearMyQs = document.querySelectorAll(".outsideWrapper");
    var q = 0;
    var a = 0;
    for (var i = 0; i < searchLight.length; i++){
        searchLight[i].addEventListener("click", rightAnswer);
    };
    
    function rightAnswer(){
        //document.querySelector(".outsideWrapper").setAttribute("style", "display: none;");
        clearMyQs[a].setAttribute("style", "display: none;")
        a++
        searchMyQs[q].nextElementSibling.setAttribute("style", "display: ;");
        q++
    };
       
    
    function wrongAnswer(){
       
    };
  
    
        
    



    
};
