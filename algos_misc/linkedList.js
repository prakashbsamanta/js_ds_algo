class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.header = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      Node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    let removedValue;
    if (this.head.value === value) {
      this.head = this.head.next;
      size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedValue = prev.next;
        prev.next = removedValue.next;
        size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    } else {
      let curr = this.head;
      let index = 0;
      while (curr) {
        if (curr.value === value) {
          return index;
        }
        curr = curr.next;
        index++;
      }
      return -1;
    }
  }
  reverse() {
    if (this.isEmpty()) {
      return null;
    } else {
      let prev = null;
      let curr = this.head;
      let next = curr.next;
      while (curr) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr.next;
      }
      this.head = prev;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValue = "";
      while (curr) {
        listValue += `${curr.value}`;
        curr = curr.next;
      }
      console.log(listValue);
    }
  }
}

const list = new LinkedList();
list.print();

list.prepend(2);
list.print();

list.prepend(3);
list.prepend(5);
list.print();
// console.log(list.getSize());
