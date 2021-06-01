function evenAndOddSubtraction(inputArr) {
    let arr = inputArr.map(Number);
    let evenSum = 0;
    let oddSum = 0;

    for(let num of arr){
        if(num % 2 === 0){
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    let difference = evenSum - oddSum;

    console.log(difference);
}

evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);