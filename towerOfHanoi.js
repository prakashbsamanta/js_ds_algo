/**
 * @description: The Tower of Hanoi is a classic problem in computer science and mathematics. It involves three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:

- Only one disk can be moved at a time.
- Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
- No disk may be placed on top of a smaller disk.
 */

function towerOfHanoi(noOfDisks, fromRod, toRod, auxRod) {
  if (noOfDisks === 1) {
    console.log(`Move disk ${noOfDisks} from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(noOfDisks - 1, fromRod, auxRod, toRod);
  console.log(`Move ${noOfDisks} from ${fromRod} to ${toRod}`);
  towerOfHanoi(noOfDisks - 1, auxRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");
