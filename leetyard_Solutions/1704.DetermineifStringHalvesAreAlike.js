/**
 * @description: You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

 @link https://leetcode.com/problems/determine-if-string-halves-are-alike/description/

@example
Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
 */

function halvesAreAlike(s) {
  let mid = s.length / 2;
  let leftString = s.substring(0, mid);
  let rightString = s.substring(mid, s.length);

  const lCount = vowelsCount(leftString);
  const rCount = vowelsCount(rightString);
  return lCount === rCount;
}

function vowelsCount(str) {
  let vCount = 0;
  let vArray = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vArray.includes(char)) {
      vCount++;
    }
  }
  return vCount;
}

const s = "textbxOk";
console.log(halvesAreAlike(s));
