/**
 * Wait for the DOM to finish loading before loading running the game
 * Get the button elements and add event listeners to them
 * Reference from Love Maths project
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            for (let otherButton of buttons) {
                if (otherButton !== button) {
                    otherButton.classList.remove('button-selected');
                }
            }
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
});

const instructionsContainer = document.getElementById('instructions-container');
const gameContainer = document.getElementById('game-container');
let userResult;
let userNumberSelected;
let images = ["assets/images/1-finger.webp", "assets/images/2-fingers.webp", "assets/images/3-fingers.webp", "assets/images/4-fingers.webp", "assets/images/5-fingers.webp"];
let finalResult;
let cpuNumberSelected;

/**
 * This function starts the game by switching the screens
 */
function startGame() {
    console.log('Started');
    instructionsContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
}

/** 
 * This function gets the user selection between odds and evens
 */
function getUserOption(userOption) {
    console.log('User selection');

    if (userOption === 'btn-odds') {
        userResult = 1;
    } else if (userOption === 'btn-evens') {
        userResult = 0;
    }
    console.log(userResult);
    enableNumberButton();
}

function activeButtons() {
    let activeButton = document.querySelectorAll('button.btn');
    activeButton.forEach(button => button.classList.add('button-selected'));
}

/**
 * This function enables the number selection buttons, forcing user first pick-up a game option;
 */
function enableNumberButton() {
    let numberButton = document.querySelectorAll('button.number-button');
    numberButton.forEach(button => button.removeAttribute('disabled'));
}

/**
 * This function get the user input for the game from 1 to 5 and run the game
 */

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

function runGame() {
    cpuNumberSelected = (Math.floor(Math.random() * images.length) + 1);
    console.log('CPU Number')
    console.log(cpuNumberSelected);

    let finalNumber = (cpuNumberSelected + userNumberSelected) % 2

    displayImages();
    checkWinner();
    
function checkWinner() {

    if (userResult === finalNumber) {
        finalResult = 'Winner';
    } else {
        finalResult = 'Lose'
    }}
    console.log(finalResult); 
    displayImages();
    showResults();
}

function displayImages() {
    let imageUserResult = images[userNumberSelected - 1];
    let imageUserElement = document.getElementById('user-image');
    imageUserElement.src = imageUserResult;
    imageUserElement.alt = `Image showing a hand with ${userNumberSelected} fingers`;
    let imageCpuResult = images[cpuNumberSelected - 1];
    let imageCpuElement = document.getElementById('cpu-image');
    imageCpuElement.src = imageCpuResult;
    imageUserElement.alt = `Image showing a hand with ${cpuNumberSelected} fingers`;
}

function showResults() {
    if (finalResult === 'Winner') {
        document.getElementById('show-results').innerHTML = 'You won! Keep playing!'
        incrementResults();
    } else {
        document.getElementById('show-results').innerHTML = 'CPU won! Keep playing!'
    }
    incrementPlayed();
}

function incrementResults() {
    let oldResults = parseInt(document.getElementById('rounds-won').innerText);
    document.getElementById('rounds-won').innerText = ++oldResults;
}

function incrementPlayed() {
    let oldPlayed = parseInt(document.getElementById('rounds-played').innerText);
    document.getElementById('rounds-played').innerText = ++oldPlayed;
}