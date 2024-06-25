
var number = 0;
var operation = null;

// allows numbers to appear on the screen of the calculator
function numberInput(val) {
    const element = document.getElementById('screenNumber');
    element.textContent = element.textContent + val;
}

// clears the calculator's screen
function reset() {
    const element = document.getElementById('screenNumber');
    element.textContent = null;
}

// solves the inputted problem
function solve() {
    const element = document.getElementById('screenNumber');
    const numberTwo = Number(element.textContent);

    switch(operation) {
        case '+':
            number = number + numberTwo;
            break;
        case '-':
            number = number - numberTwo;
            break;
        case '*':
            number = number * numberTwo;
            break;
        case '/':
            number = calculateDivide(element, number, numberTwo);
            break;
        case '^':
            number = calculateExponent(number, numberTwo);
            break;

    }

    element.textContent = number;   
}

function operationInput(operationValue) {
   
    const element = document.getElementById('screenNumber');

    number = Number(element.textContent);
    operation = operationValue;
    
    element.textContent = null;

}                     

function calculateDivide(element, numerator, denominator) {

    if (denominator == 0) {
        element.textContent = "you can't divide by 0 silly!"
        return;
    }

    const answer = numerator / denominator;

    return answer;

}

function calculateExponent(numberOne, numberTwo) {

    let answer = numberOne;

    for (let i = 0; i < numberTwo - 1; i++) {
        answer = answer * numberOne;
    }

    return answer;
}