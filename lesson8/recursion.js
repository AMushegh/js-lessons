function factorialIterative(n) {
  let res = 1;

  for (let index = n; index > 0; index--) {
    res *= index;
  }

  return res;
}

console.log(factorialIterative(3));

function factorialDeclarative(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorialDeclarative(n - 1);
}

console.log(factorialDeclarative(3));
