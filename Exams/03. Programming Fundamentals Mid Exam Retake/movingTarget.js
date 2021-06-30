function movingTarget(arrInput) {
    let arr = arrInput.shift() .split(' ') .map(Number);

    for(let string of arrInput) {
        string = string.split(' ');
        let action = string.shift();
        let [index, num] = string.map(Number) ;
    

        if(action === 'End') {
          console.log(`${arr.join('|')}`)  
        }

        if(action === 'Shoot') {

            if(index >= 0 && index < arr.length) {
                let tempValue = arr[index];
                arr[index] = tempValue - num;
            } else {
                continue;
            }

            if(arr[index] <= 0) {
                arr.splice(index, 1);
            }

        } else if(action === 'Add') {

            if(index >= 0 && index < arr.length) {
                arr.splice(index, 0, num);
            } else {
                console.log('Invalid placement!');
            }

        } else if(action === 'Strike') {
            let startIndex = index - num;
            let endIndex = index + num;
            let targetsToRemove = endIndex- startIndex + 1;

            if(startIndex >= 0 && endIndex < arr.length) {
                arr.splice(startIndex, targetsToRemove);
            } else {
                console.log('Strike missed!');
            }
        }
    }
}

movingTarget([  '52 74 23 44 96 110',  'Shoot 7 10',  'Shoot 1 80',  'Strike 2 1',  'Add 22 3',  'End']);
// movingTarget([ '1 2 3 4 5', 'Strike 0 1', 'End' ]); 