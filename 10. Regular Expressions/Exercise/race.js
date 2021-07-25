function race(input) {
    let runners = {};
    let names = input.shift() .split(', ') .forEach(element => {
        runners[element] = 0;
    });

    for(let currentInput of input) {
        let currentName = '';
        let kilometers = 0;

        for(let char of currentInput) {
            let letterPattern = /[a-zA-Z]/g
            let numPattern = /[0-9]/g

            if(letterPattern.test(char)) {
                currentName += char;
            } else if (numPattern.test(Number(char))){
                kilometers += Number(char);
            }
        }

        if(runners.hasOwnProperty(currentName)) {
            runners[currentName] += kilometers;
        }
        
    }

    let sorted = Object.entries(runners) .sort((a,b) => b[1] - a[1]);
    let winners = [];

    for(let i = 0; i < 3; i++) {
        let [name, km] = sorted[i]
        winners.push(name);
    }
    
    console.log(`1st place: ${winners[0]}`);
    console.log(`2nd place: ${winners[1]}`);
    console.log(`3rd place: ${winners[2]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
   'R1@!3a$y4456@',
    'B5@i@#123ll,',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6'
    ])