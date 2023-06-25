/**
 * Wait for the DOM to finish loading before loading running the game
 * Get the button elements and add event listeners to them
 * Reference from Love Maths project
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "btn-start") {
                startGame();
            } else if (this.getAttribute("data-type") === "btn-exit") {
                location.href = "./index.html";
                console.log('Exit');
            } else if (this.getAttribute("data-type") === "btn-odds" || this.getAttribute("data-type") === "btn-evens") {
                let userOption = this.getAttribute("data-type");
                getUserOption(userOption);
            } else {
                let userNumber = this.getAttribute("data-type");
                getUserNumber(userNumber);
            }
        })
    }
})

const instructionsContainer = document.getElementById('instructions-container');
const gameContainer = document.getElementById('game-container');

function startGame() {
    console.log('Started');
    instructionsContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
}

function getUserOption(userOption) {
    console.log('User selection');
    let userResult;

    if (userOption === 'btn-odds') {
        userResult = 1;
    } else (userOption === 'btn-evens'); {
        userResult = 0;
    }
    console.log(userResult);
}

function getUserNumber() {
    console.log('User number');
}

function runGame() {
    
}