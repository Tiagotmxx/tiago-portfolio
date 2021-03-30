const memoizedFunction = memoize(factorial);

console.log(recursiveFactorial(5));
console.log(recursiveFactorial(6));

// CORRIGIR CODIGOfunction memoize(func) {
//   let cache = {};

//   return function recursiveFactorial(num) {
//     if (num === 1) {
//       return num;
//     }

//     let factorial = cache[num];
//     if (factorial != null) {
//       return factorial;
//     }

//     factorial = num * recursiveFactorial(num - 1);
//     cache[num] = factorial;
//     return factorial;
//   };
// }
