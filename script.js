// set varibles

var body = document.body;
var QuizElement = document.getElementById("quiz");
var timerElement = document.getElementById("timer");
var questionsElement = document.getElementById("questions");
var choice_1Element = document.getElementById("choice_1");
var choice_2Element = document.getElementById("choice_2");
var choice_3Element = document.getElementById("choice_3");
var choice_4Element = document.getElementById("choice_4");
var timer = 75;
var questions = 5;
var highscorePulled = [];
var userNameElement = document.getElementById("userName");
var submitButton = document.querySelector(".submitButton");
var initialsPulled = [];

// creating Elements
var mainPageLi = document.createElement("li");
var mainPageInstru = document.createElement("li");
var mainPageStartBtn = document.createElement("button");
var titleH3 = document.createElement("h3");
var highScoreh3 = document.createElement("h3");
var scoreTold = document.createElement("h3");

// set new elements
mainPageLi.textContent = "Coding Quiz Challenge";
mainPageLi.setAttribute("class", "list-group-item bg-info text-center text-white");
mainPageInstru.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answer will penalise your score/time by ten seconds.";
mainPageInstru.setAttribute("class", "list-group-item text-center");
mainPageStartBtn.innerHTML = "START";
highScoreh3.textContent = "All Done!!!";

body.setAttribute("style", "max-width: 830px; margin: auto;");
QuizElement.setAttribute("style", "max-width: 630px");
mainPageStartBtn.setAttribute("style", "margin-top: 20px");
mainPageStartBtn.setAttribute("class", "btn btn-info");
highScoreh3.setAttribute("class", "list-group-item bg-info text-center text-white");
submitButton.setAttribute("style", "margin-top: 20px");
submitButton.setAttribute("class", "btn btn-info");
mainPageStartBtn.setAttribute("class", "btn btn-info");

// reset page
function clearPage() {
    QuizElement.textContent = " ";
    body.appendChild(QuizElement);
}

//Score
function scoreStart() {
    highscorePulled = JSON.parse(localStorage.getItem("scores") || "[]");
};

function scoreFinal() {
    highscorePulled = JSON.parse(localStorage.getItem("scores") || "[]");
    highscorePulled.push(timer);

    localStorage.setItem("scores", JSON.stringify(highscorePulled));
    scoreStart();
}
function replacePage() {
    location.replace("highscores.html");
}
// start timer
function startTimer() {
    var timerInterval = setInterval(function () {
        timer--;
        timerElement.textContent = timer;

        if (timer <= 0 && questionsAnswered != 0) {
            clearInterval(timerInterval);
            scoreStart();
            replacePage();
            // initials();        
        }
        else if (timer != 0 && questionsAnswered === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function pickRandom() {

    var ran = Math.floor(Math.random() * questions.length);
    return ran;
}

function initials() {
    clearPage();
    // clearInterval(timerInterval);
    QuizElement.appendChild(highScoreh3);
    timer = timer + 1;
    timerElement.textContent = "";
    QuizElement.appendChild(userInitials);
    QuizElement.appendChild(submitButton);

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        var initials = document.getElementById("userNAme").value;

        if (initials === "") {
            displayMessage("error", "Initials cannot be blank");
        }
        initialsPulled = JSON.parse(localStorage.getItem("initials") || "[]");
        initialsPulled.push(initials);
        localStorage.setItem("initials", JSON.stringify(initialsPulled));
        replacePage();
    });
};

// start quiz
function generateQuestion() {
    clearPage();
    var ranQuestions = questions[pickRandom()];
    questionsElement.textContent = ranQuestions.question;


    var choicesPull = ranQuestions.userChoices;
    var answerPull = ranQuestions.answer;

 
    // clear the div so any previous questions dont exist
    questionsElement.textContent = "";
    choice_1Element.textContent = "";
    choice_2Element.textContent = "";
    choice_3Element.textContent = "";
    choice_4Element.textContent = "";

    //add the title of the question into the the options
    questionsElement.textContent = ranQuestions.question;
    choice_1Element.textContent = choicesPull[0];
    choice_2Element.textContent = choicesPull[1];
    choice_3Element.textContent = choicesPull[2];
    choice_4Element.textContent = choicesPull[3];

    // Append question and options
    QuizElement.appendChild(questionsElement);
    QuizElement.appendChild(choice_1Element);
    QuizElement.appendChild(choice_2Element);
    QuizElement.appendChild(choice_3Element);
    QuizElement.appendChild(choice_4Element);


    choice_1Element.onclick = "";
    choice_1Element.onclick = function () {


        if (choice_1Element.textContent === answerPull) {
           
            questionsAnswered = questionsAnswered - 1;
            choice_1Element.setAttribute("class", "btn btn-success btn-lg btn-block text-left");
            setInterval(function () {
                choice_1Element.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
        else {
            questionsAnswered = questionsAnswered - 1;
            timer = timer - 15;
            choice_1Element.setAttribute("class", "btn btn-danger btn-lg btn-block text-left");
            setInterval(function () {
                choice_1Element.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
    };

    choice_2Element.onclick = ""
    choice_2Element.onclick = function () {

        if (choice_2Element.textContent === answerPull) {

            questionsAnswered = questionsAnswered - 1;
            choice_2Element.setAttribute("class", "btn btn-success btn-lg btn-block text-left");
            setInterval(function () {
                choice_2Element.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();

        }
        else {
            questionsAnswered = questionsAnswered - 1;
            timer = timer - 15;
            choice_2Element.setAttribute("class", "btn btn-success btn-lg btn-block text-left");
            setInterval(function () {
                choice_2Element.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
    };

    choice_3Element.onclick = ""
    choice_3Element.onclick = function () {

        if (choice_3Element.textContent === answerPull) {
            questionsAnswered = questionsAnswered - 1;
            choice_3Element.setAttribute("class", "btn btn-success btn-lg btn-block text-left");
            setInterval(function () {
                choice_3Element.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
        else {
            questionsAnswered = questionsAnswered - 1;
            timer = timer - 15;
            choice_3Element.setAttribute("class", "btn btn-danger btn-lg btn-block text-left");
            setInterval(function () {
                choice_3Element.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
    };

    choice_4Element.onclick = ""
    choice_4Element.onclick = function () {

        if (choice_4Element.textContent === answerPull) {
            questionsAnswered = questionsAnswered - 1;
            choice_4Element.setAttribute("class", "btn btn-danger btn-lg btn-block text-left");
            setInterval(function () {
                choice_4Element.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
        else {
            questionsAnswered = questionsAnswered - 1;
            timer = timer - 15;
            choice_4Element.setAttribute("class", "btn btn-danger btn-lg btn-block text-left");
            setInterval(function () {
                choice_4Element.setAttribute("class", "btn btn-light btn-lg btn-block text-left");
            }, 50);
            generateQuestion();
        }
    };

    if (questionsAnswered === 0) {
        scoreFinal();
        initials();

    }
}


// Main page
function startingPage() {
    clearPage();
    QuizElement.appendChild(mainPageLi);
    QuizElement.appendChild(mainPageInstru);
    QuizElement.appendChild(mainPageStartBtn);

    // start quiz
    mainPageStartBtn.addEventListener("click", function () {
        clearPage();
        startTimer();
        generateQuestion();
    });
}


// Execute Main Function

startingPage();