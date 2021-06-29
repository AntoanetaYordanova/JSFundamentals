function storeProvision(firstArr, secondArr) {
  let storageObj = {};

  for (let i = 0; i < firstArr.length; i += 2) {
    let article = firstArr[i];
    let amount = Number(firstArr[i + 1]);

    storageObj[article] = amount;
  }

  for (let i = 0; i < secondArr.length; i += 2) {
    let article = secondArr[i];
    let amount = Number(secondArr[i + 1]);
    let storageKeysArr = Object.keys(storageObj);

    if (storageKeysArr.includes(article)) {
      let newAmount = amount + storageObj[article];
      storageObj[article] = newAmount;
    } else {
      storageObj[article] = amount;
    }
  }

  let storageKeysArr = Object.keys(storageObj);

  for(let key of storageKeysArr) {
      let value = storageObj[key];
      console.log(`${key} -> ${value}`);

  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
