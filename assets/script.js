var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answerListEl = document.getElementById("answers");

var question1 = {
    question: "text",
    answers: ["A", "B", "C", "D"],
    corectAnswer: 0
};
var question2 = {
    question: "text",
    answers: ["A", "B", "C", "D"],
    corectAnswer: 0
};
var question3 = {
    question: "text",
    answers: ["A", "B", "C", "D"],
    corectAnswer: 0
};
var question4 = {
    question: "text",
    answers: ["A", "B", "C", "D"],
    corectAnswer: 0
};

var questions = [question1, question2, question3, question4];

function countdown() {
    var timeLeft = 15;
    timerEl.textContent = timeLeft;

    var timeInterval = setInterval(function () {
        timeLeft--
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

function startQuiz() {
    console.log("Hello World");
}

function endQuiz() {
    console.log("Hello World");
}

