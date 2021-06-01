function equalArrays(firstArr, secondArr) {
    let sum = 0;
    let isEqual = true;

    for(let i = 0; i < firstArr.length; i++){
        let firstValue = firstArr[i];
        let secondValue = secondArr[i];

        if(firstValue === secondValue){
            sum += Number(firstValue);
        } else {
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);