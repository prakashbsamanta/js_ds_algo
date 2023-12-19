/**
 * @description:Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

@example:Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
 */

var reverseWords = function (s) {
  let stringArr = s.split(" ");
  let reverseStrArr = [];
  for (let word of stringArr) {
    let reverseStr = word.split("").reverse().join("");
    // console.log(reverseStr);
    reverseStrArr.push(reverseStr);
  }
  //   console.log(stringArr);
  return reverseStrArr.join(" ");
};
let inputStr = "Let's take LeetCode contest";
console.log(reverseWords(inputStr));
