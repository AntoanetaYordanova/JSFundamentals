function phoneBook(input) {
    let phoneBookObj = {};

    for(let person of input) {
        let [name, number] = person.split(' ');
        phoneBookObj[name] = number;
    }

    for(let name in phoneBookObj) {
        console.log(`${name} -> ${phoneBookObj[name]}`);
    }
}

phoneBook(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344']);