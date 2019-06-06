// 561. Array Partition I

export const arrayPairSum = nums => {
  return nums
    .sort((a, b) => a - b)
    .filter((x, index) => index % 2 === 0)
    .reduce((a, b) => a + b);
};
