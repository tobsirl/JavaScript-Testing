import { it, expect } from 'vitest';
import { transformToNumber } from './numbers.js';

it('should transform a string number to type number', () => {
  const input = '1';

  const result = transformToNumber(input);

  expect(result).toBeTypeOf('number');
});
