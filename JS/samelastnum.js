// JavaScript Program to check whether the last digit of 2 numbers are the same

var x = prompt('Enter a first integer: ');
var y = prompt('Enter a second integer: ');

var res1 = x % 10;
var res2 = y % 10;

// compare the last digits
if(res1 == res2) 
    console.log("The numbers "+ x + " and " +y+ " have the same last digit.");

else 
    console.log("The numbers "+ x + " and " +y+ " do not have the same last digit.");
