function evenPositionElement(arr) {

    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        let currentEl = arr[index];
        if (index % 2 === 0) {
            newArr.push(currentEl)
        }
    }
    console.log(newArr.join(' '));
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);