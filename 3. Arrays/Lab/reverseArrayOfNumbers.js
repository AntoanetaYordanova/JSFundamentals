function reverseArrayOfNumbers(n, arrInput) {
    let printArr = [];

    for(let i = n - 1; i >= 0; i--){
        printArr.push(arrInput[i]);
    }

    console.log(printArr.join(' '));
}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);