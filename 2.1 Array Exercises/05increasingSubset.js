function increasingSubset(arr) {

    let increasingArray = [];
    let biggest = Number.MIN_SAFE_INTEGER

    for (let index = 0; index < arr.length; index++) {
        let currentNum = arr[index];

        if (currentNum >= biggest) {
            increasingArray.push(currentNum)
            biggest = currentNum
        }
    }
    return increasingArray
}
console.log(increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));


//reduce method

function increasingSubset(arr) {

    let biggest = Number.MIN_SAFE_INTEGER;

    let increasingArray = arr.reduce((acc, curr) => {
        if (curr >= biggest) {
            biggest = curr;

            let tempArr = acc
            tempArr.push(curr);
            return tempArr;
        }
        return acc
    }, []);

    return increasingArray
}
console.log(increasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));