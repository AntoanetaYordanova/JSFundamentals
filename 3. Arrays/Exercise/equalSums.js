function equalSums(inputArr) {
    let leftSum = 0;
    let foundMatch = false;

    // if(inputArr.length === 1){
    //     console.log(`0`);
    // }

    for(let i = 0; i < inputArr.length; i++) {
        let rightSum = 0;

        for(let j = i +1; j < inputArr.length; j++){
            rightSum += inputArr[j];
        }
        
        if(leftSum === rightSum){
            console.log(i);
            foundMatch = true;
        }

        leftSum += inputArr[i];

    }

    if(foundMatch === false) {
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);