function gratestCommonDevidor(num1, num2) {

    while (num2 > 0) {
        const temp = num2;
        num2 = num1 % num2;
        num1 = temp
    }
    console.log(num1);
}
gratestCommonDevidor(15, 5);
gratestCommonDevidor(2154, 458);