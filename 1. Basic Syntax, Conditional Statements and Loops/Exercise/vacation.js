function vacation(amount, type, day) {
    let price = 0;
    switch(day){
        case 'Friday':
            switch(type){
                case 'Students':
                    price = 8.45;
                    break;
                case 'Business':
                    price = 10.9;
                    break;
                case 'Regular':
                    price = 15;
                    break;
            }
            break;
        case 'Saturday':
            case 'Students':
                switch(type){
                    case 'Students':
                        price = 9.8;
                        break;
                    case 'Business':
                        price = 15.6;
                        break;
                    case 'Regular':
                        price = 20;
                        break;
                }
            break;
        case 'Sunday':
            switch(type){
                case 'Students':
                    price = 10.46;
                    break;
                case 'Business':
                    price = 16;
                    break;
                case 'Regular':
                    price = 22.5;
                    break;
            }
            break;
    }

    
    let totalPrice = 0;

    if(amount >= 30 && type === 'Students'){
        totalPrice = amount * price;
        totalPrice *= 0.85;
    } else if(amount >= 100 && type === 'Business'){
        totalPrice = (amount - 10) * price;
    } else if (amount >= 10 && amount <= 20 && type === 'Regular') {
        totalPrice = amount * price;
        totalPrice *= 0.95;
    } else {
        totalPrice = amount * price;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


vacation(30,"Students","Sunday");
vacation(40,"Regular","Saturday");





