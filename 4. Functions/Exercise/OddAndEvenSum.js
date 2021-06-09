function oddAndEvenSum(num) {
    let numToString = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i < numToString.length; i++) {
        let currentNum = Number(numToString[i]);

        if(currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)