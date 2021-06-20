function searchOfANumber(inputArrOne, inputArrTwo) {
    let takeElements = inputArrTwo[0];
    let deleteElements = inputArrTwo[1];
    let targetNumber = inputArrTwo[2];
    let newArr = [];
    let counter = 0;

    function takeElementsFunc(arr) {
        newArr = arr.slice(0, takeElements);
    }

    function deleteElementsFunc(arr) {
        arr.splice(0, deleteElements)
    }

    function targetNumCount(arr) {
        for(let num of arr) {
            if(num === targetNumber) {
                counter++
            }
        }
    }

    takeElementsFunc(inputArrOne);
    deleteElementsFunc(newArr);
    targetNumCount(newArr);

    console.log(`Number ${targetNumber} occurs ${counter} times.`);
}



searchOfANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);