function arrayManipulator(inputArr, tasksArrInput) {
    let printArr = inputArr;
    
    for(let task of tasksArrInput) {
        let taskArr = task.split(' ');
        if(taskArr.includes('add')) {

            let index = Number(taskArr[1]);
            let element = Number(taskArr[2]);

            add(printArr, index, element);
        } else if(taskArr.includes('addMany')) {

            addMany(printArr, taskArr);

        } else if(taskArr.includes('contains')) {

            let element = Number(taskArr[1]);
            printIndex(printArr, element);

        } else if (taskArr.includes('remove')) {

            let index = Number(taskArr[1]);
            removeElement(printArr, index);

        } else if (taskArr.includes('shift')) {

            let numPositions = Number(taskArr[1]);
            shift(printArr, numPositions);

        } else if (taskArr.includes('sumPairs')) {

            sumPairs(printArr);

        } else if (taskArr.includes('print')){
            console.log(printArr);
            break;
        }
    }

    function add (arr, index, element) {
        arr.splice(index, 0, element);
    }

    function addMany (arrToModify, numsToAddArr) {
        numsToAddArr.shift();
        let tempArr = [];

        for(let num of numsToAddArr) {
            tempArr.push(Number(num));
        }

        let index = tempArr.shift();

        for(let i = tempArr.length - 1; i >= 0; i--) {
            let element = tempArr[i];
            arrToModify.splice(index, 0, element);
        }
    }

    function printIndex (arr, element) {
        console.log(arr.indexOf(element));
    }

    function removeElement(arr, index) {
        arr.splice(index, 1);
    }

    function shift(arr, numPositions) {
        for(let i = 0; i < numPositions; i++) {
            let tempValue = arr.shift();
            arr.push(tempValue);
        }
    }

    function sumPairs(arr) {
        let tempArr = [];
        
        for(let i = 0; i < arr.length; i + 2) {
            if(i === arr.length - 1) {
                tempArr.push(arr[i]);
            } else {
                let tempValue = arr[i] + arr[i + 1];
                tempArr.push(tempValue);
            }
        }

        arr = tempArr;
    }
}   

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'] );