function employees(inputArr) {
    let employeesList = {};

    for(let person of inputArr) {
        employeesList[person] = person.length;
    }

    let keysArr = Object.keys(employeesList);

    for(let key of keysArr) {
        let value = employeesList[key];
        console.log(`Name: ${key} -- Personal Number: ${value}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )