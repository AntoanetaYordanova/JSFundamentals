function piccolo(input) {
    let carsIn = new Map();

    for(let command of input) {
        let [action, plate] = command.split(', ');
        action = action.toUpperCase();
        
        if(action === 'IN') {
            if(!carsIn.has(plate)) {
                carsIn.set(plate, '');
            }

        } else if (action === 'OUT'){
            if(carsIn.has(plate)) {
                carsIn.delete(plate);
            }

        }
    }

    if(carsIn.size === 0) {
        console.log('Parking Lot is Empty');
    } else if (carsIn.size > 0) {
        let sorted = Array.from(carsIn.keys()); 
        sorted = sorted.sort((a,b) => a.localeCompare(b)); 
        console.log(sorted.join('\n'))
    }

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);