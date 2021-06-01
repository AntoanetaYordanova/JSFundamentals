function dayOfWeek(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if(num > days.length){
        console.log('Invalid day!');
    } else {
        console.log(days[num - 1]);
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
