document.querySelector("#readyBtn").addEventListener("click",askQuestions);
        
var userInitials = localStorage.getItem("initials");
var userScore = localStorage.getItem("score");
    
if (userInitials !== null && userScore !== null){
    document.querySelector("#highScores").setAttribute("style", "display:;");
    var newH3Tag = document.createElement("H3");
    newH3Tag.textContent = "User: "+ userInitials + " Score: " + userScore;
    document.querySelector("#newScore").appendChild(newH3Tag);
}; 


function askQuestions() {
    var timeEl = document.querySelector("#clock");
    var timerM = "10";
    var timerS = "00";
    timeEl.textContent = "Time left: " + timerM + ":" + timerS;
    
    var clockF = setInterval(function() {
        timerS--;
        
        if(timerS < 0 && timerM > 0){
            timerS = 59;
            timerM--
        }
        
        if(timerS < 10){
            timerS = "0" + timerS;
        }

        if(timerM == -1 ){
            timerM = "0"
            timerS = "00"
        }
        
        if(timerM == 0 && timerS == 0){
            clearInterval(clockF);
            showMyResuts();
        }
        
        timeEl.textContent = "Time left: "+ timerM + ":" + timerS;
        
    },1000);

    document.querySelector("#welcomePage").setAttribute("style", "display: none;");
    document.getElementById("myQ1").setAttribute("style", "display:;");
    
    var myScoreIs = document.querySelector("#myScoreIs");
    var theRightAnswers = document.querySelectorAll(".correct"); 
    var theWrongAnswers = document.querySelectorAll(".choice");
    var questionHolders = document.querySelectorAll(".outsideWrapper");
    var currentQuestion = document.querySelectorAll(".outsideWrapper");
    
    var q = 0;
    var a = 0;
    var myScore = 0;

    for (var i = 0; i < theRightAnswers.length; i++){
       theRightAnswers[i].addEventListener("click", rightAnswer);
    };

    for (var i = 0; i < theWrongAnswers.length; i++){
       theWrongAnswers[i].addEventListener("click", wrongAnswer);
    };

    function showMyResuts(){
        document.querySelector("#results-here").setAttribute("style", "display: ;");
        //document.querySelector("#questionsAndChoices").setAttribute("style", "display: none;");
        for(var i=0;i<questionHolders.length;i++){
            questionHolders[i].setAttribute("style", "display: none;");
        }
        myScoreIs.textContent = myScore
        q = 0;
        a = 0;
    };
    
    function rightAnswer(){
        currentQuestion[a].setAttribute("style", "display: none;")
        a++
        if(q < 24){
            questionHolders[q].nextElementSibling.setAttribute("style", "display: ;");
            q++   
            myScore = myScore + 4;    
            console.log(myScore);
        }
        if(q == 24){
            clearInterval(clockF)
            showMyResuts();
            questionHolders[24].setAttribute("style","display: none;");
        }
        if (timerM == 0 && timerS == 0){
            showMyResuts();
        }
        
    };

    function wrongAnswer(){
        currentQuestion[a].setAttribute("style", "display: none;")
        a++
        if(q < 24){
            questionHolders[q].nextElementSibling.setAttribute("style", "display: ;");
            q++   
        }
        if(q == 24){
            clearInterval(clockF)
            showMyResuts();
            questionHolders[24].setAttribute("style","display: none;");
        }
        timerS = timerS - 30
        if(timerS < 0 ){
            timerM--
            timerS = 60 + timerS
        }
        if (timerM == 0 && timerS == 0){
            showMyResuts();
        }
        
        console.log("wrong!");
    };
    
    document.querySelector("#submitButton").addEventListener("click", function(){
        var myInitials = document.querySelector("#myInitials").value;
        
        localStorage.initials = myInitials;
        localStorage.score = myScore;
        myScore = 0;  
        location.reload();     
        
        });
};