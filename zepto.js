function alphaCount(str) {
  count = 0;
  result = "";
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i + 1]) {
      result += str[i] + count;
      count = 0;
    }
  }
  return result;
}

string = "aaabbbbccddddeeed";

console.log(alphaCount(string));
