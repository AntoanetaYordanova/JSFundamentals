function softUniBarIncome(input) {
    let customers = [];

    for(let currentInput of input) {
        let pattern = /%(?<customer>[A-Z][a-z]+)%([^\|\$%\.\d]+)?<(?<product>\w+)>([^\|\$%\.\d]+)?\|(?<amount>\d+)\|([^\|\$%\.\d]+)?(?<price>\d+(\.\d+)?)\$/g;
        let match = pattern.exec(currentInput);
        if(match) {
            let name = match.groups.customer;
            let product = match.groups.product;
            let sum = Number(match.groups.amount) * Number(match.groups.price);

            let obj = {
                [name] : {
                    [product] : sum,
                }
            }
            customers.push(obj)
            
        }
    }
    let totalSum = 0;

    for(let customer of customers) {
        let name = Object.keys(customer);
        let product = Object.keys(customer[name[0]]) .toString();
        let sum = (customer[name][product]);
        totalSum += sum;

        console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

// softUniBarIncome([ '%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift' ]);

softUniBarIncome([ '%InvalidName%<Croissant>|2|10.3$', '%Peter%<Gum>1.3$', '%Maria%<Cola>|1|2.4', '%Valid%<Valid>valid|10|valid20$', 'end of shift' ]);