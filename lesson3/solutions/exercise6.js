function getPairs(array) {
  let res = [];

  for (let i = 0; i < array.length / 2; i++) {
    res.push([array[i], array[array.length - 1 - i]]);
  }

  return res;
}

console.log(getPairs([1, 2, 3, 4, 5, 6, 7, 8]));
