/**
 * @description Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

@link https://leetcode.com/problems/reverse-vowels-of-a-string/description/ 

@example
Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 */

function reverseVowels(s) {
  let vArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  s = s.split("");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (vArr.includes(s[left]) && vArr.includes(s[right])) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
    if (!vArr.includes(s[left])) {
      left++;
      continue;
    }
    if (!vArr.includes(s[right])) {
      right--;
      continue;
    }
  }
  return s.join("");
}

let s = "leetcode";
console.log(reverseVowels(s));
