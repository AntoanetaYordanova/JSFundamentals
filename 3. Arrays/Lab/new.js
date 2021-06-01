

function swap(i, j) {
    let newArr = ['a', 'b', 'c', 'd', 'e'];
    let firstValue = (newArr.slice(i, 1)).toString();
    let secondValue = (newArr.slice(j, j + 1)).toString();

    newArr.splice(i, 1, secondValue);
    newArr.splice(j, 1, firstValue);

    console.log(newArr);

}

swap(0, 5 - 1 - 0)

