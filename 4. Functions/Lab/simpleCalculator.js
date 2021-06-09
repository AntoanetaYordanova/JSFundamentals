function simpleCalculator(a, b, operator) {
    switch(operator) {
        case 'multiply':
            let multiply = (a, b) => a * b;
            console.log(multiply(a, b));
            break;
        case 'divide':
            let divide = (a, b) => a / b;
            console.log(divide(a, b));
            break;
        case 'add':
            let add = (a, b) => a + b;
            console.log(add(a, b));
            break;
        case 'subtract':
            let substract = (a, b) => a - b;
            console.log(substract(a, b));
            break;
    }
}

simpleCalculator(5, 5, 'multiply');