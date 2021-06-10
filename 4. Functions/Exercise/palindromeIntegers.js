function palindromeIntegers(inputArr) {

    for(let i = 0; i < inputArr.length; i++) {
        let isPalindrome = true;
        let numString = inputArr[i].toString();
        let reversed = '';

        for(let i = numString.length - 1; i >= 0 ; i--) {
            reversed += numString[i];
        }

        for(let i = 0; i < numString.length; i++) {
            if(numString[i] !== reversed[i]) {
                isPalindrome = false;
            }
        }

        console.log(isPalindrome);
    }
}

palindromeIntegers([123,323,421,121]);