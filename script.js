let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9)
const getAbsoluteDistance = (num1, num2) => {

    Math.abs(num1 - num2);
}
const compareGuesses = (humanGuess, cpuGuess, secretNumber) => {
    const playerDistance = getAbsoluteDistance(humanGuess, secretNumber)
    const cpuDistance = getAbsoluteDistance(cpuGuess, secretNumber)
    if (cpuDistance === 0 && playerDistance === 0) {
        return true
    }
    if (cpuDistance < playerDistance) {
        return false
    }
    if (cpuDistance > playerDistance) {
        return true
    }
}
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    }
    else {
        computerScore += 1
    }
}
const advanceRound = () => {
    currentRoundNumber += 1;
}