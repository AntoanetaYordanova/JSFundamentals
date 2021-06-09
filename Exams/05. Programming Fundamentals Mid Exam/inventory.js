function inventory(inputArr){
    let currentInventory = inputArr.shift() .split(', ');
    
    for(let i = 0; i < inputArr.length - 1; i++) {
        let string = inputArr[i];
        let [action, item] = string.split(' - ');
        switch(action){
            case 'Collect' :
                if(!currentInventory.includes(item)) {
                    currentInventory.push(item);
                }
                break;
            case  'Drop':
                if(currentInventory.includes(item)){
                    let index = currentInventory.indexOf(item);
                    currentInventory.splice(index, 1);
                }
                break;
            case 'Combine Items':
                let [oldItem, newItem] = item.split(':');
                if(currentInventory.includes(oldItem)) {
                    let index = currentInventory.indexOf(oldItem);
                    currentInventory.splice(index + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if(currentInventory.includes(item)){
                    let index = currentInventory.indexOf(item);
                    let tempValue = currentInventory.splice(index, 1);
                    currentInventory.push(tempValue);
                }
                break;
        }
    }

    if(inputArr[inputArr.length - 1] === 'Craft!') {
        console.log(currentInventory.join(', '));
    }
}

inventory([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);
// inventory([ 'Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);
