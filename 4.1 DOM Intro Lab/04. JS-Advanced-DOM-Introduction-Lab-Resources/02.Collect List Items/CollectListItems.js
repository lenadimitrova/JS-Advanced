function extractText() {
    // let ulElement = document.getElementById('items');

    // let textAreaElement = document.getElementById('result');
    // textAreaElement.textContent = ulElement.textContent;

    let itemNodes = document.querySelectorAll('ul#items li');
    
    let textareaElement = document.querySelector('#result');

    for (const node of itemNodes) {
        textareaElement.value += node.textContent + '\n'
    }

}



