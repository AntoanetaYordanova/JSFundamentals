function furniture(input) { 
    let sum = 0;

    console.log('Bought furniture:');

    for(let item of input) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;
        let match = pattern.exec(item);

        if(match) {
            let itemName = match.groups.name;
            console.log(itemName);
            sum += Number(match.groups.price) * Number(match.groups.quantity)
        }
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);