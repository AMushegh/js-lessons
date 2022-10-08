function reverseWithPop(arr) {
  let res = [];
  let length = arr.length;
  for (let i = 0; i < length; ++i) {
    res.push(arr.pop());
  }
  return res;
}

console.log(reverseWithPop([1, 2, 3, 4]));

function checkPolindrome(str) {
  let reversed = reverseWithPop(str.split(""));
  return str === reversed.join("");
}

console.log(checkPolindrome("1234321"));

function myPop() {
  let returnedVal = this[this.length - 1];
  this.length -= 1;
  return returnedVal;
}

Array.prototype.myPop = myPop;

let arrForTest = [1, 2, 3];
console.log(arrForTest.myPop());
console.log(arrForTest);
