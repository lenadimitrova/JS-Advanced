function calorieObject(array) {

    result = {};

    for (let i = 0; i < array.length; i += 2) {
        let product = array[i];
        let calories = Number(array[i + 1]);

        result[product] = calories
    }
    console.log(result);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])