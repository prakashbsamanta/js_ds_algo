/**
 * @description: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 *  it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
@example: Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */

function validPalindrome(string) {
  if (string.length === 0) {
    return true;
  }
  let filteredString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(filteredString);
  //   let middle = Math.floor(filteredString.length / 2);
  let firstPoint = 0;
  let lastPoint = filteredString.length - 1;
  while (firstPoint <= lastPoint) {
    if (filteredString[firstPoint] != filteredString[lastPoint]) {
      return false;
    }
    firstPoint++;
    lastPoint--;
  }
  return true;
}

let string = "A man, a plan, a canal: Panama";
console.log(validPalindrome(string));
