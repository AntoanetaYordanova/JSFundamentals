function fancyBarcode(input) {
    let productsNum = Number(input.shift());

    for(let i = 0; i < productsNum; i++) {
        let product = input[i];
        let pattern = /@#+(?<product>[A-Z][a-zA-Z0-9]{4,}[A-Z])@#+/g;
        let match = pattern.exec(product);

        if (match) {
            product = match.groups.product;
            let numPattern = /[0-9]/g;
            let numMatch = product.match(numPattern);
            let productGroup = '';

            if(numMatch) {
                productGroup = numMatch.join('');
            } else {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}

fancyBarcode([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ]);
// fancyBarcode([ '6', '@###Val1d1teM@###', '@#ValidIteM@#', '##InvaliDiteM##', '@InvalidIteM@', '@#Invalid_IteM@#', '@#ValiditeM@#' ] );