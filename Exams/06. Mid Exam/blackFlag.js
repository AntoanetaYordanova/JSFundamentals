function blackFlag(input) {
    input = input.map(Number);
    let days = input.shift();
    let dailyPlunder = input.shift();
    let targetPlunder = input[0];
    let totalPlunder = 0;
    let daysCounter = 0;

    for(let i = 0; i < days; i++) {
        daysCounter++;
        totalPlunder += dailyPlunder;
        if(daysCounter % 3 === 0) {
            totalPlunder += (dailyPlunder / 2);
        }
        if(daysCounter % 5 === 0) {
            totalPlunder *= 0.7;
        }
    }

    if(targetPlunder <= totalPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentsPlunder = totalPlunder * 100 / targetPlunder;
        console.log(`Collected only ${percentsPlunder.toFixed(2)}% of the plunder.`);
    }
}

// blackFlag([ '5', '40', '100' ]);
blackFlag([ '10', '20', '380' ]);