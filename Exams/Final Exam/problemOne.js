function stringManipulation(input){
    let username = input.shift();
    const actions = {
        'Case' : caseFunct,
        'Reverse' : reverseFunc,
        'Cut' : cut,
        'Replace' : replaceFunc,
        'Check' : check
    }

    while(input[0] !== 'Sign up') {
        const line = input.shift() .split(' ');
        let action = actions[line.shift()];
        action(line);
    }

    function caseFunct(param)  {
        const lowerOrUpper = param[0];

        if(lowerOrUpper === 'lower') {
            username = username.toLowerCase();
            console.log(username);
        } else {
            username = username.toUpperCase();
            console.log(username);
        }
    } 

    function cut(param) {
        const substr = param[0];

        if(username.includes(substr)) {
            const startIndex = username.indexOf(substr);
            const endIndex = substr.length
            let arrUsername = username.split('');
            arrUsername.splice(startIndex, endIndex);
            username = arrUsername.join('')
            console.log(username);
             
        } else {
            console.log(`The word ${username} doesn't contain ${substr}.`);
        }
    }

    function check(param) {
        let char = param[0];

        if(username.includes(char)){
            console.log('Valid');
        } else {
            console.log(`Your username must contain ${char}.`);
        }
    }

    function reverseFunc(param) {
        const startIndex = Number(param[0]);
        const endIndex = Number(param[1]);

        if(isValidIndex(startIndex) && isValidIndex(endIndex)){
            const substr = username.substring(startIndex, endIndex + 1);
            let substrArr = substr.split('');
            substrArr = substrArr.reverse();
            console.log(substrArr.join(''));
        }

    }

    function isValidIndex(index){
        if(index >= 0 && index < username.length){
            return true;
        } else {
            return false;
        }
    }

    function replaceFunc(param){
        const char = param[0];

        while(username.includes(char)) {
            username = username.replace(char, '*')
        }

        console.log(username);
    }
}

stringManipulation([ 'Peter', 'Case lower', 'Cut ES', 'Check @', 'Sign up' ]);
console.log('-----------------');
stringManipulation([ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up' ]);