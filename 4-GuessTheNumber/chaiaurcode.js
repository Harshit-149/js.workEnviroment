
let randomNum = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let GuessesRemaining = 10;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();

        const guess = Number(userInput.value);
        ValidateGuess(guess);
    });
}

function ValidateGuess(guess) {
    if (userInput.value.trim() === '' || isNaN(guess)) {
        alert('Please enter a valid number');
    }
    else if (guess < 1 || guess > 100) {
        alert('Please enter a number between 1 and 100');
    }
    else {
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage('You guessed the right number!');
        endGame();
    }
    else if (guess < randomNum) {
        displayMessage('The generated number is larger!');
    }
    else {
        displayMessage('The generated number is smaller!');
    }

    if (GuessesRemaining === 0 && guess !== randomNum) {
        displayMessage(`Game Over! The number was ${randomNum}`);
        endGame();
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.textContent = prevGuess.join(', ');
    lastResult.textContent = GuessesRemaining - 1;
    GuessesRemaining--;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.disabled = true;
    submit.disabled = true;

    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);

    playGame = false;

    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');

    newGameButton.addEventListener('click', () => {
        randomNum = Math.floor(Math.random() * 100) + 1;

        prevGuess = [];
        GuessesRemaining = 10;
        playGame = true;

        guessSlot.textContent = '';
        lastResult.textContent = GuessesRemaining;
        lowOrHigh.textContent = '';

        userInput.disabled = false;
        submit.disabled = false;

        startOver.removeChild(p);
        userInput.focus();
    });
}
