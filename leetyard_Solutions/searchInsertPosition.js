/**
 * @description: Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 @example: 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 */

var searchInsert = function (nums, target, first = 0, last = nums.length - 1) {
  let mid = Math.floor((first + last) / 2);
  if (nums[mid] === target) {
    return mid;
  }
  if (target > nums[last]) {
    return last + 1;
  }
  if (target < nums[first]) {
    return first;
  }
  if (nums[mid] > target) {
    return searchInsert(nums, target, first, mid - 1);
  } else if (nums[mid] < target) {
    return searchInsert(nums, target, mid + 1, last);
  }
};

const nums = [2, 3, 5, 6, 8, 9, 10, 11, 23, 35, 45, 54, 57, 58];
const target = 6;

console.log(searchInsert(nums, target));
