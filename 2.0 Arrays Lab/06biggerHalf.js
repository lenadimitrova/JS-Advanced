function biggerHalf(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let middle = Math.floor(sortedArr.length / 2);
    let result = sortedArr.slice(middle)
    return (result);
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));