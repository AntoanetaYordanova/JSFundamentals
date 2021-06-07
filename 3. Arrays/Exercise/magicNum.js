function magicNum(inputArr, x) {
    for(let i = 0; i < inputArr.length; i++){
        let printArr = [];


        for(let j = i + 1; j < inputArr.length; j++) {
            if(inputArr[i] + inputArr[j] === x){
               console.log(`${inputArr[i]} ${inputArr[j]}`);

            }
        }

    }
}

magicNum([14, 20, 60, 13, 7, 19, 8], 27)