const { generateText } = require('./util');

test('should ouput name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29) years old');
});
// describe('generateText', () => {
//   it('should', () => {
//     expect(generateText(name, age)).toBe('string')
//   });
// });
