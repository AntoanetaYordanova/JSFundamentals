function heartDelivery(inputArr) {
    let houses = inputArr.shift() .split('@') .map(Number);
    let counter = 0;
    
    for(let jump of inputArr) {
        jump = jump.split(' ');
        jumpNum = Number(jump[1]);
        let index = 0;
        

        if(jumpNum > houses.length - 1) {
            for(i = 0; i < houses.length; i++) {
                if(index > houses.length - 1) {
                    index = 0;
                }
                
                index++
            }

            let tempValue = houses[index];
                if(tempValue === 0) {
                    console.log(`Place ${index} already had Valentine's day.`);
                    continue;
                }
                houses[index] = tempValue - 2
                if(houses[index] === 0) {
                    console.log(`Place ${index} has Valentine's day.`);
                    counter++;
                }
        } else {
            let tempValue = houses[jumpNum];
                if(tempValue === 0) {
                    console.log(`Place ${jumpNum} already had Valentine's day.`);
                    continue;
                }
                houses[jumpNum] = tempValue - 2
                if(houses[jumpNum] === 0) {
                    console.log(`Place ${jumpNum} has Valentine's day.`);
                    counter++;
                }
        }
    }

    let failed = houses.length - counter;

    console.log(failed);
}

// heartDelivery([ '10@10@10@2', 'Jump 1', 'Jump 2', 'Love!' ]);
heartDelivery([  '2@4@2',  'Jump 2',  'Jump 2', 'Jump 8',  'Jump 3', 'Jump 1',  'Love!']);