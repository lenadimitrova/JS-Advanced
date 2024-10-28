function listOfNames(arr) {

    let sortedArray = arr.sort((a, b) => a.localeCompare(b));

    let orderNum = 1;

    sortedArray.forEach(name => {
        console.log(`${orderNum}.${name}`);
        orderNum++
    });
}
listOfNames(["John",
    "Bob",
    "Christina",
    "Ema"])