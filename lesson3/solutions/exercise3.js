function removeDuplicates(arr) {
  return arr.filter((el, index) => {
    return arr.indexOf(el) === index;
  });
}

console.log(removeDuplicates([1, 0, 1, 0]));
