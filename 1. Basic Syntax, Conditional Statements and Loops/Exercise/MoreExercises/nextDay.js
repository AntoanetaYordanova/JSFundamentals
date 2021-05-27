function nextDay(yearInput, monthInput, dayInput) {
    let givenDate = new Date(yearInput, monthInput, dayInput);
    let nextDay = new Date(givenDate);
    nextDay.setDate(givenDate.getDate() + 1);
    let printDay = '' + nextDay.getFullYear() + '-' + nextDay.getMonth() + '-' + nextDay.getDay();
    
    console.log(printDay);
}

nextDay(2016, 9, 30);