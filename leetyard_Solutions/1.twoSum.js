/**
 * @description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 *
 * @link: https://leetcode.com/problems/two-sum/
 */

let twoSum = function (nums, target) {
  // Step 1: Create an empty object to store numbers and their indices
  let numsObj = {};

  // Step 2: Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Step 3: Calculate the complement needed to reach the target sum
    let complement = target - nums[i];

    // Step 4: Check if the complement is in the numsObj (hash map)
    if (complement in numsObj) {
      // Step 5: If found, return the indices of the two numbers
      return [i, numsObj[complement]];
    }

    // Step 6: If not found, store the current number and its index in the numsObj
    numsObj[nums[i]] = i;
  }

  // Step 7: If no solution is found, return a message or handle it as needed
  return "not found";
};

let arr = [4, 5, 0, 84, 7, 9, 1, 0, 7, 3];
//
let tg = 10;
console.log(twoSum(arr, tg));
