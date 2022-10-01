const SPECIAL_CHARS = ["!", "@", "#", "$", "%", "^", "&", "\\", "*", "(", ")"];

function removeSpecialChars(str) {
  return str
    .split("")
    .filter((el) => !SPECIAL_CHARS.includes(el))
    .join("");
}

console.log(removeSpecialChars("The quick brown fox!"));
