function houseParty(inputArr) {
    let list = [];

    for(let string of inputArr) {
        let currentArr = string.split(' ');
        let name = currentArr.shift();
        if(currentArr.indexOf('not') !== -1 ) {
            if(list.indexOf(name) === -1) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = list.indexOf(name);
                list.splice(index, 1);
            }
        } else {
            if(list.indexOf(name) === -1) {
                list.push(name); 
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    }

    console.log(list.join('\n'));
}

houseParty(['Tom is going!','Annie is going!','Tom is going!','Garry is going!','Jerry is going!']);