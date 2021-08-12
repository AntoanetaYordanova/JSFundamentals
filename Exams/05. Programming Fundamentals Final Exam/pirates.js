function pirates(input) {
    let cities = {};
    let actions = {
        'Plunder' : plunder,
        'Prosper' : prosper
    }

    while (input[0] !== 'Sail') {
        let [name, population, gold] = input.shift() .split('||');
        population = Number(population);
        gold = Number(gold);

        if(!cities.hasOwnProperty(name)) {
            cities[name] = {
                population,
                gold
            }
        } else {
            cities[name].population += population;
            cities[name].gold += gold;
        }
        
    }

    input.shift();

    while(input[0] !== 'End') {
        let line = input.shift() .split('=>');
        let action = actions[line.shift()];
        action(line);
    }

    function plunder(params) {
        let name = params[0];
        let people = Number(params[1]);
        let gold = Number(params[2]);
        
        if(cities.hasOwnProperty(name)) {
            let newPopulationValue = cities[name].population - people;
            let newGoldValue = cities[name].gold - gold;

            if(newPopulationValue <= 0 || newGoldValue <= 0) {
                delete cities[name];
                console.log(`${name} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                console.log(`${name} has been wiped off the map!`);
            } else {
                cities[name].population = newPopulationValue;
                cities[name].gold = newGoldValue;
                console.log(`${name} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            }
        }
    }

    function prosper(params) {
        let name = params[0];
        let gold = Number(params[1]);

        if(cities.hasOwnProperty(name)) {

            if(gold >= 0) {
                cities[name].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${name} now has ${cities[name].gold} gold.`);
            } else {
                console.log('Gold added cannot be a negative number!');
            }
        }
    }

    let townsLeft = Object.entries(cities);

    if(townsLeft.length > 0) {
        let sorted = townsLeft.sort((a,b) => {
            let nameA = a[0];
            let nameB = b[0];
            let goldValueA = a[1].gold;
            let goldValueB = b[1].gold;
            return goldValueB - goldValueA || nameA.localeCompare(nameB);
        });
        
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        sorted.forEach(element => console.log(`${element[0]} -> Population: ${element[1].population} citizens, Gold: ${element[1].gold} kg`))
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
 
    console.log();
}

// pirates([ 'Tortuga||345000||1250', 'Santo Domingo||240000||630', 'Havana||410000||1100', 'Sail', 'Plunder=>Tortuga=>75000=>380', 'Prosper=>Santo Domingo=>180', 'End']);

console.log('--------------');

pirates([ 'Nassau||95000||1000', 'San Juan||930000||1250', 'Campeche||270000||690', 'Port Royal||320000||1000', 'Port Royal||100000||2000', 'Sail', 'Prosper=>Port Royal=>-200', 'Plunder=>Nassau=>94000=>750', 'Plunder=>Nassau=>1000=>150', 'Plunder=>Campeche=>150000=>690', 'End']);