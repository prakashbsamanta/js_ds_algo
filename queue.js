// using array
/** 
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    return this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.isEmpty.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

*/

// using objects

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const items = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return items;
  }

  isEmpty() {
    return this.rare - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rare - this.front;
  }

  print() {
    console.log(this.items);
  }
}

let queue = new Queue();
queue.enqueue(23);
queue.enqueue(27);
queue.enqueue(24);
queue.print();
queue.dequeue();
queue.print();
