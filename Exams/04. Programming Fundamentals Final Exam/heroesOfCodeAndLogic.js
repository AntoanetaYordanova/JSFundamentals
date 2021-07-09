function heroesOfCode(inputArr) {
    let heroesNum = inputArr.shift();
    let heroes = [];

    for(let i = 0; i < heroesNum; i++) {
        heroes.push(inputArr.shift());
    }

    for(let command of inputArr) {
        let actionArr = command.split(' - ');

        if(actionArr[0] === 'End') {
            break;
        } else if (actionArr[0] === 'CastSpell') {
            
        } else if (actionArr[0] === 'TakeDamage') {

        } else if (actionArr[0] === 'Recharge') {

        } else if (actionArr[0] === 'Heal') {

        }
    }
}

heroesOfCode([ '2', 'Solmyr 85 120', 'Kyrre 99 50', 'Heal - Solmyr - 10', 'Recharge - Solmyr - 50', 'TakeDamage - Kyrre - 66 - Orc', 'CastSpell - Kyrre - 15 - ViewEarth', 'End' ])