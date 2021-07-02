function memoryGame(inputArr) {
    let sequence = inputArr.shift() .split(' ');
    let movesCounter = 0;

    for(let indexes of inputArr) {
        if(indexes === 'end') {
            console.log('Sorry you lose :(');
            console.log(sequence.join(' '));
            break;
        }

        movesCounter++;
        let [indexOne, indexTwo] = indexes.split(' ') .map(Number);

        if(indexOne >= 0 && indexOne < sequence.length 
            && indexTwo >= 0 && indexTwo < sequence.length) {
                let numOne = sequence[indexOne];
                let numTwo = sequence[indexTwo];

                if(numOne === numTwo) {
                    console.log(`Congrats! You have found matching elements - ${numOne}!`);
                    if(indexOne > indexTwo) {
                        sequence.splice(indexOne, 1);
                        sequence.splice(indexTwo, 1);
                    } else {
                        sequence.splice(indexTwo, 1);
                        sequence.splice(indexOne, 1);
                    }
                    
                } else {
                    console.log('Try again!');
                }
            } else {
                console.log('Invalid input! Adding additional elements to the board');
                let index = (sequence.length)/ 2;
                sequence.splice(index, 0,'-' + movesCounter + 'a');
                sequence.splice(index, 0,'-' + movesCounter + 'a');
                continue;
            } 

            if(sequence.length === 0) {
                console.log(`You have won in ${movesCounter} turns!`);
                break;
            }
    }
}

// memoryGame([ '1 1 2 2 3 3 4 4 5 5', '1 0', '-1 0', '1 0 ', '1 0 ', '1 0 ', 'end' ] );
// memoryGame([ 'a 2 4 a 2 4', '0 3', '0 2', '0 1', '0 1', 'end' ]);
memoryGame([ 'a 2 4 a 2 4 ', '4 0 ', '0 2', '0 1', '0 1 ', 'end' ]);