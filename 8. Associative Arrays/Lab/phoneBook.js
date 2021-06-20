function phoneBook(inputArr) {
    let phoneBookObj = {};

    for(let str of inputArr) {
        let [name, number] = str.split(' ');
        phoneBookObj[name] = number;
    }

    for(let key in phoneBookObj) {
        console.log(`${key} -> ${phoneBookObj[key]}`);
    }
}

phoneBook(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344']);