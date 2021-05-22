function login(input){
    let index = 0;
    let username = input[index++];
    let targetPassword = '';
    let secondIndex = username.length - 1;
    let falsePassCounter = 0;

    for(let i = secondIndex; i >= 0; i--){
        targetPassword += username[i];
    }

    while(index < input.length){
        let currentWord = input[index++];
        if(currentWord !== targetPassword){
            falsePassCounter++;
            if(falsePassCounter < 4){
                console.log('Incorrect password. Try again.');
            } else{
                console.log(`User ${username} blocked!`);
                break;
            }
        } else{
            console.log(`User ${username} logged in.`);
            break;
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny'])