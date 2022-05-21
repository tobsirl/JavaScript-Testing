export function generateResultText(calculateResult) {
  let resultText = '';

  if (calculateResult === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (calculateResult !== 'no-calc') {
    resultText = 'Result: ' + result;
  }
  
  return resultText;
}
