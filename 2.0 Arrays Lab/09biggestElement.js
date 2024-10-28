function biggestElement(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        let rowElement = matrix[row][0];

        for (let col = 0; col < matrix.length; col++) {
            // let colElement = matrix[row][col]
            if (rowElement < colElement) {
                continue;
            } else {
                colElement = rowElement
            }
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colElement = matrix[row][col];

        for (let row = 0; row < matrix.length; row++) {
            const rowElement = matrix[row][col];
            if (rowElement < colElement) {
                continue;
            } else {
                colElement = rowElement
            }
            return rowElement
        }

    }

}
console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145]]));