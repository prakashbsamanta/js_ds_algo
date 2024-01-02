function permutation(str) {
  let permutationArr = [];

  permute(str);

  return permutationArr;
  function permute(string, prefix = "") {
    if (string.length === 0) {
      permutationArr.push(prefix);
    }
    for (let i = 0; i < string.length; i++) {
      let rem = string.slice(0, i) + string.slice(i + 1);
      permute(rem, prefix + string[i]);
    }
  }
}

let string = "abc";
console.log(permutation(string));
