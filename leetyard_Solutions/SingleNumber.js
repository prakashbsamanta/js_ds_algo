/**
 * @description: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 @example: 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 */

var singleNumber = function (nums) {
  if (!nums) return null;

  let uniqueValue = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (uniqueValue.has(nums[i])) {
      uniqueValue.delete(nums[i]);
    } else {
      uniqueValue.add(nums[i]);
    }
  }
  return [...uniqueValue][0];
};

const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));
