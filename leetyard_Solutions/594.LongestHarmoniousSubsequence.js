/**
 * @description : We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

 
@link https://leetcode.com/problems/longest-harmonious-subsequence/description/

@example
Example 1:

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Example 2:

Input: nums = [1,2,3,4]
Output: 2
Example 3:

Input: nums = [1,1,1,1]
Output: 0
 */

function findLHS(nums) {
  let frequencymap = {};
  let count = 0;
  for (const num of nums) {
    frequencymap[num] = (frequencymap[num] || 0) + 1;
  }
  console.log(frequencymap);

  for (const key in frequencymap) {
    let otherValue = Number(key) + 1;
    console.log(otherValue);
    if (otherValue in frequencymap) {
      let arrLen = frequencymap[key] + frequencymap[otherValue];
      count = arrLen > count ? arrLen : count;
    }
  }
  return count;
}

const nums = [1, 1, 1, 1, 1, 1];

console.log(findLHS(nums));
