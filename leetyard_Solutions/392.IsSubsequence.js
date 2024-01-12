/**
 * @description Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

@link https://leetcode.com/problems/is-subsequence/description/

 @example

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 */

function isSubsequence(s, t) {
  if (s === "") return true;

  for (let char of t) {
    if (char === s[0]) {
      s = s.substring(1);
    }
  }
  return s ? false : true;
}

// Another way

function isSubsequence2(s, t) {
  if (s === "") return true;

  let sPointer = 0;
  let tPointer = 0;

  while (tPointer < t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
      if (sPointer >= s.length) {
        return true;
      }
    }
    tPointer++;
  }
  return false;
}

const s = "acb",
  t = "ahbgdc";
console.log(isSubsequence2(s, t));
