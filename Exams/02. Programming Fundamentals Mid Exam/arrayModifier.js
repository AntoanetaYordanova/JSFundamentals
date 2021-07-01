function arrayModifier(inputArr) {
    let arr = inputArr.shift() .split(' ') .map(Number);

    
    for(let string of inputArr) {
        
        if(string === 'end') {
            console.log(`${arr.join(', ')}`);
            break;
        }
        string = string.split(' ')
        let action = string.shift();
        let [indexOne, indexTwo] = string.map(Number);

        if(action === 'swap') {
            let tempValue = arr[indexOne];
            arr[indexOne] = arr[indexTwo];
            arr[indexTwo] = tempValue;
        } else if (action === 'multiply') {
            let result = arr[indexOne] * arr[indexTwo];
            arr[indexOne] = result;
        } else if(action = 'decrease') {
            arr = arr.map(a => a -= 1);
        }
    }
}

arrayModifier([  '23 -2 321 87 42 90 -123',  'swap 1 3',  'swap 3 6',  'swap 1 0',  'multiply 1 2',  'multiply 2 1',  'decrease',  'end']);
// arrayModifier(['1 2 3 4','swap 0 1','swap 1 2','swap 2 3','multiply 1 2','decrease','end']);