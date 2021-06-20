function convertToObject(jsonString) {
    let obj = JSON.parse(jsonString);
    let keys = Object.keys(obj);

    for(let key of keys) {
        let value = obj[key];
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');