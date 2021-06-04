function arrayRotation(inputArr, rotateN) {

    for(let i = 0; i < rotateN; i++){
        let tempValue = inputArr[0];

        for(let j = 0; j < inputArr.length - 1; j++){
            inputArr[j] = inputArr[j + 1];
        }

        inputArr[inputArr.length - 1] = tempValue;
    }

    console.log(inputArr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);