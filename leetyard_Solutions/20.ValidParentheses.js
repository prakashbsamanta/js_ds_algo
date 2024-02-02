/**
 *  
 *@description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
@link: https://leetcode.com/problems/valid-parentheses/description/

@example
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let balance = 0;
  for (let bracket of s) {
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      balance++;
    } else {
      balance--;
      if (balance < 0) {
        return false;
      }
    }
  }
  return balance === 0;
};

let s = "{{{}}}}}}}}}}}}";
console.log(isValid(s));
