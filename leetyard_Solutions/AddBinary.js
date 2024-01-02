/**
 * @description: Given two binary strings a and b, return their sum as a binary string.

 @example:

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 
 */

var addBinary = function (a, b) {
  if (!a || !b) return "Not binary";

  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

const a = "1010",
  b = "1011";
console.log(addBinary(a, b));
