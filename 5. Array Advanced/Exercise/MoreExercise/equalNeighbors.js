function equalNeighbors(inputArr) {
    let pairCounter = 0;

    for(let i = 0; i < inputArr.length; i++) {
        let index = i;
        if(i === inputArr.length - 1) {
            break;
        }

        for (let k = index + 1; k < inputArr.length; k++) {
            let firstArr = inputArr[i];
            let secondArr = inputArr[k];

            for(let j = 0; j < firstArr.length; j++) {
                let firstValue = firstArr[j];
                let secondValue = secondArr[j];
                if(firstValue === secondValue) {
                    pairCounter++
                }
            }
        }
       

        
    }

    console.log(pairCounter);
}

equalNeighbors([
    [ '2', '2', '5', '7', '4' ],
    [ '4', '0', '5', '3', '4' ],
    [ '2', '5', '5', '4', '2' ]
  ]
);