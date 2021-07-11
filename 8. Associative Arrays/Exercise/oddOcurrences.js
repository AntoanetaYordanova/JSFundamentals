function oddOcurrences(input) {
    let words = input.split(' ');
    let wordsAssocArr = {};
    let arrToIterate = [];

    for(let word of words) {
        word = word.toLowerCase();
        let wordsArrKeys = Object.keys(wordsAssocArr);
        if(wordsArrKeys.includes(word)) {
            const tempValue = wordsAssocArr[word] + 1;
            wordsAssocArr[word] = tempValue;
        } else {
            wordsAssocArr[word] = 1;
            arrToIterate.push(word);
        }
    }

    let printArr = []
    
    for (word of arrToIterate) {
        if(wordsAssocArr[word] % 2 !== 0) {
            printArr.push(word);
        }
    }

    console.log(printArr.join(' '));   
    console.log(wordsAssocArr.size);
}

oddOcurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')