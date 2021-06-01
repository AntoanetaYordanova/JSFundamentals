function sumEvenNumbers(arrInput) {
    let result = 0;
    let arr = arrInput.map(Number);

    for(num of arr){
        if(num % 2 === 0){
            result += num;
        }
    }

    console.log(result);
}

sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);