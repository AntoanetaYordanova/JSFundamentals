function  reverseAnArrayOfStrings(inputArr) {
    for(let i = 0; i < inputArr.length / 2; i++){
        let secondI = inputArr.length - 1 - i;
        let tempValue = inputArr[i];
        inputArr[i] = inputArr[secondI];
        inputArr[secondI] = tempValue;
    }

    console.log(inputArr.join(' '));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);