function mapLetters(str) {
  let res = {};

  for (let i = 0; i < str.length; i++) {
    if (!res[str[i]]) {
      res[str[i]] = [i];
    } else {
      res[str[i]].push(i);
    }
  }

  console.log(res);
}

mapLetters("dodoread");
