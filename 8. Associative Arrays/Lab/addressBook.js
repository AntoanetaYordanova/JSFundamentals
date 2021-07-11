function addressBook(input) {
    let addressBookObj = {};

    for(let person of input) {
        let [name, address] = person.split(':');
        addressBookObj[name] = address;
    }

    for(let [name, address] of Object.entries(addressBookObj) .sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd']);