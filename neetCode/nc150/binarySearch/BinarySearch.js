/**
 * @description:Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

@example:Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 */

function search(nums, target, left = 0, right = nums.length - 1) {
  if (left <= right) {
    let middle = Math.floor(left + right / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] < target) {
      return search(nums, target, middle + 1, right);
    } else {
      return search(nums, target, left, middle - 1);
    }
  }
  return -1;
}

let arr = [-1, 0, 3, 5, 9, 12, 15, 27, 35, 38, 44, 52];
let target = 0;
console.log(search(arr, target));
