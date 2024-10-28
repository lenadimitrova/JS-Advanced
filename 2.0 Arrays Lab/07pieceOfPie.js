function pieceOfPie(arr, firstPie, secondPie) {
    let start = arr.indexOf(firstPie);
    let end = arr.indexOf(secondPie) + 1;

    let result = arr.slice(start, end);

    return result;
}
console.log(pieceOfPie(
    ['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));