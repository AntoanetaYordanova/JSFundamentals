function sumFirstAndLastArrayElements(arrInput) {
    let sum = arrInput.shift() + arrInput.pop();
    console.log(sum);
}

sumFirstAndLastArrayElements([20, 30, 40])
