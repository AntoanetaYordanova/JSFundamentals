function storage(input) {
    let storageMap = new Map();

    for(let item of input) {
        let [name, quantity] = item.split(' ');
        quantity = Number(quantity)
        if(storageMap.has(name)) {
            const newQuanity = storageMap.get(name) + quantity;
            storageMap.set(name, newQuanity)
        } else {
            storageMap.set(name, quantity);
        }
         
    }
    
    for(let [name, quantity] of storageMap.entries()) {
        console.log(`${name} -> ${quantity}`);
    }
}

storage(['tomatoes 10','coffee 5','olives 100','coffee 40']);