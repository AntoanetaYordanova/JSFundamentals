function passwordReset(inputArr) {
  let str = inputArr.shift();
  let newPass = "";

  for (let command of inputArr) {
    if(command === 'Done') {
        break;
    }

    command = command.split(" ");

    if(command[0] === 'TakeOdd') {
        for (let i = 1; i < str.length; i += 2) {
            newPass += str[i];
          }
          console.log(newPass);
    } else if (command[0] === 'Cut') {
        let index = Number(command[1]);
        let length = Number(command[2]);
        let substring = newPass.substring(index, index + length);
        newPass = newPass.replace(substring, '');
        console.log(newPass);
    } else if (command[0] === 'Substitute') {
        let oldSubstr = command[1];
        let newSubstr = command[2];

        if(newPass.includes(oldSubstr)) {

            while(newPass.includes(oldSubstr)) {
                newPass = newPass.replace(oldSubstr, newSubstr);
            }

            console.log(newPass);
        } else {
            console.log("Nothing to replace!");
        }    
    }
  }
  console.log(`Your password is: ${newPass}`);
  
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
