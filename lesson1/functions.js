function addNumbes(num1, num2) {
  return num1 + num2;
}

function printMessage(message) {
  console.log(message + "\n");
}

console.log(addNumbes(1, 4));

let numbersSum = addNumbes(3, 4);
let guessTheValue = printMessage("message");

console.log(numbersSum, guessTheValue);

console.log("checking console.log", printMessage("message"));

printMessage("some text");

function foo() {
  console.log("working function foo");
  return;
}

let fooValue = foo();

console.log("fooValue", fooValue);
