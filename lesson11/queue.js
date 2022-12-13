class Queue {
  storage = [];

  show() {
    console.log(this.storage);
  }

  enqueue(value) {
    this.storage.unshift(value);
  }

  dequeue() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return !!this.storage.length;
  }
}

const queue = new Queue();

queue.show();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.show();
queue.dequeue();
queue.dequeue();
queue.show();
