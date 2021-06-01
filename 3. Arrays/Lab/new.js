let newArr = ['a', 'b', 'c', 'd', 'e'];

function swap(i, j) {
  
    let firstValue = (newArr.slice(i, i + 1)).toString();
    let secondValue = (newArr.slice(j, j + 1)).toString();

    newArr.splice(i, 1, secondValue);
    newArr.splice(j, 1, firstValue);

    console.log(newArr);

}

swap(1, 5 - 1 - 1)

