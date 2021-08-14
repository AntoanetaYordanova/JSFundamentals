function dictionary(input) {
    words = input[0].split(' | ')
    let notebook = {};

    for(let currentInput of words){
        let [word, definition] = currentInput.split(': ');

        if(!notebook.hasOwnProperty(word)){
            notebook[word] = [];
        }

        notebook[word].push(definition);
    }

    let testWords = input[1].split(' | ');

    if(input[2] === 'Test'){
        for(let word of testWords) {  
            if(notebook.hasOwnProperty(word)) {
                let sorted = notebook[word].sort((a,b) => b.length - a.length);
                console.log(`${word}:`);
                sorted.forEach(element => console.log(` -${element}`))
            }
        }
    } if(input[2] === 'Hand Over') {
        let sorted = Object.keys(notebook) .sort((a, b) => a.localeCompare(b));
        console.log(sorted.join(' '));
    }
}

// dictionary([  'programmer: an animal, which turns coffee into code | developer: a magician',  'Pesho | Gosho',  'Hand Over']);
console.log('---------------');
dictionary([ 'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance', 'bit | code | tackle', 'Test']);
console.log('---------------');
dictionary([ 'care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin', 'care | kitchen | flower', 'Test']);