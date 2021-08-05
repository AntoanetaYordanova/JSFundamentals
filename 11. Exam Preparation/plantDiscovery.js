function plantDiscovery(input) {
    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift() .split('<->');
        plants[plant] = {};
        plants[plant].rarity = rarity;
    }

    for(const command of input) {
      let tokens = command.split(': ');

      if(tokens[0] === 'Rate') {
        const [plant, rating] = tokens[1].split(' - ');

        if(plants[plant].rating === undefined) {
            plants[plant].rating = Number(rating);
        } else {
            plants[plant].rating += Number(rating);
        }
        
      } else if(tokens[0] === 'Update') {

      } else if(tokens[0] === 'Reset') {
          
      } else {
          console.log('error');
      }
    }
}

plantDiscovery(['3', 'Arnoldii<->4', 'Woodii<->7', 'Welwitschia<->2', 'Rate: Woodii - 10', 'Rate: Welwitschia - 7', 'Rate: Arnoldii - 3', 'Rate: Woodii - 5', 'Update: Woodii - 5', 'Reset: Arnoldii', 'Exhibition' ]);
// plantDiscovery(['2', 'Candelabra<->10', 'Oahu<->10', 'Rate: Oahu - 7', 'Rate: Candelabra - 6', 'Exhibition']);