function revealWords(words, sentence) {
    let findWords = words.split(', ');
    
    for(let word of findWords) {
        let tempWord = '*'.repeat(word.length);
        sentence = sentence.replace(tempWord, word);
        
    }

    console.log(sentence);
}

// revealWords(['great',
// 'softuni is ***** place for learning new programming languages'
// ]);

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);