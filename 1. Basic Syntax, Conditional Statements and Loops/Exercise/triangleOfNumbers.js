function triangleOfNumbers(num) {
    let counter = 0;

    for(let i = 0; i < num; i++){
        counter++;
        let printString = '';
        for(let i = 0; i < counter; i++){
            printString = printString + counter + ' '
        }
        console.log(printString);
    }
}

triangleOfNumbers(3)