// Assign variables
var startBtn = document.querySelector(".start-btn");
var scoresBtn = document.querySelector(".scores");
var questionEl = document.querySelector(".title");
var timer = document.querySelector('.timer');
var timerEl = document.querySelector('.count');
var questionContain = document.querySelector('.container');
var beginText = document.querySelector('.text');
var answersList = document.querySelector('.answersList');
var scoreBoard = document.querySelector('.highscores');
var questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            'Hypertext Markup Language',
            'Helpful Text Machine Language',
            'Hypertext Markdown Language'
        ],
        correctAnswer: 'Hypertext Markup Language'
    },
    {
        question: 'Choose the correct HTML element to define important text.',
        answers: [
            '&lt;em&gt',
            '&lt;i&gt',
            '&lt;strong&gt',
            '&lt;important&gt'
        ],
        correctAnswer: '&lt;strong&gt'
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        answers: [
            '&lt;a rel&gt',
            '&lt;a href&gt',
            '&lt;a ref&gt'
        ],
        correctAnswer: '&lt;a href&gt'
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        answers: [
            'True',
            'False'
        ],
        correctAnswer: 'True'
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            'Creative Standard Syntax',
            'Cascading Style Sheets',
            'Cascading Sheet Styles'
        ],
        correctAnswer: 'Cascading Style Sheets'
    },
    {
        question: 'How do you link a CSS style sheet?',
        answers: [
            '&lt;script&gt',
            '&lt;a href&gt',
            '&lt;link rel="stylesheet"&gt'
        ],
        correctAnswer: '&lt;link rel="stylesheet"&gt'
    },
    {
        question: 'How do you insert a comment in a CSS file?',
        answers: [
            '/* */',
            '// ',
            '* *'
        ],
        correctAnswer: '/* */'
    },
    {
        question: 'What do we use to center text in CSS?',
        answers: [
            'text-align',
            'justify-content',
            'align-content'
        ],
        correctAnswer: 'text-align'
    },
    {
        question: 'A boolean allows for multiple values.',
        answers: [
            'True',
            'False'
        ],
        correctAnswer: 'False'
    },
    {
        question: 'A useful tool for debugging and showing content in the debugger is: ___',
        answers: [
            'console',
            'HTML',
            'console.log'
        ],
        correctAnswer: 'console.log'
    }
];
var answers = [];
var index = 0;
var score = 0;
var timeInterval;

var scoresList = JSON.parse(localStorage.getItem("topScores"));

if (scoresList === null) {
    scoresList = [];
}

// Click View Highscores to go to list of highscores stored in local storage
scoresBtn.addEventListener("click", highScores);

function highScores () {

    scoresBtn.remove();
    timerEl.remove();
    answersList.innerHTML = "";

    var storedScores = scoresList;

    // Re-style the h1 so it can be used for the question text.
    questionContain.style.textAlign = "left";
    questionContain.style.maxWidth = "40%";
    
    // Remove the Start button and beginning screen text.
    beginText.remove();
    startBtn.remove();

    // Change title
    questionEl.innerHTML = "Highscores";
    if(storedScores === null) {
         
    } else {
        for (var i = 0; i < storedScores.length; i++) {
            var listItem = document.createElement("li");
            listItem.innerHTML = storedScores[i];
            listItem.classList.add("scoreItem");
            scoreBoard.append(listItem);
        }
    }

    // Button to go back to home screen
    var goBackBtn = document.createElement("button");
    goBackBtn.innerHTML = "Go Back";
    questionContain.append(goBackBtn);
    goBackBtn.addEventListener("click",function goBack(){
        location.reload();
    });

    // Button to clear all highscores
    var clearBtn = document.createElement("button");
    clearBtn.innerHTML = "Clear Highscores";
    questionContain.append(clearBtn);
    clearBtn.addEventListener("click",function clearStorage(){
        localStorage.clear();
        scoreBoard.innerHTML = "";
    });
    
}

// Game runs
function gameRun() {

    console.log(score);
    
    // Remove the Start button and beginning screen text.
    beginText.remove();
    startBtn.remove();
    // Re-style the h1 so it can be used for the question text.
    questionContain.style.textAlign = "left";
    questionContain.style.maxWidth = "40%";

    // Pull a question from array
    
    var quizQuestion = questions[index];
    console.log(quizQuestion);

    // Show question on screen
    questionEl.textContent = quizQuestion.question;

    // Create and add buttons for each answer in answers array for the question
    for (i = 0; i <= quizQuestion.answers.length - 1; i++){
        var button = document.createElement("button");
        var listItem = document.createElement("li");
        button.innerHTML = quizQuestion.answers[i];
        button.value = quizQuestion.answers[i];
        listItem.append(button);
        answersList.append(listItem);
        button.addEventListener("click", verifyChoice);
    }

    // When an answers button is clicked, check if the value matches the correct answer
    function verifyChoice() {

        // If correct, show "Correct!", add 10 to score, and go to new question
        if(event.currentTarget.value === quizQuestion.correctAnswer){
            if(verify === true){
                verify.innerHTML = "";
            }
            var verify = document.createElement("p");
            verify.classList.add("verify");
            verify.innerHTML = "Correct!";
            questionContain.append(verify);
            answersList.innerHTML = "";
            score = score + 10;

            verifytimer = 0;
    
            var timeInterval = setInterval(function () {

                if (verifytimer > 0) {
                    verifytimer = verifytimer - 1;
                } else {
                    clearInterval(timeInterval);
                    verify.remove();
                }
            }, 1000);

            index++;

            if (index === 10) {
                gameOver();
            } else {
            gameRun();
            }
        }

        // If incorrect, show "incorrect!", subtract 10 seconds from time left, and go to new question
        else {
            var verify = document.createElement("p");
            verify.classList.add("verify");
            verify.innerHTML = "Incorrect!";
            timeLeft = timeLeft - 10;
            questionContain.append(verify);
            answersList.innerHTML = "";

            verifytimer = 0;
    
            var timeInterval = setInterval(function () {

                if (verifytimer > 0) {
                    verifytimer = verifytimer - 1;
                } else {
                    clearInterval(timeInterval);
                    verify.remove();
                }
            }, 1000);

            index++;

            if (index === 10) {
                gameOver();
            } else {
            gameRun();
            }
        }
    };
    
}

// Click start button
startBtn.addEventListener("click", function() {

    //Timer starts
    timeLeft = 49;
    
    timeInterval = setInterval(function () {

        if (timeLeft > 0) {
            timer.textContent = timeLeft;
            timeLeft = timeLeft - 1;
        }
        
        // If timer reaches 0, end game
        else {
            clearInterval(timeInterval);
            timer.textContent = 0;
            gameOver();
        }
    }, 1000);

    gameRun();
})

function gameOver() {

    clearInterval(timeInterval);

    answersList.innerHTML = "";
    questionEl.innerHTML = "All done!";
    
    var finalText = document.createElement("p");
    finalText.classList.add("finalText");
    finalText.innerHTML = "Your final score is " + score + ".";

    var formEl = document.createElement("form");
    var submitBtn = document.createElement("input");
    submitBtn.setAttribute("type","submit");
    submitBtn.classList.add("submit");
    var submitBox = document.createElement("input");
    submitBox.setAttribute("type","text");
    questionContain.append(finalText);
    questionContain.append(formEl);
    formEl.append("Enter initials: ");
    formEl.append(submitBox);
    formEl.append(submitBtn);

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
      
        var scoreEntry = submitBox.value.trim();
      
        // Return from function early if submitted todoText is blank
        if (scoreEntry === "") {
          return;
        }
      
        // Add new todoText to todos array, clear the input
        scoresList.push(scoreEntry + " - " + score);

        console.log(scoresList);
      
        // Store updated scores in localStorage
        localStorage.setItem("topScores",JSON.stringify(scoresList));
        formEl.remove();
        finalText.remove();
        highScores();
      });
}

