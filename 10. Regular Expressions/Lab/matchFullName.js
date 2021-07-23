function matchFullName(input) {
    input = ' ' + input;
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let word = pattern.exec(input);
    let result = [];
    
    while(word !== null) {
        result.push(word[0]);
        word = pattern.exec(input);
    }

    console.log(result.join(' '));
}

matchFullName(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"]);