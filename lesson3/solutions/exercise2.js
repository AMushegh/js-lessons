function getUnion(arr1, arr2) {
  let combinedArr = [...arr1, ...arr2];
  return combinedArr.filter((el, index) => {
    return combinedArr.indexOf(el) === index;
  });
}

console.log(getUnion(["a", "b", "c"], ["a", "b", "c", "d"]));
console.log(getUnion(["a", "b", "c"], []));
console.log(getUnion(["a", "b", "c"], [1, 2, 3, 4]));
