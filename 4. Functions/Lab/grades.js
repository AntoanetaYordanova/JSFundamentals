function grades(grade) {
    let result = '';

    if(grade < 3) {
        result = 'Fail';
    } else if (grade < 3.5) {
        result = 'Poor';
    } else if (grades < 4.5) {
        result = 'Good';
    } else if (grade < 5.5) {
        result = 'Very good';
    } else {
        result = 'Exellent';
    }

    if(grade < 3){
        console.log(`${result} (2)`);
    } else {
        console.log(`${result} (${grade.toFixed(2)})`);
    }
}

grades(2.99);