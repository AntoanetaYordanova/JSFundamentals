function adAstra(input) {
    const pattern = /(#|\|)(?<item>[a-zA-Z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let totalCal = 0;
    let items = [];
    let match = pattern.exec(input);

    while(match !== null) {
        const item = match.groups.item;
        const expDate = match.groups.expDate;
        const calories = match.groups.calories;

        items.push(`Item: ${item}, Best before: ${expDate}, Nutrition: ${calories}`)

        totalCal += Number(calories);
        match = pattern.exec(input);

    }

    const days = Math.floor(totalCal / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    console.log(items.join('\n'));
}

adAstra([ '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);

console.log('--------------------');

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);