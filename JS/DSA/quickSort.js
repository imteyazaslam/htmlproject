function quickSort(arr) {
    if (arr.length <= 1) {
    return arr;
    }
    const pivot = arr[0];
    const leftArr = [];
    const rightArr = [];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
    leftArr.push(arr[i]);
    } else {
    rightArr.push(arr[i]);
    }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    }
    const arr = [5, 3, 8, 1, 2];
    const sortedArr = quickSort(arr); // [1, 2, 3, 5, 8]