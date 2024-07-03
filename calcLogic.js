module.exports = function solve(n1, n2, operation) {
    let number;   
    switch(operation) {
        case '+':
            number = n1 + n2;
            break;
        case '-':
            number = n1 - n2;
            break;
        case '*':
            number = n1 * n2;
            break;
        case '/':
            number = calculateDivide(n1, n2);
            if (!number) return;
            break;
        case '^':
            number = calculateExponent(n1, n2);
            break;

    }

    return number;
}


function calculateDivide(numerator, denominator) {

    if (denominator == 0) {
        element.textContent = "impossible!"
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