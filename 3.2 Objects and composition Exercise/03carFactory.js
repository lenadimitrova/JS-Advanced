function carFactory(car) {

    let resultCar = {};
    let engine = {};
    let carrige = {};

    resultCar.model = car.model;

    if (car.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (car.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (car.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    carrige.type = car.carriage;
    carrige.color = car.color;

    if (car.wheelsize % 2 === 0) {
        car.wheelsize --;
    }

    resultCar.engine = engine;
    resultCar.carriage = carrige;
    resultCar.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];

    return resultCar;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});