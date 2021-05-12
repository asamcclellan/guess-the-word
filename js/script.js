const guesses = document.querySelector(".guessed-letters");
// where your guessed letters will appear
const guessButton = document.querySelector(".guess");
// the button with "guess" in it
const letterInput = document.querySelector(".letter");
// where the player enters text
const progress = document.querySelector(".word-in-progress")
// where the word in progress will appear
const remaining = document.querySelector(".remaining");
// paragraph where the remaining guesses will appear
const remainingSpan = document.querySelector(".remaining span")
// span in paragraph where remaining guesses will appear
const message = document.querySelector(".message");
// where messages will appear when players guess a letter
const playAgainButton = document.querySelector(".play-again")
// hidden: appears when it's time to play again
const word = "magnolia";
// starting word to test the script
const guessedLetters = [];
// this will contain the players guesses

const makeWord = function (word) {
    const freshWord = [];

    for (let letter of word) {
        freshWord.push("●");
    }

    progress.innerText = freshWord.join("");
    //understand the join method more
}

makeWord(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputValue = letterInput.value;

    checkInput (inputValue);
    letterInput.value = "";
})

const checkInput = function (inputValue) {
    const acceptedLetter = /[a-zA-Z]/
    inputValue = inputValue.toUpperCase();

    if (inputValue != "") {
        if (inputValue.length === 1) {
            if (inputValue.match(acceptedLetter)) {
                if (!guessedLetters.includes(inputValue)) {
                    message.innerText = `You guessed "${inputValue}".`;
                    guessedLetters.push(inputValue);
                    // console.log(guessedLetters);
                    displayGuesses(guessedLetters);
                    updateWip(guessedLetters);
                    return inputValue;
                } else {
                    message.innerText = `You already guessed ${inputValue}!`;
                }    
            } else {
                message.innerText = "Letters only please!"
            }
        } else {
            message.innerText = "Too many characters, no cheating!"
        }
    } else {
        message.innerText = "Please input something!"
    }
}

// const makeGuess = function (inputValue) {
//     inputValue = inputValue.toUpperCase();
//
//     if (guessedLetters.includes(inputValue)) {
//         message.innerText = `You've already guessed ${inputValue}!`;
//     } else {
//         guessedLetters.push(inputValue);
//         console.log(guessedLetters);
//     }
// } Kind of made this unncessary by adding it to checkInput()

const displayGuesses = function (guessedLetters) {
    guesses.innerHTML = "";

    guesses.append(guessedLetters);
}

const updateWip = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    // console.log(wordArray);
    const buildWord = [];

    for (let letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            buildWord.push(letter);
        } else {
            buildWord.push("●");
        }
    }
    progress.innerText = buildWord.join("");
    console.log(`buildWord: ${buildWord}`);
    //understand the join method more
    checkIfWin();
}

const checkIfWin = function () {
    if (word.toUpperCase() === progress.innerText) {
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`
    }
}