function addNumber(...args) {
    return args.reduce((total,num) => total+num); //Add numbers
   }
   console.log(addNumber(2,4,5)) // 11
   console.log(addNumber(10,45,34,130)) // 219