function repeatString (inputStr, n) {
    let printString = '';

    for(let i = 0; i < n; i++){
        printString += inputStr;
    }

    console.log(printString);
}

repeatString('abc', 3)