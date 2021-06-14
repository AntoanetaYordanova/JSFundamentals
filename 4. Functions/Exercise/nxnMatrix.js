function nxnMatrix(n) {
   for(let i = 0; i < n; i++) {
       let printLine = '';
       for(let i = 0; i < n; i++) {
           printLine += n + ' ';
       }

       console.log(printLine);
   } 
}

nxnMatrix(7);