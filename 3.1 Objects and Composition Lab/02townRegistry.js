function townRegistry(input) {
    let registry = {};

    for (const info of input) {
        let [town, populationAsString] = info.split(' <-> ');
        let population = Number(populationAsString);

        if (!registry[town]) {
            registry[town] = 0;
        }

        registry[town] += population
    }

    for (const town in registry) {
        console.log(`${town} : ${registry[town]}`);
    }
}
townRegistry(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])