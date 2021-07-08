function inventory(inputArr) {
    let heroes = [];

    for(let hero of inputArr) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        items = sortItems(items);
        let obj = {
            name,
            level,
            items
        };

        heroes.push(obj);
        
    }

    let sortedHeores = heroes.sort((a, b) => a.level - b.level);

    for(let hero of sortedHeores) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

    function sortItems(str) {
        let itemsArr = str.split(', ');
        items = itemsArr.sort((a, b) => a.localeCompare(b)) .join(', ');
        return items;
    }
}

inventory(["Isacc / 25 / Apple, GravityGun","Derek / 12 / BarrelVest, DestructionSword","Hes / 1 / Desolator, Sentinel, Antara"]);