/**
 * @description Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 @link https://leetcode.com/problems/backspace-string-compare/description/

@example
Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 */

function backspaceCompare(s, t) {
  s = removeBacksapace(s);
  t = removeBacksapace(t);
  return s === t;
}

function removeBacksapace(s) {
  let result = [];
  for (const char of s) {
    if (char === "#") {
      result.pop();
    } else {
      result.push(char);
    }
  }
  return result.join("");
}
const s = "a##c",
  t = "b";
console.log(backspaceCompare(s, t));
