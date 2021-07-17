function cutAndReverse(input) {
    let wordOne = input.substring(0, Math.ceil((input.length / 2)));
    let wordTwo = input.substring(input.length / 2);
    let printOne = '';
    let printTwo = '';

    for(let i = wordOne.length - 1; i >= 0; i--) {
        printOne += wordOne[i];
    }

    for(let i = wordTwo.length - 1; i >= 0; i--) {
        printTwo += wordTwo[i];
    }

    console.log(printOne);
    console.log(printTwo);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('----------');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');