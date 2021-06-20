function meetings(inputArr) {
    let sceduele = {};

    for(let str of inputArr) {
        let [day, name] = str.split(' ');
        let daysTaken = Object.keys(sceduele);

        if(daysTaken.includes(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            sceduele[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for(let key in sceduele) {
        console.log(`${key} -> ${sceduele[key]}`);
    }
} 

meetings(['Monday Peter','Wednesday Bill','Monday Tim','Friday Tim']);