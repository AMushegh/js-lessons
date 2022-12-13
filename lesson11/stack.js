class Stack {
  storage = [];

  show() {
    console.log(this.storage);
  }

  push(value) {
    this.storage.push(value);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return !this.storage.length;
  }
}

const isValid = (str) => {
  const stack = new Stack();
  for (let i of str) {
    if (i === "[" || i === "{" || i === "(") {
      stack.push(i);
    } else if (
      (stack.peek() === "{" && i === "}") ||
      (stack.peek() === "[" && i === "]") ||
      (stack.peek() === "(" && i === ")")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.isEmpty();
};

console.log(isValid("((())){](())"));
