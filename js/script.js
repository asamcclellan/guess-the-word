const guessedLetters = document.querySelector(".guessed-letters");
// where your guessed letters will appear
const button = document.querySelector(".guess");
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

const wipUpdater = function () {
    const freshWord = [];

    for (let letter of word) {
        freshWord.push("●");
    }

    progress.innerText = freshWord.join("");
}

wipUpdater();

button.addEventListener("click", function (e) {
    e.preventDefault();
    const inputValue = letterInput.value;

    if (inputValue != "") {
        if (inputValue.length === 1) {
            message.classList.add("hide");
            letterInput.value = "";
        } else {
            message.classList.remove("hide");
            message.innerText = "That's too many letters!";
            letterInput.value = "";
        }
    } else {
        message.classList.remove("hide");
        message.innerText = "Please enter something!"
        letterInput.value = "";
    }
})