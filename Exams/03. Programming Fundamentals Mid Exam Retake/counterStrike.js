function counterStrike(inputArr) {
  let energy = Number(inputArr.shift());
  let winsCounter = 0;

  while ((battle = inputArr.shift()) !== "End of battle") {
    battle = Number(battle);
   
    

    if (energy < battle) {
      console.log(
        `Not enough energy! Game ends with ${winsCounter} won battles and ${energy} energy`
      );
      return;
    }

    energy -= battle;    
    winsCounter++;

    if (winsCounter % 3 === 0) {
      energy += winsCounter;
    }
  }

  console.log(`Won battles: ${winsCounter}. Energy left: ${energy}`);
}

// counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
counterStrike(["100", 10, 10, 10, 1, 2, 3, 73, 10]);
