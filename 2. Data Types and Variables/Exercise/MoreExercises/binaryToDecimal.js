function binaryToDecimal(binary) {
    let binaryString = binary.toString();
    let decimal = 0;
    let counter = 0;

    for(let i = binaryString.length - 1; i >= 0; i--){
        decimal += Number(binaryString[i]) * Math.pow(2, counter);
        counter++;
    }

    console.log(decimal);
}

binaryToDecimal(11110000);