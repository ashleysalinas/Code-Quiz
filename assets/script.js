var question = document.querySelector(".question-card");
var startButton = document.querySelector(".start-button");
var timerCard = document.querySelector(".timer-card");
var introCard = document.querySelector(".intro-card");
var answerCard = document.querySelector(".answer-card");
var scoreCard = document.querySelector(".score-card")
var gameOverCard = document.querySelector(".game-over-card")
var endgameScore = document.querySelector("#endgame-score")
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
    {name: "What does the acronym \"DOM\" stand for?",
    choices: ["Document Object Mode", "Document Object Model", "Download Object Manual", "Document Own Maker"],
    answer: "Document Object Model"
    },
    {name: "What is another name for the back-end of web development?",
    choices: ["Driver side", "Development side", "Client side", "Server side"],
    answer: "Server side"
    },
    {name: "Which of the following is a valid \"for\" loop in Javascript?",
    choices: ["For in", "For out", "A & B", "None of the above"],
    answer: "A & B"
    },
    {name: "What is the attribute tag in HTML?",
    choices: ["<atr>", "<link>", "<a>", "<tag>"],
    answer: "<a>>"
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

    startTimer();
};

//Creates countdown timmer
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerCard.textContent = "Time remaining: " + timerCount
    if (timerCount == 0) {
        clearInterval(timer)
        gameOver;
    }
    }, 1000)
}

var currentQuestion = questionsList[counter];
function displayQuestion() {
    startButton.style.visibility = "hidden";
    question.textContent = currentQuestion.name;
    answerCard.innerHTML = "" //clears out old answer choices
    currentQuestion.choices.forEach(function(item) {
            var answerButton = document.createElement("Button");
            answerButton.textContent = item;
            answerButton.setAttribute("value", answerButton.textContent);
            answerCard.append(answerButton);
            answerButton.addEventListener("click", displayNextQuestion)
    })
}
function displayNextQuestion(button) {
    if (this.value === currentQuestion.answer) {
        scoreCounter++; //Adds to score count upon clicking correct answer
        scoreCard.textContent = "Score: " + scoreCounter;
        localStorage.setItem("scoreCount", scoreCounter);
    } else {
        timerCount -= 5; //Takes 5 seconds away for every wrong answer
        scoreCounter--; //Takes away points for incorrect answer
        if (scoreCounter < 0) {
            scoreCounter = 0 //prevents negative scores
        }
        scoreCard.textContent = "Score: " + scoreCounter;
        localStorage.setItem("scoreCount", scoreCounter);
    }
    counter++
    currentQuestion = questionsList[counter];
    if (counter === questionsList.length) {
        gameOver();
    } else {
        new displayQuestion(currentQuestion)
    }
}


function gameOver() {
    counter = 0
    timerCard.style.visibility = "hidden"
    question.style.visibility = "hidden"
    answerCard.style.visibility = "hidden"
    scoreCard.style.visibility = "hidden"
    gameOverCard.style.visibility = "visible"
    endgameScore.textContent = "Your score is: " + scoreCounter;
    var resetButton = document.createElement("button");
    gameOverCard.appendChild(resetButton)
    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    counter = 0
    localStorage.clear()
    location.reload()
}
