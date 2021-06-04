function addAndSubstract(arr) {
    let oldArraySum = 0;
    let newArrSum = 0;

    for(let i = 0; i < arr.length; i++){
        let currentValue = arr[i];
        oldArraySum += arr[i];
        if(currentValue % 2 === 0){
            arr[i] = currentValue + i;
        } else {
            arr[i] = currentValue - i;
        }

        newArrSum += arr[i];
    }

    console.log(arr);
    console.log(oldArraySum);
    console.log(newArrSum);
}

addAndSubstract([5, 15, 23, 56, 35]);