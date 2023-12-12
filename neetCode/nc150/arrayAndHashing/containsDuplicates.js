/**
 * @description Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * @link https://leetcode.com/problems/contains-duplicate/description/
 */
function containsDupsUsingObj(nums) {
  let obj = {};
  if (nums.length === 0) {
    return false;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (Object.values(obj).includes(nums[i])) {
        return true;
      } else {
        obj[i] = nums[i];
      }
    }
  }
  return false;
}

/**
 * @description In JavaScript, a Set is a built-in object that allows you to store unique values of any type, whether primitive values or object references.
 */
function containDupsUsingSets(nums) {
  let arrSet = new Set();
  for (num of nums) {
    if (arrSet.has(num)) {
      console.log(arrSet);

      return true;
    } else {
      arrSet.add(num);
    }
  }
  console.log(arrSet);
  return false;
}

let arr = [1, 2, 4, 3, 2, 1, 56, 67, 8, 2, 1];
// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 0];
console.log(containDupsUsingSets(arr));
