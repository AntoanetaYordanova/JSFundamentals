function cardGame(input) {
    let colors = {
        S : 4,
        H : 3,
        D : 2,
        C : 1
    }

    let powers = {
        J : 11,
        Q : 12,
        K : 13,
        A : 14
    }

    let players = {};

    for(let player of input) {
        let [name, cards] = player.split(': ');
        cards = cards.split(', ');
        
        if(!players.hasOwnProperty(name)) {
            players[name] = [];
        }

        players[name].push(...cards);
    }

    let allNames = Object.keys(players);

    for(let name of allNames) {
        let cards = new Set(players[name]);
        cards = Array.from(cards);
        let totalPoints = 0;

        for(let card of cards) {
            card = card.split('');
            let color = card.pop();
            let power = card.join('');

            if(isANum(power)) {
                totalPoints += Number(power) * colors[color];
            } else {
                totalPoints += powers[power] * colors[color];
            }
        }

        players[name] = totalPoints;
    }

    function isANum(a) {
        a = Number(a);
        return !isNaN(a);
    }

    for(let player in players) {
        console.log(`${player}: ${players[player]}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )