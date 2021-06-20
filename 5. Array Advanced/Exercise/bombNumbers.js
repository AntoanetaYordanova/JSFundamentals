function bombNumbers(inputArr, target) {
    let printArr = inputArr;
    let [targetNum, detonate] = target;

    for(let i = 0; i < printArr.length; i++) {
        if(printArr[i] === targetNum) {
            let index = i - detonate;
            let deleteElements = detonate * 2 + 1;
            printArr.splice(index, deleteElements);
      
        }
    }
    
    let sum = 0;

    for(let num of printArr) {
        sum += num;
    }

    console.log(printArr);
    console.log(sum);
}

bombNumbers([1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1],
    [2, 1]
    );