// Function to perform merge sort on an array
function mergeSort(arr) {
  // Base case: if the array has 1 or fewer elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  let middle = Math.floor(arr.length / 2);

  // Split the array into two halves: left and right
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);

  // Recursively perform merge sort on the left and right halves
  let sortedLeftArr = mergeSort(leftArr);
  let sortedRightArr = mergeSort(rightArr);

  // Merge the sorted left and right halves
  return merge(sortedLeftArr, sortedRightArr);
}

// Function to merge two sorted arrays
function merge(leftArr, rightArr) {
  // Result array to store the merged and sorted elements
  let result = [];

  // Indices to track the position in the left and right arrays
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from the left and right arrays and merge them
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    // If the element in the left array is smaller, add it to the result
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      // If the element in the right array is smaller, add it to the result
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate the remaining elements from the left and right arrays
  // (if any) to the result
  return result.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
}

let unSortedArr = [
  1, 56, 12, 54, 63, 8, 58, 2354, 4123, 78, 0, 423, 23, 5, 2, 5, 51, 5, 8,
];
console.log(mergeSort(unSortedArr));
