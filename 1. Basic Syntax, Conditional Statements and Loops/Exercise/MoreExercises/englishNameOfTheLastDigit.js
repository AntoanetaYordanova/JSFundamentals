function englishNameOfTheLastDigit(numInput) {
    let lastDigit = String(numInput);
    lastDigit = Number(lastDigit[lastDigit.length -1]);
    let printString = '';

    switch(lastDigit){
        case 0:
            printString = 'zero';
            break;
        case 1:
            printString = 'one';
            break;
        case 2:
            printString = 'two';
            break;
        case 3:
            printString = 'three';
            break;
        case 4:
            printString = 'four';
            break;
        case 5:
            printString = 'five';
            break;
        case 6:
            printString = 'six';
            break;
        case 7:
            printString = 'seven';
            break;
        case 8:
            printString = 'eight';
            break;
        case 9:
            printString = 'nine';
            break;
    }

    console.log(printString);
    
}

englishNameOfTheLastDigit(512);