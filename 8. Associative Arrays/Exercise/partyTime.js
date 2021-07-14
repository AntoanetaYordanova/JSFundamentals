function partyTime(input) {
  let list =  {
      vip : [],
      noVip : []
  }

  let guest = input.shift();

  while(guest !== 'PARTY') { 

      if(guest[0] >= 0 && guest[0] <= 9) {
          list.vip.push({guest: guest, isHere : false});
      } else {
          list.noVip.push({guest: guest, isHere : false});
      }

      guest = input.shift();
  }


  for(let guestComing of input) {
   
      if(guestComing[0] >= 0 && guestComing[0] <=9) {
        let currentGuest = list.vip.find(o => o.guest === guestComing);
        currentGuest.isHere = true;
        
      } else {
        let currentGuest = list.noVip.find(o => o.guest === guestComing);
        currentGuest.isHere = true;
      }

  }

    let guestCounter = 0
    let guestsMissing = [];

   for(let obj of list.vip) {
     if(obj.isHere === false) {
       guestCounter++
       guestsMissing.push(obj.guest);
     } 
   }

   for(let obj of list.noVip) {
    if(obj.isHere === false) {
      guestCounter++
      guestsMissing.push(obj.guest);
    } 
  }

  console.log(guestCounter);
  console.log(guestsMissing.join('\n'));
}

partyTime(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc']);