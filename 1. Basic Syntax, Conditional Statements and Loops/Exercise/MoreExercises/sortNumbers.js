function sortNumbers(inputOne, inputTwo, inputThree) {
    let numOne = Number(inputOne);
    let numTwo = Number(inputTwo);
    let numThree = Number(inputThree);
    let minNum = Math.min(numOne, numTwo, numThree);
    let maxNum = Math.max(numOne, numTwo, numThree);
    let middleNum = 0;
    let sort = [numOne, numTwo, numThree];
    let counter = 0;

    if(numOne !== minNum && numOne !== maxNum){
        middleNum = numOne
    } else if(numTwo !== minNum && numTwo !== maxNum){
        middleNum = numTwo
    } else if(numThree !== minNum && numThree !== maxNum){
        middleNum = numThree
    }
    if(numOne === numTwo){
        middleNum = numOne;
    } else if(numOne === numThree){
        middleNum = numOne;
    } else if(numTwo === numThree){
        middleNum = numTwo;
    }


    console.log(maxNum);
    console.log(middleNum);
    console.log(minNum);
}

sortNumbers(1, 1, 3)