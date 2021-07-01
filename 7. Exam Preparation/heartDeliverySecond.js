function heartDelivery(inputArr) {
  let houses = inputArr.shift().split("@").map(Number);
  let counter = 0;
  let index = 0;

  for (let jump of inputArr) {
      if(jump === 'Love!') {
          break;
      }

    jump = jump.split(" ");
    jumpNum = Number(jump[1]);

    if (jumpNum + index > houses.length - 1) {
      index = 0;
    } else {
      index += jumpNum;
    }

    let tempValue = houses[index];

    if (tempValue === 0) {
      console.log(`Place ${index} already had Valentine's day.`);
      continue;
    }

    houses[index] = tempValue - 2;

    if(houses[index] === 0) {
        console.log(`Place ${index} has Valentine's day.`);
        counter++;
    }

  }

  let failed = houses . length - counter;

  console.log(`Cupid's last position was ${index}.`);

  if(failed === 0) {
    console.log("Mission was successful.");
  } else {
      console.log(`Cupid has failed ${failed} places.`);
  }


}

// heartDelivery([ '10@10@10@2', 'Jump 1', 'Jump 2', 'Love!' ]);
heartDelivery([  "2@4@2",  "Jump 2",  "Jump 2",  "Jump 8",  "Jump 3",  "Jump 1",  "Love!",]);
