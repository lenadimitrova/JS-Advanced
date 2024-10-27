function timeToWalk(steps, footprintLenght, speedInKm) {

    let distanceMeters = steps * footprintLenght;
    let speedInMetresSec = speedInKm * 1000 / 3600;
    let restTime = Math.floor(distanceMeters / 500) * 60;
    let time = (distanceMeters / speedInMetresSec) + restTime;

    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    let min = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let sec = (time % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${min}:${sec}`);
}
timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)