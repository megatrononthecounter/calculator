async function getRequest(n1, n2, operation) {
    const url = `http://localhost:8000/${operation}`;
    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({"number1": n1, "number2": n2}),
        });
        if (!response.ok) {
            console.log(response.status);
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.answer;
        } catch (error) {
            console.error(error.message);
        }
    }

    function calculateDivide(numerator, denominator) {

        if (denominator == 0) {
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

    function solve(n1, n2, operation) {
        let number;   
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

        return number;
    }
