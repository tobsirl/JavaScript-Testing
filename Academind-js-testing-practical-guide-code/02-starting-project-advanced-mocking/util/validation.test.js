import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('should throw an error if an empty string is provided as a value', () => {
  const testInput = '';

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrowError();
});

it('should throw an error if an empty string is provided as a value', () => {
  const testInput = '   ';

  const validationFn = () => validateNotEmpty(testInput);

  expect(validationFn).toThrowError();
});
