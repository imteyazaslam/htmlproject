// Implementation of selection sort in JavaScript to sort an array of integers indescending order:

function selectionSortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[maxIndex]) {
    maxIndex = j;
    }
    }
    if (maxIndex !== i) {
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
}
}
return arr;
}
// Example usage:
const unsortedArray = [4, 2, 7, 1, 9, 6, 5, 8, 3];
const sortedArray = selectionSortDescending(unsortedArray);
console.log(sortedArray); // [9, 8, 7, 6, 5, 4, 3, 2, 1]