/**
 *  @description: Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 * @link: https://leetcode.com/problems/number-of-1-bits/description/?envType=daily-question&envId=2023-11-29
 * @solution: https://www.youtube.com/watch?v=5Km3utixwZs
 */
var hammingWeight = function (n) {
  count = 0;
  while (n !== 0) {
    count += n % 2;
    n = Math.floor(n / 2);
  }
  return count;
};

let input = 11111111111111111111111111111101;
console.log(hammingWeight(input));
