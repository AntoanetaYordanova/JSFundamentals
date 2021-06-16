function sorting(inputArr) {
    let sorted = [];
    let fromLowerToHigh = inputArr.sort((a, b) => a - b);

    while(fromLowerToHigh.length > 0) {
        let tempValue = fromLowerToHigh.pop();
        sorted.push(tempValue);

        if(inputArr.length === 0) {
            break;
        }

        tempValue = fromLowerToHigh.shift();
        sorted.push(tempValue);
    }

    console.log(sorted.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);