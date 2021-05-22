function rounding(number, round) { 
    let roundNum = round;
    if(roundNum > 15){
        roundNum = 15;
    }
    let printNum = number.toFixed(roundNum);
    printNum = parseFloat(printNum); 
    console.log(printNum); 
}

rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3)