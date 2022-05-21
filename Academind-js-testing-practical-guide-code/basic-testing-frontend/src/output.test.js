import { it, expect, describe } from 'vitest';
import { generateResultText } from './output';

describe('generateResultText', () => {
  it('should return a string, no matter which value is passed in', () => {
    const inputNumber = 1;
    const inputString = 'invalid';
    const inputBool = false;

    const result1 = generateResultText(inputNumber);
    const result2 = generateResultText(inputString);
    const result3 = generateResultText(inputBool);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });
});
