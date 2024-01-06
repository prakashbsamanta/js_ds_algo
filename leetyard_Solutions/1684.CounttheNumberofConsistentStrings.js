/**
 * @description: You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

@link https://leetcode.com/problems/count-the-number-of-consistent-strings/description/ 

@example
Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 */

function countConsistentStrings(allowed, words) {
  let count = 0;
  const allowedSet = new Set(allowed);
  const m = "qweacrty";
  console.log([...m].some((char) => allowedSet.has(char)));

  // Iterate through each word in the array "words"
  for (let word of words) {
    // Check if every character in the word is in "allowedSet"
    if ([...word].every((char) => allowedSet.has(char))) {
      count++;
    }
  }

  return count; // Return the final count of consistent strings
}

const allowed = "cad",
  words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];

console.log(countConsistentStrings(allowed, words));
