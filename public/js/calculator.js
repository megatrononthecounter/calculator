
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
    const screenCalc = document.getElementById('screenCalc')
    
    element.textContent = null;
    screenCalc.textContent = null;
}


async function solveAsync() {
    const element = document.getElementById('screenNumber');
    const screenCalc = document.getElementById('screenCalc');
    const numberTwo = Number(element.textContent);

    
switch(operation) {
    case '+':
        number = await getRequest(number, numberTwo, 'Add');
        break;
    case '-':
        number = await getRequest(number, numberTwo, 'Subtract');
        break;
    case '*':
        number = await getRequest(number, numberTwo, 'Multiply');
        break;
    case '/':
        number = await getRequest(number, numberTwo, 'Divide');
        if (!number) return;
        break;
    case '^':
        number = await getRequest(number, numberTwo, 'Exponent');
        break;

}
        element.textContent = number;
        screenCalc.textContent += numberTwo;

        number = null;
    }


// solves the inputted problem
function solve() {
    const element = document.getElementById('screenNumber');
    const numberTwo = Number(element.textContent);
    const screenCalc = document.getElementById('screenCalc')

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
            if (!number) return;
            break;
        case '^':
            number = calculateExponent(number, numberTwo);
            break;

    }

    element.textContent = number;
    screenCalc.textContent += numberTwo;
    
    number = null;
}

function operationInput(operationValue) {
    // get the screen number
    const element = document.getElementById('screenNumber');

    number = Number(element.textContent);
    operation = operationValue;
    setscreenCalc(operation, number);
    element.textContent = null;

}                     

function setscreenCalc(op, number) {
const element = document.getElementById('screenCalc');
element.textContent = number + ' ' + op + ' '; 

}


