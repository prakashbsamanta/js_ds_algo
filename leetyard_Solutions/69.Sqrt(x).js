/**
 * @description: Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

@link https://leetcode.com/problems/sqrtx/
@example: Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 */

var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let start = 1;
  let end = x;
  let result = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      start = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }
  return result;
};

let num = 9;
console.log(mySqrt(num));
