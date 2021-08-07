function plantDiscovery(input) {
    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift() .split('<->');
        plants[plant] = {};
        plants[plant].rarity = Number(rarity);
    }

    for(const command of input) {

        if(command === 'Exhibition') {
            break;
        }

      let tokens = command.split(': ');

      if(tokens[0] === 'Rate') {
        const [plant, rating] = tokens[1].split(' - ');

        if(plants.hasOwnProperty(plant)) {
            if(!plants[plant].hasOwnProperty('rating')) {
                plants[plant].rating = rating;
            } else {
                plants[plant].rating += ' ' + rating;
            }
        } else {
            console.log('error');
        }
        
      } else if(tokens[0] === 'Update') {
        let [plant, newRarity] = tokens[1].split(' - ');

        if(plants.hasOwnProperty(plant)) {
            plants[plant].rarity = Number(newRarity);
        } else {
            console.log('error');
        }
        
      } else if(tokens[0] === 'Reset') {
        const plant = tokens[1];

        if(plants.hasOwnProperty(plant)) {
            plants[plant].rating = '0';
        } else {
            console.log('error');
        }
        
      } else if (tokens[0] !== 'Rate' && tokens[0] !== 'Update' && tokens[0] !== 'Reset'){
          console.log('error');
      }
    }

    let keys = Object.keys(plants);
    let averageRatings = {};

    for(let key of keys) {
        let counter = 0;
        let sum = 0;
        const arr = plants[key].rating 
        .split(' ') 
        .map(Number);
        arr.forEach(element => {
            counter++;
            sum += element;
        });
        const average = sum / counter;
        averageRatings[key] = average;

    }
    
    const sorted = keys.sort((a,b) => {
        if(plants[a].rarity !== plants[b].rarity) {
            return plants[b].rarity - plants[a].rarity
        } else {
            return averageRatings[b] - averageRatings[a]; 
        }
    })

    console.log('Plants for the exhibition:');

    for(let plant of sorted) {
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRatings[plant].toFixed(2)}`);
    }
}

plantDiscovery(['3', 'Arnoldii<->4', 'Woodii<->7', 'Welwitschia<->2', 'Rate: Wood - 10', 'Rate: Welwitschia - 7', 'Rate: Arnoldii - 3', 'Rate: Woodii - 5', 'Update: Woodii - 5', 'Reset: Arnoldii', 'Exhibition' ]);
// plantDiscovery(['2', 'Candelabra<->10', 'Oahu<->10', 'Rate: Oahu - 7', 'Rate: Candelabra - 6', 'Exhibition']);