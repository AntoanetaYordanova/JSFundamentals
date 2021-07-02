function computerStore(inputArr){
    let typeClient = inputArr.pop();
    let sumWithoutTaxes = 0;
    let taxes = 0;
    let prices = inputArr.map(Number);
    

    for(let price of prices) {
        if(price < 0) {
            console.log('Invalid price!');
            continue;
        }

        taxes += price * 0.2;
        sumWithoutTaxes += price;
    }

    let totalSum = sumWithoutTaxes + taxes;

    if(typeClient === 'special') {
        totalSum *= 0.9;
    }

    if(totalSum === 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sumWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalSum.toFixed(2)}$`);
    }
}

computerStore([  '1050',    '200',  '450',     '2',  '18.50',   '16.86',  'special']);
// computerStore(['1023',  '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular'])
// computerStore([ 'regular' ]);