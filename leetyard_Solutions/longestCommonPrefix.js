var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j][i] || strs[0][i] !== strs[j][i]) {
        return commonPrefix;
      }
    }
    commonPrefix += strs[0][i];
  }
  return commonPrefix;
};

let strs = [""];

console.log(longestCommonPrefix(strs));
