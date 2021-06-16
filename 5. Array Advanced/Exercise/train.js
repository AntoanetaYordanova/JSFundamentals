function train(inputArr) {
    let trainWagons = inputArr.shift() .split(' ') .map(Number);
    let capacity = Number(inputArr.shift());

    for(let string of inputArr) {
        let currentArr = string.split(' ');
        
        if(currentArr.includes('Add')) {
            let addWagon = currentArr[1];
            trainWagons.push(addWagon);
        } else {
            let addPasangers = Number(string);
            for(let i = 0; i < trainWagons.length; i++) {
                let currentWagonPassengers = trainWagons[i];
                if(currentWagonPassengers + addPasangers <= capacity) {
                    trainWagons[i] = currentWagonPassengers + addPasangers;
                    break;
                } 
            }
        }
    }

    console.log(trainWagons.join(' '));
}

train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);