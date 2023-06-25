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

let userResult;

function getUserOption(userOption) {
    console.log('User selection');

    if (userOption === 'btn-odds') {
        userResult = 1;
    } else if (userOption === 'btn-evens') {
        userResult = 0;
    }
    console.log(userResult);
}

let userNumberSelected;

function getUserNumber(userNumber) {
    console.log('User number');

    if (userNumber === 'btn-1') {
        userNumberSelected = 1;
    } else if (userNumber === 'btn-2') {
        userNumberSelected = 2;
    } else if (userNumber === 'btn-3') {
        userNumberSelected = 3;
    } else if (userNumber === 'btn-4') {
        userNumberSelected = 4;
    } else if (userNumber === 'btn-5') {
        userNumberSelected = 5;
    }
    console.log(userNumberSelected);
    runGame();
}

let images = ["assets/images/1-finger.webp", "assets/images/2-fingers.webp", "assets/images/3-fingers.webp", "assets/images/4-fingers.webp", "assets/images/5-fingers.webp"];

let finalResult;

function runGame() {
    let cpuNumber = (Math.floor(Math.random() * images.length) + 1);
    console.log('CPU Number')
    console.log(cpuNumber);
    let finalNumber = cpuNumber % userNumberSelected;
    if (userResult === finalNumber) {
        finalResult = 'Winner';
        alert('You WON! Keep Playing!')
    } else {
        finalResult = 'Lose'
        alert('You LOST! Try Again!')
    }
    console.log(finalResult); 
}