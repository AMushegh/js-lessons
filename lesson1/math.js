let number = 1235;

console.log(number % 10);

console.log(Math.trunc(number / 10));

console.log(Math.trunc(6 / 10));

function getNumberInfo(number) {
  let sum = 0;
  let digitCount = 0;

  while (number) {
    sum += number % 10;
    digitCount++;
    number = Math.trunc(number / 10);
  }

  console.log("digits count:", digitCount);
  console.log("digits sum:", sum);
}

getNumberInfo(12345);
