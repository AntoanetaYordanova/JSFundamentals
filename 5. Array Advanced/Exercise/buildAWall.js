function buildAWall(inputArr) {
    let theWall = inputArr.map(Number);
    let pesos = 0;
    let concrete = [];
    let check = [0];

    while(check.length !== 0) {
        let dalyConcrete = 0;
        for(let i = 0; i < theWall.length; i++) {
            let tempValue = theWall[i];
            if(tempValue < 30) {
                theWall[i] = tempValue + 1;
                dalyConcrete += 195;
            }
        }

        pesos += dalyConcrete * 1900;
        concrete.push(dalyConcrete.toString())
        check = theWall.filter(a => a !== 30);

    }

    console.log(concrete.join(', '));
    console.log(`${pesos} pesos`);
}

buildAWall(['21', '25', '28']);