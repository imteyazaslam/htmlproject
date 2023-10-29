// JavaScript Program to convert decimal to binary
function convertToBinary(x) {
    let bi = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
       // console.log(`Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient ${parseInt(x/2)}`);
        x = parseInt(x / 2);
        bi = bi + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bi}`);
}

const num = prompt('Enter a decimal number: ');

convertToBinary(num);