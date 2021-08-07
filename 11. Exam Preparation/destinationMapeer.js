function destinationMapper(input) {
    let pattern = /([=\/])(?<destination>[A-Z][a-zA-Z]{2,})(\1)/g;
    let destinantions = [];
    let match = pattern.exec(input);
    let points = 0;

    while(match !== null) {
        points += match.groups.destination.length;
        destinantions.push(match.groups.destination);
        match = pattern.exec(input);
    }

   console.log(`Destinations: ${destinantions.join(', ')}`);
   console.log(`Travel Points: ${points}`);
}

destinationMapper('=HAwai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
