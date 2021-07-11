function wordsTracker(input) {
    let wordsAssocArray = {};
    let wordsToAdd = input.shift() .split(' ');

    wordsToAdd.forEach(element => {
        wordsAssocArray[element] = 0;
    });

    input.forEach(element => {
        if(wordsToAdd.includes(element)) {
            let tempValue = wordsAssocArray[element] + 1;
            wordsAssocArray[element] = tempValue;
        }
    })

    let sortedArr = Object.entries(wordsAssocArray) .sort((a, b) => a[1] > b[1] ? -1 : 1);

    for (let [name, num] of sortedArr) {
        console.log(`${name} - ${num}`);
    }
}

wordsTracker(['this sentence you', 'In','this','sentence','you','have','to','count','the','occurances','of','the','words','this','and','sentence','because','this','is','you','task']);