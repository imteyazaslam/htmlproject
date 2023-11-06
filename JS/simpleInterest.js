function simpleInt(principle, rate, time) {
    var finalAmt=principle + principle*time*rate;
    return finalAmt;
   }
   console.log(simpleInt(20000,5,2)) //220000
   console.log(simpleInt(150000,25,1)) //390000