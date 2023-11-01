function sumRange1(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
    sum += i;
    }
    return sum;
   }
   function sumRange2(n) {
    return (n * (n + 1)) / 2;
   }
   function sumRange3(n) {
    let sum = 0;
    for (let i = n; i >= 1; i--) {
    sum += i;
    }
    return sum;
   }
   console.log(sumRange1(10)); //Output?
   console.log(sumRange2(10)); //Output?
   console.log(sumRange3(10)); //Output