function loadingBar(percents) {
   let counter = 0;
    let bar = '';
   for(let i = 0; i < 10; i++) {
    counter++;
    if(counter <= percents / 10) {
        bar += '%';
    } else {
        bar += '.';
    }
   } 

   if(percents === 100) {
       console.log(`100% Complete!`);
       console.log(bar);
   } else {
       console.log(`${percents}% [${bar}]`);
       console.log('Still loading...');
   }
}


loadingBar(50);