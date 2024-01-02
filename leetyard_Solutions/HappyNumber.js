/**
 * @description:
 * Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 
@example
Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 */

// var isHappy = function (n) {
//   if (n <= 9) {
//     return n === 1 || n === 7 ? true : false;
//   }
//   const numArr = n.toString().split("").map(Number);
//   let newNum = 0;
//   numArr.map((n) => {
//     newNum = newNum + n * n;
//   });
//   console.log(newNum);
//   return isHappy(newNum);
// };

/**
 * 
 * 
 var isHappy = function (n) {
  let seen = new Set();
  let tempNum = n;
  n = 0;
  console.log(seen);
  console.log(n);
  while (n !== 1) {
    console.log(n);
    console.log(seen);
    const numArr = tempNum.toString().split("").map(Number);
    console.log(numArr);
    tempNum = numArr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue ** 2;
    }, 0);
    console.log(tempNum);
    n = tempNum;
    if (seen.has(n)) {
      return false;
    } else {
      seen.add(n);
    }
    console.log(n);
    console.log(seen);
  }
  return n === 1 ? true : false;
};
 */

var isHappy = function (n) {
  let seen = new Set();

  const getSumOfSquares = (num) => {
    return num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + digit ** 2, 0);
  };
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getSumOfSquares(n);
  }
  return n === 1;
};
let n = 2;
console.log(isHappy(n));
