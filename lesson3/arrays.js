// exercise 1
let arr1 = [1, 2, 3];
let arr2 = new Array(2); //[undefined, undefined]
let arr3 = new Array(2, 3, 4); // [2,3,4]

let type = typeof arr1; // type = object

console.log(Array.isArray(arr1)); // true

// referance type
let a = [1, 2];
let b = a;
b.push(3);
console.log("a: ", a); // [1,2,3]

console.log(a === b);
console.log(a === [1, 2, 3]);

// array interactions

console.log(a[0]);
for (let i = 0; i < a.length; ++i) {
  console.log(a[i]);
}

console.log("\n");

for (let el in a) {
  console.log(el);
}

//____
const arr4 = [];
arr4.push(3);

// spread

const arr5 = [...arr3];
console.log("arr5: ", arr5);
console.log(arr3, arr5, arr3 === arr5);
