function maxNumber(inputArr) {
    let newArr = [];

    for(let i = 0; i< inputArr.length; i++){
        let compareNum = inputArr[i];
        let isBigger = true;
     
        for(let j = i+ 1; j < inputArr.length; j++){
            if(compareNum < inputArr[j]){
                isBigger = false;
            }
        }

        if(isBigger){
            newArr.push(compareNum);
        }
    }

    console.log(newArr.join(' '));
}

maxNumber([27,
    19,
    42,
    2,
    13,
    45,
    48]);