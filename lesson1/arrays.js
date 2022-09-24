const arr = [];

arr.push(1); // [1]
arr.push(2); // [1,2]
arr.push(3); // [1,2,3]
arr.unshift(0); // [0,1,2,3]
arr.unshift(-1); // [-1,0,1,2,3]
arr.unshift(-2); // [-2,-1,0,1,2,3]
// arr.pop(); // [-2,-1,0,1,2]
// arr.shift(); // [-1,0,1,2]

// console.log(arr);

// console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

// console.log("*****");

for (let i = arr.length - 1; i >= 0; i--) {
  //   console.log(arr[i]);
}

function getArrayLength(array) {
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    length += 1;
  }
  return length;
}

// console.log("length", getArrayLength(arr));

// exercise 1
// get the sum of all elements of the array

// exercise 2
// get the maximum element of the array

function getElementsSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function getMax(array) {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

console.log(arr);
console.log(getMax(arr));
