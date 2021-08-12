function emojiDetector(input) {
    let str = input[0];
    const digitPattern = /[0-9]+/g;
    let digits = [];
    let digitMatch = digitPattern.exec(str);
    
    while(digitMatch !== null) {
        num = digitMatch[0] .split('');
        num.forEach(element => {
            digits.push(element);
        });
        digitMatch = digitPattern.exec(str);
    }

    let threshold = 1;

    digits.forEach(element => threshold *= element)
    
    let coolEmojis = [];
    let emojisCount = 0;

    const emojiPattern = /(::|\*\*)(?<word>[A-Z][a-z]{2,})\1/g

    let emojiMatch = emojiPattern.exec(str);

    while(emojiMatch !== null) {
        emojisCount++;
        let word = emojiMatch.groups.word;
        const wordArr = word.split('');
        let wordNum = 0;

        for(let i = 0; i < wordArr.length; i++) {
            wordNum += word.charCodeAt(i);
        }

        if(wordNum >= threshold) {
            coolEmojis.push(emojiMatch[0]);
        }

        emojiMatch = emojiPattern.exec(str);
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojisCount} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join('\n'));
}

emojiDetector(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);

console.log('-------------------------');

emojiDetector([  '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::']);

console.log('-------------------------');

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);