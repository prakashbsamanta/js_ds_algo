function powerset(str, i, curr) {
  if (i === str.length) {
    return console.log(curr);
  }
  powerset(str, ++i, curr + str[i - 1]);
  powerset(str, i, curr);
}

let str = "abc";
powerset(str, 0, "");
