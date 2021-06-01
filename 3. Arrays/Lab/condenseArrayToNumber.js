function condenseArrayToNumber(inputArr) {
    let arr = inputArr;
    let condensedArr = [];

    if(inputArr.length === 1){
        console.log(inputArr[0]);
    } else {
        while(condensedArr.length !== 1){
            let newArr = [];
            for(let i = 0; i < arr.length - 1; i++){         
                let tempValue = arr[i] + arr[i+1];
                newArr.push(tempValue);    
            }
            arr = newArr;
            condensedArr = newArr;
        }
        console.log(condensedArr[0]);
    }

}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);