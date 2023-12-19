/**
 * @description Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

@example: Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

function twoSum(nums, target) {
  let obj = new Object();
  if (nums.length === 0) {
    return "Array empty";
  }
  let arrLen = nums.length;
  for (let i = 0; i < arrLen; i++) {
    let compliment = target - nums[i];
    if (compliment in obj) {
      return [obj[compliment], i];
    }
    obj[nums[i]] = i;
  }
  return "Target not found";
}

let arr1 = [42, 15, 87, 3, 66, 91, 29, 55, 78, 10];
let tar = 13;
console.log(twoSum(arr1, tar));
