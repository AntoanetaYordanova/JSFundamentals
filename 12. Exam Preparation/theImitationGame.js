function theImitationGame(input) {
    let message  = input.shift();

    let actions = {
        'Move' : move,
        'Insert' : insert,
        'ChangeAll' : change
    }

    while(input[0] !== 'Decode') {
        let line = input.shift() .split('|');
        const action = actions[line.shift()];
        action(line);
    }

    function move(n) {
        let arr = message.split('');

        for(let i = 0; i < Number(n); i++) {
            let tempValue = arr.shift();
            arr.push(tempValue);
        }
        message = arr.join('')
    }

    function insert (params) {
        const index = Number(params[0]);
        const value = params[1];
        
        let arr = message.split('');
        arr.splice(index, 0, value);
        message = arr.join('')
    }

    function change(params) {
        let [substring, replacement] = params;

        while(message.includes(substring)) {
            message = message.replace(substring, replacement);
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

// theImitationGame([ 'zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode' ]);

theImitationGame(['owyouh','Move|2','Move|3','Insert|3|are','Insert|9|?','Decode']);