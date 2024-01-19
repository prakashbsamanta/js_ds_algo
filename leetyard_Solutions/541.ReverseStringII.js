/**
 * @description Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 @link https://leetcode.com/problems/reverse-string-ii/description/

@example
Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 */

function reverseStr(str, k) {
  let strArr = str.split("");
  let one = 0;
  let two = k - 1;
  let three = k - 1;
  if (str.length < k) {
    strArr = revStr(strArr, one, two);
    return strArr.join("");
  }
  while (one < str.length) {
    strArr = revStr(strArr, one, two);
    three = three + 2 * k;
    one = three - k + 1;
    two = three;
  }
  return strArr.join("");
}

function revStr(strArr, one, two) {
  while (one < two) {
    [strArr[one], strArr[two]] = [strArr[two], strArr[one]];
    one++;
    two--;
  }
  return strArr;
}

const s = "abcdefg";
const k = 8;
console.log(reverseStr(s, k));
