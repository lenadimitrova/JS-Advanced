function solve() {
  let textElement = document.getElementById('text').value;
  let conventionElement = document.getElementById('naming-convention').value;
  let result = '';

  if (conventionElement === "Camel Case") {

    for (let i = 0; i < textElement.length; i++) {
      if (textElement[i] === ' ') {
        result += (textElement[i + 1].toUpperCase())
        i++
      } else {
        result += textElement[i].toLowerCase();
      }
    }
  } else if (conventionElement === 'Pascal Case') {
    result += textElement[0].toUpperCase();

    for (let i = 1; i < textElement.length; i++) {
      if (textElement[i] === ' ') {
        result += textElement[i + 1].toUpperCase();
        i++
      } else {
        result += textElement[i].toLowerCase();
      }
    }
  } else {
    result = 'Error!'
  }

  resultElement = document.getElementById('result');
  resultElement.textContent = result

}