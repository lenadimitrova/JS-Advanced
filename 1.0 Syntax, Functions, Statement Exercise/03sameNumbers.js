function sameNumbers(input) {
    let arr = input.toString().split('');
    let sum = 0;

    let isSame = true;

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        sum += Number(currentNumber);

        if (arr[0] !== currentNumber) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);