// program to empty an array

function emptyArray(arr) {

    // setting array length to 0
    arr.length = 0;
    
    return arr;
}

const array = [1, 2 ,3];
console.log(array);

// call the function
const result = emptyArray(array);
console.log(result);