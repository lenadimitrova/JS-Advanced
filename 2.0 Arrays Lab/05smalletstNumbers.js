function smallestNumbers(arr){

    let sortedArr = arr.sort((a,b) => a - b);
    let newArr = sortedArr.slice(0, 2);
    console.log(newArr);
}
smallestNumbers([30, 15, 50, 5]);
smallestNumbers([3, 0, 10, 4, 7, 3]);