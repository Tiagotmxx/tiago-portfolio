console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));
/**
 *
 * Iterative solution
 */
// function sumTo(n) {
//   let sum = n;
//   for (let i = n - 1; i > 0; i--) {
//     sum += i;
//   }
//   return sum;
// }

/**Recursive solution */

// function sumTo(n) {
//   if (n === 1) {
//     return n;
//   }

//   return n + sumTo(n - 1);
// }

/**Arithmetic progression solution */

function sumTo(n) {
  return ((n + 1) * n) / 2;
}
