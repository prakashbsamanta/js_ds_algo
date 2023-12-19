/**
 * @description:You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
@example: Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 */

function mergeTwoLists(list1, list2) {
  let result = [];
  while (list1.length && list2.length) {
    let pushed = list1[0] < list2[0] ? list1.shift() : list2.shift();
    console.log(pushed);
    result.push(pushed);
    // if (list1[0] < list2[0]) {
    //   result.push(list1[0]);
    //   list1.shift();
    // } else {
    //   result.push(list2[0]);
    //   list2.shift();
    // }
  }
  return result.concat(list1, list2);
}

let list1 = [6, 8, 9];
let list2 = [1, 7, 10];
console.log(mergeTwoLists(list1, list2));
