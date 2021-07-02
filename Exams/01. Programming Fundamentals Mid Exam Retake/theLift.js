function theLift(inputArr) {
    let peopleInQueue = Number(inputArr.shift());
    let wagon = inputArr.shift() .split(' ') .map(Number);
    let isQueue = true;

    for(let i = 0; i < wagon.length; i++) {
        let tempValue = wagon[i];

        while(tempValue < 4) {
            peopleInQueue--
            tempValue++;
            if(peopleInQueue < 1) {
                isQueue = false;
                break
            }
        } 
        
        wagon[i] = tempValue;

        if(!isQueue && !isFull(wagon)) {
            console.log(`The lift has empty spots!`);
            console.log(`${wagon.join(' ')}`);
            break;
        }

       
    }

    if(isQueue) {
        console.log(`There isn't enough space! ${peopleInQueue} people in a queue!`);
        console.log(`${wagon.join(' ')}`);
    } if(!isQueue && isFull(wagon)) {
        console.log(`${wagon.join(' ')}`);
    }


    function isFull(arr) {
        let full = true;
        for(let currentWagon of arr) {
            if(currentWagon < 4) {
                full = false;
            }
        }

        return full;
    }
    
}

// theLift([ '15', '0 0 0 0' ]);
theLift([ '20', '0 2 0' ])