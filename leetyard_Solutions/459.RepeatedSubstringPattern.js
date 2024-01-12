/**
 * @description
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 @link https://leetcode.com/problems/repeated-substring-pattern/description/


 @example
Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.
Example 2:

Input: s = "aba"
Output: false
Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 */

function repeatedSubstringPattern(s) {
  let length = s.length;
  let midLen = Math.floor(length / 2);
  let substring = "";

  for (let i = 0; i < midLen; i++) {
    substring += s[i];
    if (length % (i + 1) === 0) {
      let noChar = length / (i + 1);
      let checkString = "";
      for (let j = 0; j < noChar; j++) {
        checkString += substring;
      }
      if (checkString === s) {
        return true;
      }
    }
  }
  return false;
}

let s = "";
console.log(repeatedSubstringPattern(s));
