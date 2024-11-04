function add(partialApplNum) {
    return function (num) {
        return partialApplNum + num
    }
}

let add5 = add(5);
console.log(add5(2));
console.log(add5(3));