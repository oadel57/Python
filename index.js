const wordList = require('./hangman_words');
const { logo, stages } = require('./hangman_art');

console.log(logo);

let lives = 6;
const chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
let placeholder = "_".repeat(chosenWord.length);
console.log("Word to guess: " + placeholder);

let gameOver = false;
let correctLetters = [];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askGuess() {
    if (gameOver) {
        readline.close();
        return;
    }
    
    console.log(`**************************** ${lives}/6 LIVES LEFT ****************************`);
    readline.question("Guess a letter: ", (guess) => {
        guess = guess.toLowerCase();

        if (correctLetters.includes(guess)) {
            console.log(`You've already guessed ${guess}!`);
        }

        let display = "";
        for (let letter of chosenWord) {
            if (letter === guess) {
                display += letter;
                if (!correctLetters.includes(guess)) correctLetters.push(guess);
            } else if (correctLetters.includes(letter)) {
                display += letter;
            } else {
                display += "_";
            }
        }

        console.log("Word to guess: " + display);

        if (!chosenWord.includes(guess)) {
            console.log(`You guessed ${guess}, that's not in the word. You lose a life.`);
            lives--;

            if (lives === 0) {
                gameOver = true;
                console.log(`***********************YOU LOSE********************** \nCorrect word was ${chosenWord}`);
                readline.close();
                return;
            }
        }

        if (!display.includes("_")) {
            gameOver = true;
            console.log("****************************YOU WIN****************************");
            readline.close();
            return;
        }

        console.log(stages[lives]);
        askGuess();
    });
}

askGuess();
