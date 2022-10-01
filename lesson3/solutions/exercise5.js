function capitalizeWords(arr) {
  return arr.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  });
}

console.log(capitalizeWords(["mavis", "senaida", "letty"]));
