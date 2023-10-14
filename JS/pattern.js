function printPattern1(n) {
    console.log('For n = ', n);
    for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
    process.stdout.write('* ');
    }
    console.log();
    }
   }
   printPattern1(1);
   printPattern1(2);
   printPattern1(3);
   printPattern1(4);
   printPattern1(5);