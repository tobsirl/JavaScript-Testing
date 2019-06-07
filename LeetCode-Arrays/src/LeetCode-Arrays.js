// 561. Array Partition I

export const arrayPairSum = nums => {
  return nums
    .sort((a, b) => a - b)
    .filter((x, index) => index % 2 === 0)
    .reduce((a, b) => a + b);
};

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    let array = [];
    let current;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    console.log(array);
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      counter++;
      current = current.next;
    }
    return current;
  }
}
