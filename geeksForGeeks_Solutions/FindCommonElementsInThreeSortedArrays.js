/**
 * @description: Given three Sorted arrays in non-decreasing order, print all common elements in these arrays.

@link https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/


@example: 
Examples: 

Input: 
ar1[] = {1, 5, 10, 20, 40, 80} 
ar2[] = {6, 7, 20, 80, 100} 
ar3[] = {3, 4, 15, 20, 30, 70, 80, 120} 
Output: 20, 80

Input: 
ar1[] = {1, 5, 5} 
ar2[] = {3, 4, 5, 5, 10} 
ar3[] = {5, 5, 10, 20} 
Output: 5, 5
 */

function commonElement(arr1, arr2, arr3) {
  let arr1Index = 0,
    arr2Index = 0,
    arr3Index = 0;
  let result = [];
  while (
    arr1Index < arr1.length &&
    arr2Index < arr2.length &&
    arr3Index < arr3.length
  ) {
    if (
      arr1[arr1Index] === arr2[arr2Index] &&
      arr1[arr1Index] === arr3[arr3Index]
    ) {
      result.push(arr1[arr1Index]);
      arr1Index++;
      arr2Index++;
      arr3Index++;
    } else if (
      arr1[arr1Index] <= arr2[arr2Index] &&
      arr1[arr1Index] <= arr3[arr3Index]
    ) {
      arr1Index++;
    } else if (
      arr2[arr2Index] <= arr1[arr1Index] &&
      arr2[arr2Index] <= arr3[arr3Index]
    ) {
      arr2Index++;
    } else {
      arr3Index++;
    }
  }
  return result;
}

let ar1 = [6, 7, 20, 80, 80, 99, 100];
ar2 = [5, 10, 20, 40, 80, 100];
ar3 = [
  3, 4, 15, 20, 30, 70, 80, 82, 89, 91, 93, 94, 95, 99, 100, 120, 130, 140, 150,
  160, 170, 180,
];

console.log(commonElement(ar1, ar2, ar3));
