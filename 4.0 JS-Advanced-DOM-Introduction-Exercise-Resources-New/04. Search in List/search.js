function search() {
   let userWord = document.getElementById('searchText').value;
   let townsElement = Array.from(document.querySelectorAll('#towns li'));
   let resultElement = document.getElementById('result');
   let counter = 0;

   for (const town of townsElement) {
      if (town.textContent.includes(userWord)) {
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   resultElement.textContent = `${counter} matches found`;
}
