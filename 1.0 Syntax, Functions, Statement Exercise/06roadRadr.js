function roadRadar(speed, area) {

    let limit = 0;

    switch (area) {
        case 'motorway':
            limit = 130
            break;
        case 'interstate':
            limit = 90
            break;
        case 'city':
            limit = 50
            break;
        case 'residential':
            limit = 20
            break;
    }

    if (speed <= limit) {
        const output = `Driving ${speed} km/h in a ${limit} zone`;
        console.log(output);
        return;
    }
    let status = '';
    let speeding = speed - limit;

    if (speeding <= 20) {
        status = 'speeding'
    } else if (speeding <= 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }

    const output = `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`

    console.log(output);
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');