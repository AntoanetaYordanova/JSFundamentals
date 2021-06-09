function charactersInRange(charOne, charTwo) {
    let resultString = '';
    let asciiOne = Math.min(charOne.charCodeAt(), charTwo.charCodeAt());
    let asciiTwo = Math.max(charOne.charCodeAt(), charTwo.charCodeAt()); 
  
    for(let i = asciiOne + 1; i < asciiTwo; i++) {
        resultString += String.fromCharCode(i) + ' ';
    }

    console.log(resultString);
}

charactersInRange('#',':')