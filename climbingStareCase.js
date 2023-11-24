/**
 * @description: Given a starecase of "n" steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 step at a time.
 */

function starecaseDistinctWays(numberOfSteps) {
  if (numberOfSteps <= 2) {
    return numberOfSteps;
  }

  return (
    starecaseDistinctWays(numberOfSteps - 1) +
    starecaseDistinctWays(numberOfSteps - 2)
  );
}

/**
 * @description: another way
 */
function climbingStareCase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  console.log(noOfWays);
  console.log(noOfWays[n - 1]);
  return noOfWays[n - 1];
}
const numberOfSteps = 2;
console.log(starecaseDistinctWays(numberOfSteps));

console.log(climbingStareCase(numberOfSteps));
