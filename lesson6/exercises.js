// ex-1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(personObj) {
    return `${personObj.name} is ${
      this.age > personObj.age
        ? "younger than"
        : this.age < personObj.age
        ? "older than"
        : "as the same age"
    } me`;
  }
}

p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));

// ex-2

class User {
  static userCount = 0;

  constructor() {
    User.userCount++;
  }
}

console.log(User.userCount);

u1 = new User("johnsmith10");

console.log(User.userCount);

u2 = new User("marysue1989");

u3 = new User("milan_rodrick");

console.log(User.userCount);
