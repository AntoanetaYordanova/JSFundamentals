function signCheck(a, b, c) {
    let result = '';
    if(a >= 0 && b >= 0 && c >= 0) {
        result = 'Positive';
    } else if (a < 0 && b < 0 && c >= 0) {
        result = 'Positive';
    } else if (a >= 0 && b < 0 && c < 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }

    console.log(result);
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14)