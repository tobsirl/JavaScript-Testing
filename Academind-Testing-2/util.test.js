jest.mock('./http');

const { printTitle, loadTitle } = require('./util');

test('should print an uppercase text', () => {
  loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
  // expect(printTitle()).toBe('DELECTUS AUT AUTEM');
});
