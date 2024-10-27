function fruit(fruit, weightGm, pricePerKg) {
    let weightKg = weightGm / 1000;
    let moneyTotal = pricePerKg * weightKg;
    console.log(`I need $${moneyTotal.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)