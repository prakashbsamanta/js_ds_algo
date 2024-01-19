/**
 * @description Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

@link https://leetcode.com/problems/rotate-string/description/


@example
Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 */
function rotateStr(s, goal) {
  if (s.length !== goal.length) return false;

  let goalSet = s;
  for (let i = 0; i < s.length; i++) {
    goalSet = goalSet.slice(1) + goalSet[0];
    if (goalSet === goal) return true;
  }
  return false;
}
const s = "abcde",
  goal = "cdeab";

console.log(rotateStr(s, goal));
