function lowerOrUpper(char) {
    let isUpper = false;
    let toLowerCase = char.toLowerCase();

    if(char !== toLowerCase){
        isUpper = true;
    }

    isUpper ? console.log('upper-case') : console.log('lower-case');;
}

lowerOrUpper('F');