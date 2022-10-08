console.log(-null);

console.log(+"1");
console.log(-"1");

let a = 1;
console.log(a + +1);

console.log(1 && 2 > 0 && true && {});
console.log(-0 || 2 < 0 || false || null);

console.log((1 && 2 && false && true && undefined) || 45);

let arr = [];
arr[5] = 5;
console.log(arr);

console.log(arr[1]);

for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}
