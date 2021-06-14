function palindromeIntegers(inputArr) {

    for(let i = 0; i < inputArr.length; i++) {
        let isPalindrome = false;
        let numString = inputArr[i].toString();
        let reversed = '';

        for(let i = numString.length - 1; i >= 0 ; i--) {
            reversed += numString[i];
        }

        if(numString === reversed) {
            isPalindrome = true;
        }

        console.log(isPalindrome);
    }
}

palindromeIntegers([123,323,421,121]);