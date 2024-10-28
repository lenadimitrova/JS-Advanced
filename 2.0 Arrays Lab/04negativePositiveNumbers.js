function negativePositiveNumbers(arr) {

    let newArr = [];

    for (const el of arr) {
        let currentElement = Number(el);

        if (currentElement < 0) {
            newArr.unshift(currentElement)
        } else {
            newArr.push(currentElement)
        }
    }
    console.log(newArr);
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);