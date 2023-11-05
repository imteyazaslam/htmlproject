function reverseNum(num) {
    let reverse = 0;
    while(num != 0)
    {
    reverse = reverse * 10;
    reverse = reverse + num%10;
    num = Math.trunc(num/10); // Remove decimal places
    }
    return reverse;
   }
   console.log(reverseNum(789))
   console.log(reverseNum(5872))
   