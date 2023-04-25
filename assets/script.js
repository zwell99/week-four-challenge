var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answersListEl = document.getElementById("answers");

var question1 = {
    question: "text",
    answers: ["A", "B", "C", "D"],
    corectAnswer: 0
};
var question2 = {
    question: "text",
    answers: ["E", "F", "G", "H"],
    corectAnswer: 0
};
var question3 = {
    question: "text",
    answers: ["I", "J", "K", "L"],
    corectAnswer: 0
};
var question4 = {
    question: "text",
    answers: ["M", "N", "O", "P"],
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

var listEl = document.createElement("li");
listEl.setAttribute("class", "quizButton");
var startButton = document.createElement("button");
startButton.textContent = "Start";
startButton.addEventListener("click", function (event) {
    var listEls = document.getElementsByClassName("quizButton"); // this gets a list
    listEls[0].remove();
    startQuiz();
});
listEl.append(startButton);
answersListEl.append(listEl);

function startQuiz() {
    console.log("Hello World");
    displayQuestion(0);
}

function displayQuestion(current) {
    var currentQuestion = questions[current];
    questionEl.textContent = currentQuestion.question;
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "quizButton");
        var button = document.createElement("button");
        button.textContent = currentQuestion.answers[i];
        button.addEventListener("click", function () {
            var listEls = document.getElementsByClassName("quizButton");
            console.log(listEls);
            console.log(listEls.length);
            console.log(listEls[0]);
            console.log(listEls[1]);
            console.log(listEls[2]);
            console.log(listEls[3]);
            // TODO: Figure out what's not working here
            for (var i = 0; i < listEls.length; i++) {
                console.log(i);
                console.log(listEls[i]);
                listEls[i].remove();
            }
            displayQuestion(current+1);
        });
        liEl.append(button);
        answersListEl.append(liEl);
    }
}

function endQuiz() {
    console.log("Hello World");
}