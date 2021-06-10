function passwordValidator(pass) {
    let lengthCounter = 0;
    let isLetterOrDigit = true;
    let digitCointer = 0;

    for(let i = 0; i < pass.length; i++){
        lengthCounter++;
        let currentSymbol = pass[i];
        
        if(!(/[a-zA-Z]/).test(currentSymbol) && !(/[0-9]/).test(Number(currentSymbol))) {
            isLetterOrDigit = false;
        }

        if((/[0-9]/).test(Number(currentSymbol))) {
            digitCointer++;
        }
    }

    let isLongEnough = true;
    let hasTwoDigits = true;

    if(lengthCounter < 6 || lengthCounter > 10) {
        isLongEnough = false;
        console.log('Password must be between 6 and 10 characters');
    }
    
    if(!isLetterOrDigit) {
        console.log('Password must consist only of letters and digits');
    }

    if(digitCointer < 2) {
        hasTwoDigits = false;
        console.log('Password must have at least 2 digits');
    }

    if(isLetterOrDigit && isLongEnough && hasTwoDigits) {
        console.log('Password is valid');
    }

}

// passwordValidator('logIn')
// passwordValidator('MyPass123');
passwordValidator('Pa$s$s')