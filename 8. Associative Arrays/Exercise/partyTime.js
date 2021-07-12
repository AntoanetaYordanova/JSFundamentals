function partyTime(input) {
  let list =  {
      vip : [],
      noVip : []
  }

  let guest = input.shift();

  while(guest !== 'PARTY') { 

      if(guest[0] >= 0 && guest[0] <= 9) {
          list.vip.push(guest);
      } else {
          list.noVip.push(guest);
      }

      guest = input.shift();
  }

  let guestCounter = 0;

  for(let guestComing of input) {

      if(guestComing[0] >= 0 && guestComing[0] <=9) {
        let index = list.vip.indexOf(guestComing);
        list.vip.splice(index, 1);
        guestCounter++
      } else {
        let index = list.noVip.indexOf(guestComing);
        list.noVip.splice(index, 1);
        guestCounter++;
      }

  }
    console.log(guestCounter);
    console.log(list.vip.join('\n'));
    console.log(list.noVip.join('\n'));
}

partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc']);