function activationKey(input) {
    const actions = {
        'Contains' : contains,
        'Flip' : flip,
        'Slice' : slice
    }

    let key = input.shift();

    while(input[0] !== 'Generate') {
        let line = input.shift() .split('>>>');
        const action = actions[line.shift()];
        action(line);
    }

    function contains(substring) {
        if(key.includes(substring)) {
            console.log(`${key} contains ${substring}`)
        } else {
            console.log(`Substring not found!`);
        }
    }

    function flip(params) {
        const startIndex = Number(params[1]);
        const endIndex = Number(params[2]);
        let substring = key.substring(startIndex, endIndex);

        if(params[0] === 'Upper') {
            const newSubstring = substring.toUpperCase();
            key =  key.replace(substring, newSubstring);
            console.log(key);
        } else {
            const newSubstring = substring.toLowerCase();
            key = key.replace(substring, newSubstring);
            console.log(key);
        }
    }

    function slice(params) {
        const startIndex = Number(params[0]);
        const endIndex = Number(params[1])  - startIndex;

        let arr = key.split('') 
        arr.splice(startIndex, endIndex);
        key = arr.join('');
        console.log(key);
    }

    console.log(`Your activation key is: ${key}`);
}

activationKey(['abcdefghijklmnopqrstuvwxyz','Slice>>>2>>>6','Flip>>>Upper>>>3>>>14','Flip>>>Lower>>>5>>>7','Contains>>>def','Contains>>>deF','Generate']);

console.log('-----------------');

activationKey([ '134softsf5ftuni2020rockz42', 'Slice>>>3>>>7', 'Contains>>>-rock', 'Contains>>>-uni-', 'Contains>>>-rocks', 'Flip>>>Upper>>>2>>>8', 'Flip>>>Lower>>>5>>>11', 'Generate']);