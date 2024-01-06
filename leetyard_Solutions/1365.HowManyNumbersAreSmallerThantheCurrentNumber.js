/**
 * @description:
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

 @link: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

@example
Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
 */

// Bture force Approach

// function smallerNumberThanCurrent(nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         count++;
//       }
//     }
//     result.push(count);
//   }
//   return result;
// }

function smallerNumberThanCurrent(nums) {
  let sortArray = [...nums].sort((a, b) => {
    return b - a;
  });
  console.log(sortArray);

  const countMap = {};
  for (let i = 0; i < sortArray.length; i++) {
    if (!(sortArray[i] in countMap)) {
      countMap[sortArray[i]] = i;
    }
  }
  console.log(countMap);
  const result = nums.map((num) => countMap[num]);
  return result;
}

const arg = [6, 5, 4, 4, 4, 8];
console.log(smallerNumberThanCurrent(arg));
