function wordsUpperCase(words) {

    const pattern = /\w+/g;
    const output = words.match(pattern).join(', ').toUpperCase();
    console.log(output);
}
wordsUpperCase('Hi, how are you?')