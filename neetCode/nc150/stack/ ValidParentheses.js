/**
 * @description: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

@example: Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

let isValid = function (s) {
  let balance = 0;
  for (let b of s) {
    let ob = b;
    console.log(ob);
    if (ob === "(" || ob === "[" || ob === "{") {
      balance++;
    } else {
      balance--;
      if (balance < 0) {
        return false;
      }
    }
    console.log(ob + balance);
  }
  return balance === 0;
};
let string = "([][)(}";
console.log(isValid(string));
