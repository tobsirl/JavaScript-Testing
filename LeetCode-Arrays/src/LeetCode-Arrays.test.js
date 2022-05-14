import { LinkedList, Node} from './LeetCode-Arrays';
jest.mock('./LeetCode-Arrays');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  LinkedList.mockClear();
});

// test('should return an array', () => {
//   const nums = [1, 4, 3, 2];
//   expect(arrayPairSum(nums)).toBe(4);
// });

// const list = new LinkedList();
// list.push('One');
// list.push('Two');
// let result = list.print();
// console.log(result);

it('We can check if the consumer called the class constructor', () => {
  const list = new LinkedList();
  expect(list.push('One')).toBe('One');
});

test('should create a LinkedList', () => {
  const list = new LinkedList();
  list.push('One');
  list.push('Two')
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
  const result = list.get(1);
  expect(result).toBe('Two');
});
