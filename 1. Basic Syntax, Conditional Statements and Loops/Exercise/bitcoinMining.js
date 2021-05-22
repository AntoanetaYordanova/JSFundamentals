function bitcoinMining(input){
    let index = 0;
    let dayCounter = 0;
    let totalMoney = 0;
    let isFirstDay = false;
    let dayOfSell = 0;

    while(index < input.length){
        let currentValue = Number(input[index++]);
        dayCounter++;
        
        if(dayCounter % 3 !== 0){
            totalMoney += currentValue * 67.51;
        } else{
            totalMoney += (currentValue * 0.7) * 67.51;
        }

        if(totalMoney >= 11949.16){
            if(!isFirstDay){
                isFirstDay = true;
                dayOfSell = dayCounter;
            }
        } 

    }

    let bitcoins = Math.floor(totalMoney / 11949.16);
    let moneyLeft = (totalMoney - (bitcoins * 11949.16)).toFixed(2);

    console.log(`Bought bitcoins: ${bitcoins}`);
    if(isFirstDay){
        console.log(`Day of the first purchased bitcoin: ${dayOfSell}`);
    }   
    console.log(`Left money: ${moneyLeft} lv.`);

}

bitcoinMining([100,200,300]);
bitcoinMining([50, 100]);