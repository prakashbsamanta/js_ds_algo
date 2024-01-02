/**
 * @description:Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

@link https://leetcode.com/problems/majority-element/description/ 

@example:
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

// var majorityElement = function (nums) {
//   let sortedNums = nums.sort();
//   return sortedNums[Math.floor(nums.length / 2)];
// };

//  Alternate solution:
// var majorityElement = function (nums) {
//   let maxLen = Math.floor(nums.length / 2);
//   console.log(maxLen);
//   let elementFrequency = {};
//   for (let num of nums) {
//     if (elementFrequency.hasOwnProperty(num)) {
//       elementFrequency[num]++;
//     } else {
//       elementFrequency[num] = 1;
//     }
//   }
//   for (let num in elementFrequency) {
//     if (elementFrequency[num] >= maxLen) {
//       console.log();
//       return num;
//     }
//   }
//   return null;
// };

// Moore's voting Algorithm

function majorityElement(nums) {
  let count = 0;
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i];
    }
    if (nums[i] === result) {
      count++;
    } else {
      count--;
    }
  }
  return result;
}

let nums = [1, 2, 3, 4, 2, 2, 4, 2, 2];
console.log(majorityElement(nums));
