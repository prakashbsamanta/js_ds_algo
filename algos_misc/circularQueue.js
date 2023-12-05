class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front++;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const element = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front - 1) % this.capacity;
    this.currentLength--;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return element;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  size() {
    return this.currentLength;
  }
  //   print() {
  //     if (!this.isEmpty()) {
  //       let str = "";
  //       for (let i = this.front; i <= this.rear; i++) {
  //         if (i === this.rear) {
  //           str += this.items[i];
  //         } else {
  //           str += this.items[i] + ",";
  //         }
  //       }
  //       console.log(str);
  //     } else {
  //       console.log("queue is empty");
  //     }
  //   }
  print() {
    if (this.isEmpty()) {
      console.log("queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

let queue = new CircularQueue(5);
queue.enqueue(23);
queue.enqueue(27);
queue.enqueue(24);
queue.enqueue(54);
queue.enqueue(93);
queue.dequeue();
// queue.enqueue(83);
queue.print();
// console.log(queue.peek());
// queue.dequeue();
// queue.print();
