function dungeonestDark(inputArr) {
    let health = 100;
    let roomCounter = 0;
    let coins = 0;
    let tasks = inputArr[0].split('|');
    let isDead = false;
    
    for(let currentTask of tasks){
        roomCounter++;
        let [action, points] = currentTask.split(' ');
        points = Number(points);

        if(action === 'potion') {
            let newHealth = health + points;
            if(newHealth <= 100 ) {
                health = newHealth;
                console.log(`You healed for ${points} hp.`);
            } else {
                let difference = newHealth - 100;
                let healedWith = points - difference;
                health = 100;
                console.log(`You healed for ${healedWith} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (action === 'chest') {
            coins += points;
            console.log(`You found ${points} coins.`);
        } else {
            health -= points;
            if(health > 0) {
                console.log(`You slayed ${action}.`);
            } else {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${roomCounter}`);
                isDead = true;
                break;
            }
        }
    } 

    if(!isDead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);