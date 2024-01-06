/**
 * @description:
 */

function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(sl, sr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < sl.length && rightIndex < sr.length) {
    if (sl[leftIndex] < sr[rightIndex]) {
      result.push(sl[leftIndex]);
      leftIndex++;
    } else {
      result.push(sr[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(sl.slice(leftIndex), sr.slice(rightIndex));
}

const arr = [1, 6, 2, 7, 3, 8, 2, 5, 3, 8, 9, 0, 8, 6, 3, 2, 2];
console.log(mergeSort(arr));
