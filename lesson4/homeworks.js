// exercise 1 homework 2
function separateNumber(number) {
  let tempArr = number.toString().split("");
  let resArr = [];
  let count = 0;

  for (let i = tempArr.length - 1; i >= 0; --i) {
    if (count === 3) {
      resArr.unshift(",");
      count = 0;
    }

    resArr.unshift(tempArr[i]);
    count++;
  }
  return resArr.join("");
}

console.log(separateNumber(1241231242325));

// exercise 6 homework 2
function foo(arr) {
  let sumBefore = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] <= sumBefore) {
      return false;
    }
    sumBefore += arr[i];
  }
  return true;
}

console.log(foo([1, 2, 4, 6, 13]));

// exercise 12 homework 2
function foo1(arr) {
  let sumBefore = 0;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    res.push(arr[i] + sumBefore);
    sumBefore += arr[i];
  }
  return res;
}

console.log(foo1([1, 2, 3, 4]));
