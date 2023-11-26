function cartesianProduct(arr1, arr2) {
  resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let temp_arr = [arr1[i], arr2[j]];
      resultArr.push(temp_arr);
    }
  }
  return resultArr;
}

let a1 = [4, 6];
let a2 = [6, 7, 9];

console.log(cartesianProduct(a1, a2));
