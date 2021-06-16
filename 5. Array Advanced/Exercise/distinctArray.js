function distinctArray(inputArr) {
    for(let i = 0; i < inputArr.length; i++) {
        let index = inputArr.indexOf(inputArr[i], i + 1);

       while(index !== -1) {
        inputArr.splice(index, 1);
        index = inputArr.indexOf(inputArr[i], i + 1);
       }
    }

    console.log(inputArr.join(' '));
}


distinctArray([7, 8, 9, 7, 7, 2, 3, 4, 1, 2]);