import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';

const form = document.querySelector('form');
const output = document.getElementById('result');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);

  let result = calculateResult(numberValues);

  let resultText = '';

  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }

  output.textContent = resultText;
}

form.addEventListener('submit', formSubmitHandler);
