function reverseAnArrayOfStrings(arrInput) {
    let newArr = arrInput;

    for(let i = 0; i < (arrInput.length - 1) / 2; i++){

        swap(i, newArr.length - 1 - i);
    }

    function swap(i, j) {
  
        let firstValue = (newArr.slice(i, i + 1)).toString();
        let secondValue = (newArr.slice(j, j + 1)).toString();
    
        newArr.splice(i, 1, secondValue);
        newArr.splice(j, 1, firstValue);
    
    }
    
 
    console.log(newArr.join(' '));
}





reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);