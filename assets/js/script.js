var time = questions.length * 15;
var currentQuestionIndex = 0;
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#countdown");
var questionChoices = document.querySelector("#selections");
var startMenu = document.querySelector("#start-menu");
var titleElement = document.querySelector("#thequestion");

function startQuiz() {
    startMenu.setAttribute("class", "hidden");
    questionsElement.removeAttribute("class");
    getCurrentQuestion();
    startTimer();
}

function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    titleElement.textContent = currentQuestion.title;
    questionChoices.textContent = ""

    for (var i = 0; i < currentQuestion.choice.length; i++) {
        var choicePick = document.createElement("button");
        choicePick.setAttribute("class", "choice");
        choicePick.setAttribute("value", currentQuestion.choice[i]);
        choicePick.textContent = i + 1 + ". " + currentQuestion.choice[i];
        questionChoices.appendChild(choicePick);
    }
}



var secondsLeft = 60;
function startTimer(){
var countdownTimer = setInterval(function(){
secondsLeft--;
document.getElementById("countdown").textContent = secondsLeft;
if(timeleft <= 0)
    clearInterval(countdownTimer);
},1000);
}




startBtn.addEventListener("click", startQuiz);
