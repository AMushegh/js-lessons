let a = 1 + 1 + "1" + 2 + 2343;

console.log(a);

// Even Odd numbers
console.log(9 % 2);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;

  // return number % 2 === 0
}

function printEvenNumbers(numbersArr) {
  console.log("\nworking printEvenNumbers function");
  for (let index = 0; index < numbersArr.length; index++) {
    if (isEven(numbersArr[index])) {
      console.log(numbersArr[index]);
    }
  }
}

printEvenNumbers([1, 2, 3, 4, 5, 6]);
