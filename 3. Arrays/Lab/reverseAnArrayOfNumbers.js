function reverseAnArrayOfNumbers(num, arrInput) {
    let newArr = arrInput.slice(0, num);
    let printArr = [];

    for(let num of newArr){
        printArr.unshift(num);
    }

    console.log(printArr.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);