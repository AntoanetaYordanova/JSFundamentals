function factorialDivision(numOne, numTwo) {
    let factorialOne = 1;
    let factorialTwo = 1;

    for(let i = numOne; i > 0; i--) {
        factorialOne *= i;
    }

    for(let i = numTwo; i > 0; i--) {
        factorialTwo *= i;
    }

    let sum = (factorialOne / factorialTwo).toFixed(2);

    console.log(sum);
}

factorialDivision(6, 2)