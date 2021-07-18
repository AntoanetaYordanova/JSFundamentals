function heroesOfCode(inputArr) {
  let heroesNum = inputArr.shift();
  let heroes = {};

  for (let i = 0; i < heroesNum; i++) {
      let currentHero = inputArr.shift();
    let [heroName, hp, mp] = currentHero.split(" ");
    hp = Number(hp);
    mp = Number(mp);
    heroes[heroName] = {
      hp,
      mp,
    };
  }

  for (let command of inputArr) {
    let actionArr = command.split(" - ");

    if (actionArr[0] === "End") {
      break;
    } else if (actionArr[0] === "CastSpell") {
      let heroName = actionArr[1];
      let mpNeeded = Number(actionArr[2]);
      let spellName = actionArr[3];

      if (heroes[heroName].mp >= mpNeeded) {
        heroes[heroName].mp -= mpNeeded;
        console.log(
          `${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`
        );
      } else {
        console.log(
          `${heroName} does not have enough MP to cast ${spellName}!`
        );
      }
    } else if (actionArr[0] === "TakeDamage") {
      let heroName = actionArr[1];
      let damage = Number(actionArr[2]);
      let attacker = actionArr[3];

      if (heroes[heroName].hp > damage) {
        heroes[heroName].hp -= damage;
        console.log(
          `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`
        );
      } else {
        delete heroes[heroName];
        console.log(`${heroName} has been killed by ${attacker}!`);
      }
    } else if (actionArr[0] === "Recharge") {
      let heroName = actionArr[1];
      let recharge = Number(actionArr[2]);
      let newValue = recharge + heroes[heroName].mp;

      if (newValue >= 200) {
        let difference = newValue - 200;
        recharge = recharge - difference;
        heroes[heroName].mp = 200;
        console.log(`${heroName} recharged for ${recharge} MP!`);
      } else {
        heroes[heroName].mp = newValue;
        console.log(`${heroName} recharged for ${recharge} MP!`);
      }
    } else if (actionArr[0] === "Heal") {
      let heroName = actionArr[1];
      let heal = Number(actionArr[2]);
      let newValue = heal + heroes[heroName].hp;

      if (newValue >= 100) {
        let difference = newValue - 100;
        heal = heal - difference;
        heroes[heroName].hp = 100;
        console.log(`${heroName} healed for ${heal} HP!`);
      } else {
        heroes[heroName].hp = newValue;
        console.log(`${heroName} healed for ${heal} HP!`);
      }
    }
  }

  let hpObj = {};

  let heroesNames = Object.keys(heroes);

  for(let heroName of heroesNames) {
    hpObj[heroName] = heroes[heroName].hp;
  }

  let sortedHeroes = Object.entries(hpObj) .sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  

  for(let [heroName, hp] of sortedHeroes) {
    console.log(heroName);
    console.log(`  HP: ${heroes[heroName].hp}`);
    console.log(`  MP: ${heroes[heroName].mp}`);
  }
}

heroesOfCode([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
