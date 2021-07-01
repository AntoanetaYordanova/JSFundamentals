function softuniReception(inputArr) {
    let hoursNeeded = 0;
    inputArr = inputArr.map(Number);
    let [firstValue, secondValue, thirdValue, students] = inputArr;
    let studentsPerHour = firstValue + secondValue + thirdValue;
    let counter = 0;

    while(students > 0) {
        counter++;
        if(counter % 4 === 0) {
            continue;
        } else {
            students -=studentsPerHour;
        }
    }

    console.log(`Time needed: ${counter}h.`);
}

// softuniReception([ '5', '6', '4', '20' ]);
// softuniReception([ '1', '2', '3', '45' ]);
softuniReception([ '3', '2', '5', '40' ]);