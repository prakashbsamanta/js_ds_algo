/**
 * @description: Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

@example: Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 */

var findWords = function (words) {
  result = [];
  for (let word of words) {
    if (matchedWords(word)) {
      result.push(word);
    }
  }
  return result;
};

function matchedWords(str) {
  const keyboardKeys = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const lowerCaseWord = str.toLowerCase();
  let firstChar = lowerCaseWord[0];
  for (let rows of keyboardKeys) {
    if (rows.includes(firstChar)) {
      for (let char of lowerCaseWord) {
        matched = true;
        if (!rows.includes(char)) {
          matched = false;
          break;
        }
      }
      if (matched) {
        return true;
      }
    }
  }
  return false;
}

let words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));
