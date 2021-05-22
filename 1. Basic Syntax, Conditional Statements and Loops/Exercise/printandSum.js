function  printandSum(startNum, endNum) {
    let printString = '';
    let sum = 0;

    for(let i = startNum; i <= endNum; i++){
        printString += i + ' ';
        sum += i;
    }

    console.log(printString);
    console.log(`Sum: ${sum}`);
}

printandSum(5, 10)