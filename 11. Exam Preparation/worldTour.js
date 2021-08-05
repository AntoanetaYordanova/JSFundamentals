function worldTour(input) {
    let stops = input.shift();

    for(let command of input) {
        if (command === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }
        command = command.split(':');

        if(command.includes('Add Stop')) {
            let index = Number(command[1]);
            let string = command[2];
            if(isValidIndex(stops, index)) {
                let stopsArr = stops.split('');
                stopsArr.splice(index,0,string);
                stops = stopsArr.join('');
                console.log(stops);
            }
        } else if(command.includes('Remove Stop')) {
            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);

            if(isValidIndex(stops, startIndex) && isValidIndex(stops, endIndex)) {
                let stopsArr = stops.split('');
                let subtring = stopsArr.slice(startIndex, endIndex + 1) .join('');
                stops = stops.replace(subtring,'');

                console.log(stops);
            }
        } else if(command.includes('Switch')) {
            let oldSubStr = command[1];
            let newSubStr = command[2];

            while(stops.includes(oldSubStr)) {
                stops = stops.replace(oldSubStr, newSubStr);
            }

            console.log(stops);
        }
    }
    console.log();

    function isValidIndex(str, index) {
        if (index < str.length) {
            return true;
        }
    }
}

worldTour([ 'Hawai::Cyprys-Greece', 'Add Stop:7:Rome', 'Remove Stop:11:16', 'Switch:Hawai:Bulgaria', 'Travel' ]);