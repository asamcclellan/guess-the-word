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

const wipUpdater = function (word) {
    const freshWord = [];

    for (let letter of word) {
        freshWord.push("●");
    }

    progress.innerText = freshWord.join("");
}

wipUpdater(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputValue = letterInput.value;

    checkInput (inputValue);
    letterInput.value = "";
})

const checkInput = function (inputValue) {
    const acceptedLetter = /[a-zA-Z]/
    makeGuess(inputValue);

    if (inputValue != "") {
        if (inputValue.length === 1) {
            if (inputValue.match(acceptedLetter)) {
                return inputValue;
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

const makeGuess = function (inputValue) {
    inputValue = inputValue.toUpperCase();

    if (guessedLetters.includes(inputValue)) {
        message.innerText = `You've already guessed ${inputValue}!`;
    } else {
        guessedLetters.push(inputValue);
        console.log(guessedLetters);
    }
}