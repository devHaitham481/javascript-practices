// stack is a linear data structure following LIFO order of operations.

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
