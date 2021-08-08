function thePianist(input) {
    let actions = {
        'Add' : add,
        'Remove' : remove,
        'ChangeKey' : changeKey
    }

    const n = Number(input.shift());
    let collection = {};

    for(let i = 0; i < n; i++) {
        const [piece, composer, key] = input.shift() .split('|');
        collection[piece] = {
            composer,
            key
        }
        
    }

    while(input[0] !== 'Stop') {
        let line = input.shift() .split('|');
        const action = actions[line.shift()];
        action(line);
    }

    function add(params) {
        const [piece, composer, key] = params;
            if(!exist(collection, piece)) {
                collection[piece] = {
                    key,
                    composer
                };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        
    }

    function remove(piece) {
        if(exist(collection, piece)) {
            delete collection[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changeKey(params) {
        const [piece, newKey] = params;
        	if(exist(collection, piece)) {
                collection[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
    }

    function exist(obj, a) {
        return obj.hasOwnProperty(a)
    }

    const collectionEntries = Object.entries(collection);

    const sorted = collectionEntries.sort(sorts)

    function sorts(a, b) {
        const pieceA = a[0];
        const pieceB = b[0];
        const composerA = a[1].composer;
        const composerB = b[1].composer;

        return pieceA.localeCompare(pieceB) || composerA.localeCompare(composerB);
    }

    sorted.forEach(element => {
        const piece = element[0];
        const composer = element[1].composer;
        const key = element[1].key;

        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    })
}

// thePianist([ '3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop']);
thePianist([ '4', 'Eine kleine Nachtmusik|Mozart|G Major', 'La Campanella|Liszt|G# Minor', 'The Marriage of Figaro|Mozart|G Major', 'Hungarian Dance No.5|Brahms|G Minor', 'Add|Spring|Vivaldi|E Major', 'Remove|The Marriage of Figaro', 'Remove|Turkish March', 'ChangeKey|Spring|C Major', 'Add|Nocturne|Chopin|C# Minor', 'Stop']);