function lastKNumbersSequence(n, k) {
    let arr = [1];

    for(let i = 0; i < n - 1; i++) {
        let nextNum = 0;
        let tempArr = arr.slice(-k);
        
        for(let num of tempArr) {
            nextNum += num;
        }

        arr.push(nextNum);
    }

    console.log(arr.join(' '));
}

lastKNumbersSequence(6, 3);