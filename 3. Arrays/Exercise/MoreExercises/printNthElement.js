function printNthElement(inputArr) {
    let printArr = [];
    let step = Number(inputArr[inputArr.length - 1]);

    for(let i = 0; i < inputArr.length - 1; i += step){
        printArr.push(inputArr[i]);
    }

    console.log(printArr.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);