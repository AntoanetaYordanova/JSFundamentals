function shootTheWin(inputArr) {
    let end = inputArr.pop();
    let arr = inputArr.shift() .split(' ') .map(Number);
    let indexes = inputArr.map(Number);
    let targetsCounter = 0;

    for(let index of indexes) {

        if(index < arr.length) {
            targetsCounter++;
            let num = arr[index];
            arr[index] = -1;
            for(let i = 0; i < arr.length; i++) {
            let shootNum = arr[i];
                if(index === i) {
                    continue;
                }
                if(shootNum === -1) {
                    continue;
                }
                
                if(shootNum > num) {
                    arr[i] = shootNum - num;
                } else {
                    arr[i] = shootNum + num;
                }
            }
        }

        
    }

    if(end === 'End') {
        console.log(`Shot targets: ${targetsCounter} -> ${arr.join(' ')}`);
    }
}

// shootTheWin([ '24 50 36 70', '0', '4', '3', '1', 'End' ]);
shootTheWin([ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ]);