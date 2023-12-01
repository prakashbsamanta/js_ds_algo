function mergeSort(arr) {
  console.log(arr.length);
  let middle = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);

  console.log(arr.length);
  console.log(middle);
  console.log(leftArr);
  console.log(rightArr);
}

let unSortedArr = [3, 5, 6, 8, 9, 72, 62, 13];
mergeSort(unSortedArr);
