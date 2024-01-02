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

var majorityElement = function (nums) {
  let sortedNums = nums.sort();
  return sortedNums[Math.floor(nums.length / 2)];
};

let nums = [1, 2, 3, 4, 4, 4, 5, 5, 2, 2, 2, 2, 2];
console.log(majorityElement(nums));
