import { arrayPairSum, LinkedList } from './LeetCode-Arrays';

test('should return an array', () => {
  const nums = [1, 4, 3, 2];
  expect(arrayPairSum(nums)).toBe(4);
});

const list = new LinkedList();
list.push('One');
list.push('Two');
// let result = list.print();
// console.log(result);

test('should create a LinkedList', () => {
  expect(list.head.value).toBe('One');
  expect(list.tail.value).toBe('Two');
  expect(list.length).toBe(2);
});

// test('should test the method print', () => {
//   expect(list.print()).toBe(['One', 'Two']);
// });

test('should return the value at a given index', () => {
  const list = new LinkedList();
  list.push('One');
  list.push('Two');
  const result = list.get(1)
  expect(result).toBe('Two');
});
