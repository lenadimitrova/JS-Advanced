function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    num1 = Number(num1);
    let num2 = document.getElementById('secondNumber').value;
    num2 = Number(num2);

    let sum = num1 - num2;

    let result = document.getElementById('result');

    result.textContent = sum;

}