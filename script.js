const numberOfDigitsInput = document.getElementById("numberOfDigits");
const numberDisplay = document.getElementById("numberDisplay");
const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkButton");
const resultDisplay = document.getElementById("resultDisplay");

let generatedNumbers = [];
let currentRound = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function generateRandomSequence(length) {
    return Array.from({ length }, generateRandomNumber);
}

function displayNumbers() {
    const numberOfDigits = parseInt(numberOfDigitsInput.value);
    generatedNumbers = generateRandomSequence(numberOfDigits);
    numberDisplay.textContent = generatedNumbers.join(" ");
    setTimeout(hideNumbers, 2000); // Hide numbers after 2 seconds
}

function hideNumbers() {
    numberDisplay.textContent = "";
}

function checkInput() {
    const userSequence = userInput.value.split("").map(Number);
    const isCorrect = arraysAreEqual(userSequence, generatedNumbers);
    const message = isCorrect ? "Correct!" : "Incorrect!";
    
    if (isCorrect) {
        currentRound++;
        displayNumbers();
    resultDisplay.textContent = `${message} Score: ${currentRound} `;

    }
    else{
        displayNumbers(); 
    resultDisplay.textContent = `${message} Score: ${currentRound} `;

    } 
        
    userInput.value = "";
}

function arraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

numberOfDigitsInput.addEventListener("input", displayNumbers);
checkButton.addEventListener("click", checkInput);
