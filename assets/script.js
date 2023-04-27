var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answersListEl = document.getElementById("answers");

var question1 = {
    question: "Question 1",
    answers: ["A", "B", "C", "D"],
    corectAnswer: 0
};
var question2 = {
    question: "Question 2",
    answers: ["E", "F", "G", "H"],
    corectAnswer: 1
};
var question3 = {
    question: "Question 3",
    answers: ["I", "J", "K", "L"],
    corectAnswer: 2
};
var question4 = {
    question: "Question 4",
    answers: ["M", "N", "O", "P"],
    corectAnswer: 3
};

// declare variables to be used across various functions
var questions = [question1, question2, question3, question4, "end"];
var scores = [[], []];
var score = 0;
var timeLeft = 20;

function countdown() {
    timerEl.textContent = timeLeft;

    var timeInterval = setInterval(function () {
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
        else {
            timeLeft--
            timerEl.textContent = timeLeft;
        }
    }, 1000);
}

var listEl = document.createElement("li");
listEl.setAttribute("class", "quizButton");
var startButton = document.createElement("button");
startButton.textContent = "Start";
startButton.addEventListener("click", function () {
    var listEls = document.getElementsByClassName("quizButton"); // this gets an array
    listEls[0].remove();
    startQuiz();
});
listEl.append(startButton);
answersListEl.append(listEl);

function startQuiz() {
    score = 0;
    timeLeft = 20;
    countdown();
    displayQuestion(0);
}

function displayQuestion(current) {
    var currentQuestion = questions[current];
    questionEl.textContent = currentQuestion.question;
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "quizButton");
        var button = document.createElement("button");
        button.setAttribute("number", i);
        button.textContent = currentQuestion.answers[i];
        button.addEventListener("click", function (event) {
            if (event.target.attributes.number.nodeValue == currentQuestion.corectAnswer) {
                score++;
            }
            else {
                timeLeft -= 5;
            }
            var listEls = document.getElementsByClassName("quizButton");
            var len = listEls.length; // this changes dynamically during for-loop so you have to get the value before
            for (var i = 0; i < len; i++) { // i < listEls.length does not work since the
                listEls[0].remove();        //   length of listEls changes dynamically as well
            }
            if (questions[current+1] === "end") {
                // this causes the countdown function to call endQuiz
                timeLeft = 0;
            }
            else {
                displayQuestion(current+1);
            }
        });
        liEl.append(button);
        answersListEl.append(liEl);
    }
}

function endQuiz() {
    questionEl.textContent = "Score: " + score;
    var listEls = document.getElementsByClassName("quizButton");
    var len = listEls.length;
    for (var i = 0; i < len; i++) { // i < listEls.length does not work since the
        listEls[0].remove();        //   length of listEls changes dynamically as well
    }

    var initials = prompt("What are your initials?");
    scores[0].push(initials);
    scores[1].push(score);
    for (var i = 0; i < scores[0].length; i++) {
        var liEl = document.createElement("li");
        liEl.textContent = scores[0][i] + ": " + scores[1][i];
        liEl.setAttribute("class", "quizButton");
        answersListEl.append(liEl);
    }
    var restartEl = document.createElement("li");
    restartEl.setAttribute("class", "quizButton")
    var restartButton = document.createElement("button");
    restartButton.innerText = "Try again?"
    restartButton.addEventListener("click", function () {
        var listEls = document.getElementsByClassName("quizButton"); // this gets an array
        var len = listEls.length;
        for (var i = 0; i < len; i++) {
            listEls[0].remove();
        }
        startQuiz();
    });
    restartEl.append(restartButton);
    answersListEl.append(restartEl);
}