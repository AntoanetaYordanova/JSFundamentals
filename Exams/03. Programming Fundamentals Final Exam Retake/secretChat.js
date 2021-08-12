function secretChat(input) {
    let string = input.shift();
    let actions = {
        'InsertSpace' : insert,
        'Reverse' : reverse,
        'ChangeAll' : change
    }

    while(input[0] !== 'Reveal') {
        let line = input.shift() .split(':|:');
        let action = actions[line.shift()];
        action(line);
    }

    function insert(index) {
        index = Number(index[0]);
        let arr = string.split('');
        let subArr = arr.splice(index,);
        subArr.unshift(' ');
        string = arr.join('') + subArr.join('');
        console.log(string);
    }

    function reverse(substring) {
        let reverseStr = substring[0];
        if(string.includes(reverseStr)) {
           let arr = string.split('');
           const index = string.indexOf(reverseStr);
           arr.splice(index, reverseStr.length);
           const substrArr = reverseStr.split('');

           for(let i = substrArr.length - 1; i >= 0; i--) {
               arr.push(substrArr[i]);
           }

           string = arr.join('');
           console.log(string);
        } else {
            console.log('error');
        }
    }

    function change(params) {
        const substring = params[0];
        const replacement = params[1];

        while(string.includes(substring)) {
            string = string.replace(substring, replacement);
        }
        
        console.log(string);
    }

    console.log(`You have a new text message: ${string}`);
}

secretChat(['heVVodar!gniV','ChangeAll:|:V:|:l','Reverse:|:!gnil','InsertSpace:|:5','Reveal']);
console.log('------------------');
secretChat([  'Hiware?uiy',  'ChangeAll:|:i:|:o',  'Reverse:|:?uoy',  'Reverse:|:jd',  'InsertSpace:|:3',  'InsertSpace:|:7',  'Reveal' ]);