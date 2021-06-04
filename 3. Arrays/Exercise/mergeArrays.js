function mergeArrays(firstArr, secondArr) {
    let resultArr = [];

    for(let i = 0; i < firstArr.length; i++){
        if(i % 2 === 0){
            let tempValue = Number(firstArr[i]) + Number(secondArr[i]);
            resultArr.push(tempValue);
        } else {
            let tempValue = firstArr[i] + secondArr[i];
            resultArr.push(tempValue);
        }
    }

    console.log(resultArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);