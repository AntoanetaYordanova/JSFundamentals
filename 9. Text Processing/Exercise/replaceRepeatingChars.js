function replaceRepeatingChars(input) {
    let arr = input.split('');
    let newArr = [];

    for(i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i +1]) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');

console.log('-------------');

replaceRepeatingChars('qqqwerqwecccwd')