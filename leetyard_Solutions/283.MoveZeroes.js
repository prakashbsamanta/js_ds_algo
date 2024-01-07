/**
 * @description:
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

@link https://leetcode.com/problems/move-zeroes/description/
  
@example
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

function moveZeros(nums) {
  let numIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[numIndex], nums[i]] = [nums[i], nums[numIndex]];
      numIndex++;
    }
  }
  return nums;
}

const arr = [1, 0, 1, 0, 0, 3, 12];
console.log(moveZeros(arr));
