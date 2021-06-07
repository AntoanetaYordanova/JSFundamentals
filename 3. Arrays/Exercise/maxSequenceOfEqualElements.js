function maxSequenceOfEqualElements(arrInput) {
    let maxSequence = 0;
    let tempCounter = 1;
    let num = 0;

    for(let i = 0; i < arrInput.length; i++){
        let tempNum = arrInput[i];

        if(arrInput[i +1] === tempNum){
            tempCounter++;
        } else {
            tempCounter = 1;
        }

        if(maxSequence < tempCounter){
            maxSequence = tempCounter;
            num = tempNum;
        }

    }

    let printArr = [];

    for(let i = 0; i < maxSequence; i++){
        printArr.push(num);
    }

    console.log(printArr.join(' '));

}

maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);