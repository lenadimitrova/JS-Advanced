function solve() {
    //Select elements
    let onScreenBtn = document.querySelector('#container button');
    // 1.Attach event listener on [On-screen] button
    onScreenBtn.addEventListener('click', onScreenHandler);
    let clearArchiveBtn = document.querySelector('#archive > button');
    clearArchiveBtn.addEventListener('click', clearArchive);

    // Implement Add movie functionality
    function onScreenHandler(e) {
        e.preventDefault();
        let addMovieElements = document.querySelectorAll('#container input');

        // 2.Get input values for movie
        let nameElement = addMovieElements[0];
        let hallElement = addMovieElements[1];
        let ticketPriceElement = addMovieElements[2];

        // 3.Convert values where needed
        let name = nameElement.value;
        let hall = hallElement.value;
        let ticketPrice = Number(ticketPriceElement.value);
        if (name !== '' && hall !== '' && ticketPrice !== '') {
            // 4.Create html structure for movie
            let liElement = document.createElement('li');

            let spanNameElement = document.createElement('span');
            spanNameElement.innerText = name;

            let strongHallElement = document.createElement('strong');
            strongHallElement.innerText = `Hall: ${hall}`;

            let divElement = document.createElement('div');

            let strongPriceElement = document.createElement('strong');
            strongPriceElement.innerText = ticketPrice.toFixed(2);

            let ticketsSoldInput = document.createElement('input');
            ticketsSoldInput.placeholder = 'Tickets Sold';

            let archiveBtn = document.createElement('button');
            archiveBtn.innerText = 'Archive';
            archiveBtn.addEventListener('click', archiveMovie)

            Array.from(addMovieElements).forEach(i => i.value = '');

            // 5.Attach html structure to Movies on screen section
            divElement.appendChild(strongPriceElement);
            divElement.appendChild(ticketsSoldInput);
            divElement.appendChild(archiveBtn);

            liElement.appendChild(spanNameElement);
            liElement.appendChild(strongHallElement);
            liElement.appendChild(divElement);

            let moviesUl = document.querySelector('#movies ul');
            moviesUl.appendChild(liElement);
        }
    }
    // Implement Archive movie functionality
    function archiveMovie(e) {
        let movieLi = e.target.parentElement.parentElement;
        let ticketsSoldInput = movieLi.querySelector('div input');
        let ticketsSold = ticketsSoldInput.value;

        if (ticketsSold !== '' && !isNaN(Number(ticketsSold))) {
            ticketsSold = Number(ticketsSold);

            let ticketsPrice = movieLi.querySelector('div strong');
            let price = Number(ticketsPrice.innerText);

            let hallStrong = movieLi.querySelector('strong');
            hallStrong.innerText = `Total amount: ${(ticketsSold * price).toFixed(2)}`;

            // 1.Attach event listener for each movie's archive button
            let deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            movieLi.appendChild(deleteBtn)
            deleteBtn.addEventListener('click', deleteFromArchive);

            let divElement = movieLi.querySelector('div');
            divElement.remove();

            let archivedUl = document.querySelector('#archive ul');
            archivedUl.appendChild(movieLi)
        }
    }

    function deleteFromArchive(e) {
        let currentElement = e.target;
        let movieLi = currentElement.parentElement;
        movieLi.remove();
        console.log(movieLi);
    }

    function clearArchive() {
        let archivedLis = Array.from(document.querySelectorAll('#archive ul li'));
        archivedLis.forEach(el => el.remove());
    }
}