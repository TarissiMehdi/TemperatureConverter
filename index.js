// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const correctNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attemps = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}:`);
    guess = Number(guess);
    attemps++;

    if(attemps  ==5) {
        window.alert(`Sorry, you've exceeded the maximum number of attempts. The correct number was ${correctNum}.`);
        break;
    }

    if (guess < minNum || guess > maxNum || isNaN(guess)) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}.`);
    }
    else if (guess < correctNum) {
        window.alert("Too low! Try again.");
    }
    else if (guess > correctNum) {
        window.alert("Too high! Try again.");
    }
    else {
        window.alert(`Congratulations! You guessed the correct number ${correctNum} in ${attemps} attempts.`);
        running = false;
    }

}

