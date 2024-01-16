/**
 * @description: Reverse a string preserving space positions

Write a program to reverse the given string while preserving the position of spaces.

@link https://www.geeksforgeeks.org/reverse-string-preserving-space-positions/

@example
 Input  : "abc de"
Output : edc ba

Input : "intern at geeks"
Output : skeegt an retni

Input : "Help others"
Output : sreh topleH
 */

function reverseString(str) {
  let strArr = str.split("");
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (strArr[start] !== " " && strArr[end] !== " ") {
      [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
      start++;
      end--;
    } else if (strArr[start] === " ") {
      start++;
    } else if (strArr[end] === " ") {
      end--;
    }
  }
  return strArr.join("");
}

const string = "intern at geeks";
console.log(reverseString(string));
