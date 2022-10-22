function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayGoodbye = function () {
    console.log(this.name + " goodbye");
  };
}

Person.prototype.sayHi = function () {
  console.log(this.name + " hi");
};

let p1 = new Person("Karen", 20);
let p2 = new Person("Levon", 24);

console.log(p1.sayHi === p2.sayHi); // -> true
console.log(p1.sayGoodbye === p2.sayGoodbye); // -> false

const a = "aaa";

console.log(a.toUpperCase());

console.log(String.__proto__ === Function.prototype);
