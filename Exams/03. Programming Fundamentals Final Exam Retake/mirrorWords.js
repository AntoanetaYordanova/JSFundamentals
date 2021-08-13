function mirrorWords(input) {
    let string = input[0];
    const pattern = /(@|#)(?<firstWord>[a-zA-Z]{3,})\1\1(?<secondWord>[a-zA-Z]{3,})\1/g;
    let matchCounter = 0;
    let mirrorWords = [];

    let match = pattern.exec(string);

    while(match !== null) {
        matchCounter++;
        const firstWord = match.groups.firstWord;
        const secondWord = match.groups.secondWord;
        const secondWordArr = secondWord.split('') .reverse();
        const reversedStr = secondWordArr.join('');
        
        if(firstWord === reversedStr) {
            const pushStr = `${firstWord} <=> ${secondWord}`
            mirrorWords.push(pushStr);
        }
        match = pattern.exec(string);
    }
    
    if(matchCounter === 0) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else {
        console.log(`${matchCounter} word pairs found!`);
        if(mirrorWords.length === 0) {
            console.log('No mirror words!');
        } else {
            console.log('The mirror words are:');
            console.log(mirrorWords.join(', '));
        }
    }
}

mirrorWords([ '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
console.log('-----------------');
mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);
console.log('-----------------');
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);