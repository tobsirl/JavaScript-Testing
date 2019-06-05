const { generateText } = require('./util');

test('should ouput name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('should output data-less text', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
  const text2 = generateText();
  expect(text2).toBe('undefined (undefined years old)')
});
// describe('generateText', () => {
//   it('should', () => {
//     expect(generateText(name, age)).toBe('string')
//   });
// });
