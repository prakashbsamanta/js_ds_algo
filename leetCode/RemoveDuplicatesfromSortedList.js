/**
 * @description: Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
 * Return the linked list sorted as well.
 * @example:
 * 
 * Example 1:
Input: head = [1,1,2]
Output: [1,2]


Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;
  let current = head;
  while (current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

const head = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
);

console.log(deleteDuplicates(head));
