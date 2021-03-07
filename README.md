# CodeQuiz

## Description

We were tasked with creating a JavaScript code quiz. It was a good exercise to stretch our understanding of JavaScript and how it affects HTML, and also to put into practice things we've learned through the week.

Quizzes are a good test of timers, editing HTML, and storing to local storage. Personally, I had a struggle getting a for loop to create my buttons at first, but I managed to eventually get it to work. It wasn't computing the array length semantics I was trying to use in it, although unfortunately I don't recall exactly what change I made to get it to behave.

I did my best to make the quiz visually and functionally the same as the gif example we were provided. I wanted to make sure I could use CSS and changing elements in JavaScript to get the end result I was looking for.

While adding information to my repo, I noticed the index I used on my desktop was showing the CSS effects fine, but the website link from my repo was not. I looked into it and someone mentioned that sometimes renaming the files fixes the issue, so I renamed both of my CSS stylesheets and relinked them and it fixed the problem. However, I changed the names back and it's still working. I think it may have been an issue because in my link, the "a" in Assets was not capitalized originally, but after relinking, it is.

[Deployed Website](https://ashleyaggie.github.io/CodeQuiz/)

![Starting Screen](Assets/images/startScreen.png)

![During the Quiz](Assets/images/midQuiz.png)

![Final Score Screen](Assets/images/finalScore.png)

![Highscores Board](Assets/images/highscores.png)

## Changes Made

GIVEN I am taking a code quiz

WHEN I click the start button

THEN a timer starts and I am presented with a question

    * Added event listener for click to start button.

    * Used setInterval function to create and start timer.

    * Pulls a question from array and creates HTML elements to display it on page.

WHEN I answer a question

THEN I am presented with another question

    * After clicking an answer button, runs an if statement to check if it matches the correct answer in the array.

    * Removes buttons and replaces div text and buttons with new question's information

WHEN I answer a question incorrectly

THEN time is subtracted from the clock

    * In if statement, if the clicked button's value does not match the correct answer, it subtracts 10 from the current time

WHEN all questions are answered or the timer reaches 0

THEN the game is over

    * Used if statements so that when timer equals 0 or the array is out of questions, it will run the code for the end game screen

WHEN the game is over

THEN I can save my initials and my score

    * In end game screen, there is an input for initials.

    * After clicking submit, score and initials are saved to local storage.

## Credits

Website code was written by myself (Ashley Wright)

Assignment is part of the SMU Coding Boot Camp

## License

Copyright (c) 2021 Ashley Wright

Covered by the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)