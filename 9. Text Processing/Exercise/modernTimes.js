function modernTimes(input) {
    let words = input.split(' ');

    

    for(let word of words) {
        if(word.length > 1 && word.startsWith('#')) {
            word = word.substring(1);
            let letters = word.split('');
            let isOnlyLetters = true;
    
            for(let letter of letters) {
                let asciiNum = letter.charCodeAt(0);
                
                if(!(asciiNum >= 65 && asciiNum <= 90) && !(asciiNum >= 97 && asciiNum <= 122)) {
                    isOnlyLetters = false;
                }
            }

                if(isOnlyLetters) {
                console.log(word);
            }
            
        }
       

        
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');