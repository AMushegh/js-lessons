function getFirstElements(arr, index) {
  const res = [];
  let length = arr.length > index ? index : arr.length;
  for (let i = 0; i < length; ++i) {
    res.push(arr[i]);
  }
  return res;
}

console.log(getFirstElements([1, 2, 3], 7));
