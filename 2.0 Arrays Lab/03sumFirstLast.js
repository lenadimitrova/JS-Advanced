function sumFirstLast(arr) {
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());

    console.log(firstEl + lastEl);
}
sumFirstLast(['20', '30', '40'])