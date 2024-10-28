function addAndRemoveElements(arr) {

    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        let command = arr[index];

        if (command === 'add') {
            newArr.push(index + 1)
        } else if (command === 'remove') {
            newArr.pop(index)
        }
    }
    if (newArr.length === 0) {
        console.log(`Empty`);
    } else {
        console.log(newArr.join('\n'));
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add'])