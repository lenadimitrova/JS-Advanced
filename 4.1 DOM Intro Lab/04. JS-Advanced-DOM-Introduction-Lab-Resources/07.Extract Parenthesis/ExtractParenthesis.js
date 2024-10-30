function extract(content) {

    let contectElement = document.getElementById('content');

    let pattern = /\(([^(]+)\)/g
    let matches = contectElement.textContent.matchAll(pattern);
    let result = [];
    for (const match of matches) {
        result.push(match[1])
    }
    return result.join('; ')

}