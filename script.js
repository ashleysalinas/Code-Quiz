var question = document.querySelector(".question-card");
var startButton = document.querySelector(".start-button");
var timeCount = 10;

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

startButton.addEventListener("click", startGame)

function startGame() {
    
}