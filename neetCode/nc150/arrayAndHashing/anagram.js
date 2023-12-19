// function isAnagram(s, t) {
//   if (s.length === t.length) {
//     let sortedS = s.split("").sort().join("");
//     let sortedt = t.split("").sort().join("");
//     return sortedS === sortedt ? true : false;
//   }
//   return false;
// }
let a = "anagram";
let b = "nagarma";
// console.log(isAnagram(a, b));

function anagramTwo(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let frequencyMapS = {};
  let frequencyMapT = {};

  for (let char of s) {
    frequencyMapS[char] = (frequencyMapS[char] || 0) + 1;
  }
  for (let char of t) {
    frequencyMapT[char] = (frequencyMapT[char] || 0) + 1;
  }
  console.log(frequencyMapS);
  console.log(frequencyMapT);

  const sortObjS = Object.keys(frequencyMapS).sort();
  const sortObjT = Object.keys(frequencyMapT).sort();
  console.log(sortObjS);

  for (let key in frequencyMapS) {
    if (frequencyMapS[key] !== frequencyMapT[key]) {
      return false;
    }
  }
  return true;
}

console.log(anagramTwo(a, b));
