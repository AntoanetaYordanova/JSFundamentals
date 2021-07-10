function moneyForCoffee (input) {
    input = input.map(Number);
    let orders = input.shift();
    let totalSum = 0;

    for(let i = 0; i < orders; i++) {
        let pricePerCapsule = input.shift();
        let days = input.shift();
        let capsulesCount = input.shift();

        let currentSum = days * capsulesCount * pricePerCapsule;
        console.log(`The price for the coffee is: $${currentSum.toFixed(2)}`);
        totalSum += currentSum;
    }

    console.log(`Total: $${totalSum.toFixed(2)}`);
}

// moneyForCoffee([ '1', '1.53', '30', '8']);
moneyForCoffee([2,
    4.99,
    31,
    3,
    0.35,
    31,
    5
    ])