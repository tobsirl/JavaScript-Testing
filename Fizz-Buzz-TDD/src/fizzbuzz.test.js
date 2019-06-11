import { FizzBuzz } from './fizzbuzz';

describe('FizzBuzz', () => {
  it(`should return "FizzBuzz" when the number is evenly 
  divisible by 15, "Fizz" when its evenly divisible by 3 and
   "Buzz" when it's evenly divisable by 5`, () => {
    expect(FizzBuzz(1)).toBe(1);
    expect(FizzBuzz(3)).toBe('Fizz');
    expect(FizzBuzz(5)).toBe('Buzz');
    expect(FizzBuzz(7)).toBe(7);
    expect(FizzBuzz(15)).toBe('FizzBuzz');
    expect(FizzBuzz(30)).toBe('FizzBuzz');
    expect(FizzBuzz(33)).toBe('Fizz');
  });
});
