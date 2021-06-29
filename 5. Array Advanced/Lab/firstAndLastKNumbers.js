function firstAndLastKNumbers(inputArr) {
    let inputCopie = inputArr.slice();
    let sliceNum = inputCopie.shift();
    let firstNums = [];
    let lastNums = [];

    for(let i = 0; i < sliceNum; i++) {
        firstNums.push(inputCopie[i]);
    }

    for(let i = inputCopie.length - sliceNum; i < inputCopie.length; i++) {
        lastNums.push(inputCopie[i]);
    }

    console.log(firstNums);
    console.log(lastNums);

}

// firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);