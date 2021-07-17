function stringSubstring(findWord, sentence) {
    findWord = findWord.toLowerCase();
    let sentenceArr = sentence.split(' ');
    let isWordFownd = false;

    for(let word of sentenceArr) {
        word = word.toLowerCase();
        if(findWord === word) {
            isWordFownd = true;
            console.log(word);
        }
    }

    if(!isWordFownd) {
        console.log(`${findWord} not found!`);
    }

}

stringSubstring('javascript',
'JavaScript is the best programming language'
);

console.log('-----');

stringSubstring('python',
'JavaScript is the best programming language'
);