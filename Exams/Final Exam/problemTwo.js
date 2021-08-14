function registration(input) {
    let n = Number(input.shift());
    let registrationsCounter = 0;

    for(let i = 0; i < n; i++) {
        const pattern = /U\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[a-zA-Z]{5,}[0-9]+)P@\$/g;
        const currentInput = input[i];
        const match = pattern.exec(currentInput);

        if(match !== null){
            registrationsCounter++;
            const username = match.groups.username;
            const password = match.groups.password;

            console.log('Registration was successful');
            console.log(`Username: ${username}, Password: ${password}`);
        } else {
            console.log('Invalid username or password');
        }
    }
    
    console.log(`Successful registrations: ${registrationsCounter}`);
}

registration([ '3', 'U$MichaelU$P@$asdqwe123P@$', 'U$NameU$P@$PasswordP@$', 'U$UserU$P@$ad2P@$']);
console.log('----------');
registration([ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412' ]);
console.log('----------');
registration([ '3', 'U$myU$-->P@$asdqwe123P@$', 'Sara 1232412', 'U$NameU$P@$Pass234P@$']);