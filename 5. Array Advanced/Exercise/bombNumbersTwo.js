function bombNumbers(inputArr, target) {
  let printArr = inputArr;
  let [targetNum, bomb] = target;
  let index = 0;

  while (index < inputArr.length) {
    if(printArr[index] === targetNum) {
        let tempIndex = index - bomb;
        let deleteElements = bomb * 2 + 1;

        if(tempIndex < 0) {
            deleteElements += tempIndex;
            tempIndex = 0;
        }
        printArr.splice(tempIndex, deleteElements);
        index = tempIndex - 1;
    }

    index++;
  }

  let sum = 0;

    for(let num of printArr) {
        sum += num;
    }

    console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
