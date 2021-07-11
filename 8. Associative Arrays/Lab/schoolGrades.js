function schoolGrades(input) {
    let gradesMap = new Map();

    for(let student of input) {
        let studentArr = student.split(' ');
        let studentName = studentArr.shift();
        let grades = studentArr.join(', ');

        if(!gradesMap.has(studentName)) {
            gradesMap.set(studentName, grades);
        } else {
            let newGrades = gradesMap.get(studentName) + ',' + ' ' + grades;
            gradesMap.set(studentName, newGrades);
        }
    }

    let sorted = Array.from(gradesMap) .sort((a, b) => average(a, b));
    
    function average(a, b) {
        let arrayGradeA = a[1].split(', ');
        let arrayGradeB = b[1].split(', ');
        let sumA = 0;
        let sumB = 0;

        for(let i = 0; i < arrayGradeA.length; i++) {
            
        }
    }
}

schoolGrades(['Lilly 4 6 6 5','Tim 5 6','Tammy 2 4 3','Tim 6 6']);