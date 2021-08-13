function needForSpeed(input) {
    const n = Number(input.shift());
    let cars = {};
    const actions = {
        'Drive' : drive,
        'Refuel' : refuel,
        'Revert' : revert
    }  

    for(let i = 0; i < n; i++) {
        let [name, mileage, fuel] = input.shift() .split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        cars[name] = {
            mileage,
            fuel
        }
    }

    while(input[0] !== 'Stop') {
        let line = input.shift() .split(' : ');
        let action = actions[line.shift()];
        action(line);
    }

    function drive(params) {
        let name = params[0];
        let distance = Number(params[1]);
        let fuel = Number(params[2]);
        let car = cars[name];

        if(car.fuel < fuel) {
            console.log('Not enough fuel to make that ride');
        } else {
            console.log(`${name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            car.fuel -= fuel;
            car.mileage += distance;

            if(car.mileage >= 100000) {
                delete cars[name];
                console.log(`Time to sell the ${name}!`);
            }
        }
    }

    function refuel(params) {
        const name = params[0];
        const fuel = Number(params[1]);
        let car = cars[name];
        const newLitres = car.fuel + fuel;
        let difference = 0

        if(newLitres >= 75) {
            difference = 75 - car.fuel;
            car.fuel = 75;
        } else {
            difference = fuel;
            car.fuel = newLitres;
        }
        
        console.log(`${name} refueled with ${difference} liters`);
    }

    function revert(params) {
        const name = params[0];
        const car = cars[name];
        const kilometers = Number(params[1]);
        const newKilometers = car.mileage - kilometers;

        if(newKilometers < 10000) {
            car.mileage = 10000
        } else {
            car.mileage = newKilometers;
            console.log(`${name} mileage decreased by ${kilometers} kilometers`);
        }
    }

    let sorted = Object.entries(cars) .sort(sortFunct);

    function sortFunct(a, b) {
        const mileageA = a[1].mileage;
        const mileageB = b[1].mileage;
        const nameA = a[0];
        const nameB = b[0];

        return mileageB - mileageA || nameA.localeCompare(nameB);
    }

    sorted.forEach(car => {
        console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
    })
}

needForSpeed(['3','Audi A6|38000|62','Mercedes CLS|11000|35','Volkswagen Passat CC|45678|5','Drive : Audi A6 : 543 : 47','Drive : Mercedes CLS : 94 : 11','Drive : Volkswagen Passat CC : 69 : 8','Refuel : Audi A6 : 50','Revert : Mercedes CLS : 500','Revert : Audi A6 : 30000','Stop']);
console.log('-----------------');
needForSpeed([ '4', 'Lamborghini Veneno|11111|74', 'Bugatti Veyron|12345|67', 'Koenigsegg CCXR|67890|12', 'Aston Martin Valkryie|99900|50', 'Drive : Koenigsegg CCXR : 382 : 82', 'Drive : Aston Martin Valkryie : 99 : 23', 'Drive : Aston Martin Valkryie : 2 : 1', 'Refuel : Lamborghini Veneno : 40', 'Revert : Bugatti Veyron : 2000', 'Stop']);