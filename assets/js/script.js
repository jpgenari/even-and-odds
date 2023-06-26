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
                let userButton = this.getAttribute("data-type");
                getUserOption(userButton);
            } else {
                let userNumber = this.getAttribute("data-type");
                getUserNumber(userNumber);
            }
        })
        // activeButtons();
    }
});

// All external variables

const instructionsContainer = document.getElementById('instructions-container');
const gameContainer = document.getElementById('game-container');
let userResult;
let userNumberSelected;
let images = ["assets/images/1-finger.webp", "assets/images/2-fingers.webp", "assets/images/3-fingers.webp", "assets/images/4-fingers.webp", "assets/images/5-fingers.webp"];
let finalResult;
let cpuNumberSelected;
let timeout;


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
 * It triggers enableNumberButton function
 */
function getUserOption(userButton) {
    console.log('User selection');

    if (userButton === 'btn-odds') {
        userOption = 1;
    } else if (userButton === 'btn-evens') {
        userOption = 0;
    }
    console.log(userOption);
    enableNumberButton();
}

function activeButtons() {
    
    button.addEventListener('click', function () {
    // selectedButton = document.getElementsByTagName('button');
    for (let selectedButton of buttons) {
        selectedButton.classList.remove('button-selected');
    }
    this.classList.add('button-selected');
});
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
 * It triggers animationResults function
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

    animationResults();
}

/**
 * Function to delay results to run animation
 * It triggers runGame function
 */
function animationResults() {
    timeout = setTimeout(runGame, 1500);
    document.getElementById('show-results').innerHTML = 'Waiting...'
}

/**
 * Function to generate random number for the cpu and calculate calculate if cpu + user numbers summed are even (0) of odd (1) using module operation
 * It triggers checkWinner functions
 */
function runGame() {
    cpuNumberSelected = (Math.floor(Math.random() * images.length) + 1);
    console.log('CPU Number')
    console.log(cpuNumberSelected);

    let finalNumber = (cpuNumberSelected + userNumberSelected) % 2

    checkWinner();
    
/**
 * Function to check if winner is user or cpu by comparing user selected option vs final number
 * It triggers displayImages and showResults
 */
function checkWinner() {

    if (userOption === finalNumber) {
        finalResult = 'Winner';
    } else {
        finalResult = 'Lose'
    }}
    console.log(finalResult); 
    displayImages();
    showResults();
}

/**
 * Function to display images and their alt info on the DOM
 */
function displayImages() {
    let imageUserOption = images[userNumberSelected - 1];
    let imageUserElement = document.getElementById('user-image');
    imageUserElement.src = imageUserOption;
    imageUserElement.alt = `Image showing a hand with ${userNumberSelected} fingers`;
    let imageCpuResult = images[cpuNumberSelected - 1];
    let imageCpuElement = document.getElementById('cpu-image');
    imageCpuElement.src = imageCpuResult;
    imageUserElement.alt = `Image showing a hand with ${cpuNumberSelected} fingers`;
}

/**
 * Function used to display who's the winner in the round
 * It triggers incrementResults and incrementPlayed functions
 */
function showResults() {
    if (finalResult === 'Winner') {
        document.getElementById('show-results').innerHTML = 'You won!'
        incrementResults();
    } else {
        document.getElementById('show-results').innerHTML = 'CPU won! Try again!'
    }
    incrementPlayed();
}

/**
 * Function to increment the number of wins for the user
 */
function incrementResults() {
    let oldResults = parseInt(document.getElementById('rounds-won').innerText);
    document.getElementById('rounds-won').innerText = ++oldResults;
}

/**
 * Function to increment the number of rounds played
 */
function incrementPlayed() {
    let oldPlayed = parseInt(document.getElementById('rounds-played').innerText);
    document.getElementById('rounds-played').innerText = ++oldPlayed;
}