export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue(item) {
    return this.item.shift(); // remove from start of the list which is the head of the array
  }

  peek(item) {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
