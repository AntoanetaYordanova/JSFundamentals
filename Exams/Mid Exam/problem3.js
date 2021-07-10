function tomsDamage(firstParam, secondParam, thirdParam) {
    let priceRatings  = firstParam.map(Number);
    let entryPoint = Number(secondParam);
    let comparePrice = priceRatings[entryPoint];
    let typeOfItems = thirdParam;
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0; i < entryPoint; i++) {
        let currentItem = priceRatings[i];
        switch(typeOfItems) {
            case 'cheap':
                if(currentItem < comparePrice) {
                    leftSum += currentItem;
                }
                break;
            case 'expensive':
                if(currentItem >= comparePrice) {
                    leftSum += currentItem;
                }
                break;
        }
    }

    for(let i = entryPoint + 1; i < priceRatings.length; i++) {
        let currentItem = priceRatings[i];
        switch(typeOfItems) {
            case 'cheap':
                if(currentItem < comparePrice) {
                    rightSum += currentItem;
                }
                break;
            case 'expensive':
                if(currentItem >= comparePrice) {
                    rightSum += currentItem;
                }
                break;
        }
    }

    if(leftSum === rightSum) {
        console.log(`Left - ${leftSum}`);
    } else if (leftSum > rightSum) {
        console.log(`Left - ${leftSum}`);
    } else if (rightSum >leftSum) {
        console.log(`Right - ${rightSum}`);
    }
}

// tomsDamage([ 1, 5, 1 ], 1, 'cheap');
tomsDamage([-2, 2,  1, 5,  9, 3, 2, -2, 1, -1,-3, 3], 7, 'expensive');