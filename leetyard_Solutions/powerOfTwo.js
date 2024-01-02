/**
 * @description:power of two
 */
function powerOfTwo(n) {
  if (n === 1) {
    return true;
  }
  if (n % 2 != 0) {
    return false;
  }
  if (n === 0) {
    return false;
  }
  return powerOfTwo(n / 2);
}

let num = 68719476736;
console.log(powerOfTwo(num));
