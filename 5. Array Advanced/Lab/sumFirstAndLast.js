function sumFirstAndLast(arrayInput) {
    console.log(Number(arrayInput.shift()) + Number(arrayInput.pop()));
}

sumFirstAndLast(['20', '30', '40']);