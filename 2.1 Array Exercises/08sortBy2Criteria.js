function sortBy2Criteria(arr) {

    sorted = arr.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriterial = a.localeCompare(b);
        return firstCriteria || secondCriterial
    })
    console.log(sorted.join('\n'));
}
sortBy2Criteria(['alpha', 'beta', 'gamma']);