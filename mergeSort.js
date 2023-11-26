/**
 *
 * @description: Sort an Unsorted array using merge sort
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(sortedLeft, sortedRight) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
      result.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      result.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(
    sortedLeft.slice(leftIndex),
    sortedRight.slice(rightIndex)
  );
}

// Example usage:
const unsortedArray = [
  1, 56, 12, 54, 63, 8, 58, 2354, 4123, 78, 0, 423, 23, 5, 2, 5, 51, 5, 8,
];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
