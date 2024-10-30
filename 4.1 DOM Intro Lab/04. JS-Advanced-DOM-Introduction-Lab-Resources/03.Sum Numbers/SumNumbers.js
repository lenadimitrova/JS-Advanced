function calc() {
   // let numOneElement = document.getElementById('num1').value;
   // let numTwoElement = document.getElementById('num2').value;

   // let sum = Number(numOneElement) + Number(numTwoElement);


   // document.getElementById('sum').value = sum;

   let numOneElement = document.getElementById('num1');
   let numTwoElement = document.getElementById('num2');

   let firstNum = Number(numOneElement.value);
   let secondNum = Number(numTwoElement.value);

   let sum = firstNum + secondNum;

   let resultElement = document.getElementById('sum');
   resultElement.value = sum;
}
