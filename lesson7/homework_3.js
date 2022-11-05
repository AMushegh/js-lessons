// ex 3, v1
class Abstract1 {
  constructor() {
    if (new.target) {
      throw new Error("abstract class can't be called by new");
    }
  }
}

// ex 3, v2
class Abstract2 {
  constructor() {
    if (this.constructor === Abstract) {
      throw new Error("class is abstract");
    }
  }
}
