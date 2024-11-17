function solve() {
    let taskElement = document.getElementById('task');
    let descriptionElement = document.getElementById('description');
    let dueDateElement = document.getElementById('date');
    let addBtn = document.getElementById('add');

    addBtn.addEventListener('click', addTask);

    const [_, openSection, progressSection, finishSection] = Array.from(document.querySelectorAll('section')).map(e => e.children[1]);


    function addTask(e) {
        e.preventDefault();

        if (taskElement.value !== '' && descriptionElement.value !== '' && dueDateElement.value !== '') {
            const article = document.createElement('article');
            article.appendChild(createElement('h3', taskElement.value));
            article.appendChild(createElement('p', descriptionElement.value));
            article.appendChild(createElement('p', dueDateElement.value));
            const div = createElement('div', '', 'flex');

            const startBtn = createElement('button', 'Start', 'green');
            const deleteBtn = createElement('button', 'Delete', 'red');
            const finishBtn = createElement('button', 'Finish', 'orange');

            startBtn.addEventListener('click', onStart);
            deleteBtn.addEventListener('click', onDelete);
            finishBtn.addEventListener('click', onFinish);
            div.appendChild(startBtn);
            div.appendChild(deleteBtn);

            article.appendChild(div);

            taskElement.value = ''
            descriptionElement.value = ''
            dueDateElement.value = ''

            openSection.appendChild(article);

            function onStart() {
                startBtn.remove();
                div.appendChild(finishBtn)
                progressSection.appendChild(article);
            }

            function onDelete() {
                article.remove();
            }

            function onFinish() {
                finishSection.appendChild(article);
                div.remove();
            }
        }
    }

    function createElement(type, content, className) {
        const element = document.createElement(type);
        element.innerText = content;
        if (className) {
            element.className = className;
        }
        return element;
    }
}