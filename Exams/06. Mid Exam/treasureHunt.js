function treasureHunt(input) {
    let items = input.shift() .split('|');

    for (let command of input) {
        command = command.split(' ');
        if (command[0] === 'Yohoho!') {
            break;
        } else if (command[0] === 'Loot') {
            command.shift();
            let lootItems = command;
            for(let item of lootItems) {
                if(items.includes(item)) {
                    continue;
                } else {
                    items.unshift(item);
                }
            }
        } else if (command[0] === 'Drop') {
            let index = Number(command[1]);
            if(index >= 0 && index < items.length) {
                let tempValue = items[index];
                items.splice(index, 1);
                items.push(tempValue);
            }
            
        } else if (command[0] === 'Steal') {
            let stealNum = Number(command[1]);
           let printSteal = items.splice(-stealNum, stealNum) .join(', ');
           console.log(printSteal);
        }
    }

    let treasureGain = 0;
    let treasureGainCounter = 0;

    items.forEach(element => {
        treasureGain += element.length;
        treasureGainCounter++;
    });

    const averageTreasureGain = treasureGain / treasureGainCounter;

    if(items.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    }
    
}

// treasureHunt([ 'Gold|Silver|Bronze|Medallion|Cup', 'Loot Wood Gold Coins', 'Loot Silver Pistol', 'Drop 3', 'Steal 3', 'Yohoho!' ] );
treasureHunt([ 'Diamonds|Silver|Shotgun|Gold', 'Loot Silver Medals Coal', 'Drop -1', 'Drop 1', 'Steal 6', 'Yohoho!' ] );