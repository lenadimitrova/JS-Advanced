function processOddPossitions(arr){

    // let newArr = [];

    // for (const el of arr) {
    //     if(arr.indexOf(el) % 2 !== 0) {
    //         newArr.push(el)
    //     }
    // }
    // let doubleArr = newArr.map(x => x * 2);
    // let reversed = doubleArr.reverse().join(' ')
    // return reversed;
    
}
// console.log(processOddPossitions([10, 15, 20, 25]));
console.log(processOddPossitions([3, 0, 10, 4, 7, 3]));
function processOddPossitions(arr){
return arr.filter((a, i) => i % 2 !== 0).map(x => x *2).reverse().join(" ");
}
