function manOWar(input) {
    let pirateShip = input.shift() .split('>') .map(Number);
    let warShip = input.shift() .split('>') .map(Number);
    let maxHealth = Number(input.shift());
    let isStalemate = false;

    for(let i = 0; i < input.length; i++) {
        let command = input[i];
        command = command.split(' ');
        let action = command.shift();
        if (action === 'Retire') {
            isStalemate = true;
            break;
        }
        command = command.map(Number);
         if (action === 'Fire') {
            let [index, damage] = command;
            if(index >= 0 && index < warShip.length) {
                let tempValue = warShip[index] - damage;

                if(tempValue <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }

                warShip[index] = tempValue;
            }
        } else if (action === 'Defend') {
            let [startIndex, endIndex, damage] = command;
            if (startIndex >= 0 && startIndex < pirateShip.length && 
                endIndex >= 0 && endIndex < pirateShip.length) {

                    for (let i = startIndex; i <= endIndex; i++) {
                        let tempValue = pirateShip[i] - damage;

                        if(tempValue <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }

                        pirateShip[i] = tempValue;
                    }
                }
        } else if (action === 'Repair') {
            let [index, addHealth] = command;
            if(index >= 0 && index < pirateShip.length) {
                let tempValue = pirateShip[index] + addHealth;
                if(tempValue < 70) {
                    pirateShip[index] = tempValue;
                } else {
                    pirateShip[index] = 70;
                }
            }
        } else if (action === 'Status') {
            let sectionsCounter = 0;

            pirateShip.forEach(element => {
                let percentsDamage = element * 100 / maxHealth;
                if(percentsDamage < 20) {
                   sectionsCounter++;
                }
            })

            console.log(`${sectionsCounter} sections need repair.`);
        }
    }

    if(isStalemate) {
        let pirateShipStatus = 0;
        let warShipStatus = 0

        pirateShip.forEach(element => {
            pirateShipStatus += element;
        })

        warShip.forEach(element => {
            warShipStatus += element;
        })

        console.log(`Pirate ship status: ${pirateShipStatus}`);
        console.log(`Warship status: ${warShipStatus}`);
    }
}

// manOWar([ '12>13>11>20>66', '12>22>33>44>55>32>18', '70', 'Fire 2 11', 'Fire 8 100', 'Defend 3 6 11', 'Defend 0 3 5', 'Repair 1 33', 'Status', 'Retire' ]);
manOWar([ '2>3>4>5>2', '6>7>8>9>10>11', '20', 'Status', 'Fire 2 3', 'Defend 0 4 11', 'Repair 3 18', 'Retire' ]);