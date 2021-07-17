function pascalCaseSplitter(input) {
    let letters = input.split('');
    let words = [];
    let index = 0;

    while(index < letters.length - 1) {
        let newWord = '';
        let letter = letters[index]
        let asciiLetter = letter.charCodeAt();

        if(asciiLetter >= 65 && asciiLetter <= 90) {
            newWord += letter;
            index++
            letter = letters[index];
            asciiLetter = letter.charCodeAt();

            while(!(asciiLetter >= 65 && asciiLetter <= 90)) {
                newWord += letter;
                index++
                letter = letters[index];

                if(index > letters.length - 1) {
                    break;
                }
                asciiLetter = letter.charCodeAt();
            }
        } 
        words.push(newWord);
    }

    console.log(words.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('------');
pascalCaseSplitter('HoldTheDoor');
console.log('------');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');