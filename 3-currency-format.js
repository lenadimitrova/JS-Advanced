function createFormatter(separator, symbol, issymbolFirst, currencyFormatter) {
    return function(price){
        return currencyFormatter(separator, symbol, issymbolFirst, price)
    }

}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345)); // $ 5345,00

console.log(dollarFormatter(3.1429)); // $ 3,14

console.log(dollarFormatter(2.709));

function currencyFormatter(separator, symbol, issymbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (issymbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
};