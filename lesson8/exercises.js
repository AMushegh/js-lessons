// ex 1
function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

// ex 2
function indexOfArr(arr, el) {
  if (!arr.length) {
    return -1;
  }
  if (arr[0] === el) {
    return 0;
  }
  return indexOfArr(arr.slice(1), el) + 1 || -1;
}

indexOfArr([1, 2, 3, 4], 3);
//[1,2,3,4], 3 --> 2
//[2,3,4], 3 --> 1
//[3,4], 3 --> 0

indexOfArr([1, 2, 3, 4], 5);
//[1,2,3,4], 5 --> -1
//[2,3,4], 5 --> -1
//[3,4], 5 --> -1
//[4], 5 --> -1
//[], 5 --> -1

function getIndexArr2(arr, el, i = 0) {
  if (i >= arr.length) {
    return -1;
  }
  if (arr[i] === el) {
    return i;
  }
  return getIndexArr2(arr, el, i + 1);
}

function getIndex(arr, num) {
  if (arr[arr.length - 1] === num) {
    return arr.length - 1;
  } else if (arr.length - 1 !== 0) {
    arr.pop();
  } else {
    return -1;
  }
  return getIndex(arr, num);
}

/*
 * solution for exercise 3
 */
function countOfNumbers(arr) {
  let count = 0;
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      count += countOfNumbers(element);
    } else {
      count++;
    }
  });
  return count;
}

/*
 * as same as Array.prototype.flat
 */
const recursiveFlat = (arr) => {
  let flattenArray = [];
  arr.forEach((item) =>
    Array.isArray(item)
      ? flattenArray.push(...recursiveFlat(item))
      : flattenArray.push(item)
  );
  return flattenArray;
};

/*
 * second solution for exercise 3
 */
const getFlatLength = (arr) => {
  return recursiveFlat(arr).length;
};

/*
 * solution for exercise 4
 */

function getTwoLengthChunks(str) {
  let chunks = [];
  for (let i = 0; i < str.length; i += 2) {
    chunks.push(str.substring(i, i + 2));
  }
  return chunks;
}

function generateDescendant(number) {
  return +getTwoLengthChunks(String(number))
    .map((el) => {
      if (el.length === 2) {
        return +el[0] + +el[1];
      }
      return +el;
    })
    .join("");
}

function palindromeDescendant(number) {
  if (+String(number).split("").reverse().join("") === number) {
    return true;
  }

  return palindromeDescendant(generateDescendant(number));
}

console.log(palindromeDescendant(11211230));
