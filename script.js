var question = document.querySelector(".question-card");
var startButton = document.querySelector(".start-button");
var timerCard = document.querySelector(".timer-card");
var introCard = document.querySelector(".intro-card");
var answerCard = document.querySelector(".answer-card");
var scoreCard = document.querySelector(".score-card")
var timerCount = 60;
var counter = 0;
var scoreCounter = 0;

var questionsList = [
    {name: "Which of the following is NOT a language used for building pages?",
    choices: ["HTML", "CSS", "SQL", "Javascript"],
    answer: "SQL"
    },
    {name: "True or false: Java and Javascript are the same language.",
    choices: ["True", "False"],
    answer: "False",
    },
    {name: "Which of the following is used to declare a variable in Javascript?",
    choices: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
    },
    {name: "Which langauge is used to stylize pages?",
    choices: ["HTML", "CSS", "SQL", "Javascript"],
    answer: "CSS"
    },
    {name: "Which of the following indicates that the two variables are NOT strictly equal?",
    choices: ["A !== B", "A >= B", "A === B", "A || B"],
    answer: "A !== B"
    },
]
//Allows the start button to trigger game
startButton.addEventListener("click", startGame)

function startGame() {
    //Erases introductory message
    introCard.textContent = "";
    //introCard.style.visibility = "hidden";
    //Displays question
    displayQuestion();
};

//Creates countdown timmer
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerCard.textContent = "Time remaining: " + timerCount
    if (timerCount == 0) {
        clearInterval(timer)
    }
    }, 1000)
}

function displayQuestion() {
    startButton.style.visibility = "hidden"
    startTimer();
    var currentQuestion = questionsList[counter];
    question.textContent = currentQuestion.name;
    currentQuestion.choices.forEach(function(item) {
            var answerButton = document.createElement("Button");
            answerButton.textContent = item;
            answerButton.setAttribute("value", answerButton.textContent);
            answerCard.append(answerButton);
            answerButton.addEventListener("click", answerClick);
    })
}
function answerClick(answerButton) {
    answerButton.preventDefault();
    if (answerButton.value === question.answer) {
        scoreCounter++; //Adds to score count upon clicking correct answer
        scoreCard.textContent = "Score: " + scoreCounter;
        localStorage.setItem("scoreCount", scoreCounter);
    } else {
        timerCount -= 5; //Takes 5 seconds away for every wrong answer
        scoreCounter--; //Takes away points for incorrect answer
        scoreCard.textContent = "Score: " + scoreCounter;
        localStorage.setItem("scoreCount", scoreCounter);
    }
    counter++
}
