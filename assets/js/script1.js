const questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false},
        ]
    },
    {
        question: "The condition in a if/else statement is enclosed with:",
        answers: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: true},
            {text: "parenthesis", correct: false},
            {text: "square brackets", correct: false},
        ]
    },
    {
        question: "Arrays in javascript can be used to store:",
        answers: [
            {text: "number and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of above", correct: false},
        ]
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: [
            {text: "commas", correct: true},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: false},
            {text: "parenthesis", correct: false},
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "javascript", correct: false},
            {text: "terminal/bash", correct: false},
            {text: "for loops", correct: false},
            {text: "console.log", correct: true},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-button");


let currentQuestionIndex = 0;
let score = 0;
let time = 60;
let timerEl = document.getElementById("timer");

function startQuiz() {
    currentQuestionIndex = 0
    document.getElementById("score").innerHTML = "Score: " + score;
    showQuestion();
    timer();
}


function timer() {
    var timeInterval = setInterval(function () {
        if (time > 0) {
            document.getElementById("timer").innerHTML = "Time: " + time;
        } else {
            return window.location.assign("end.html");
        }
        time--;
    }, 1000);
}

function showQuestion() {
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if(answer.correct) {
            button.setAttribute("data-correct","true");
        } else {
            button.setAttribute("data-correct","false");
        }

        answerElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const chosenBtn = e.target;
    const right = chosenBtn.dataset.correct === "true";
    if(right){
        chosenBtn.classList.add("correct");
        score += 20;
        document.getElementById("score").innerHTML = "Score: " + score;
    }else {
        chosenBtn.classList.add("incorrect");
        time -= 10;
    }
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        localStorage.setItem("finalScore", score);
        return window.location.assign("end.html");
    }
}


startQuiz();