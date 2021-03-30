let arr = [5, 2, 1, -10, 8];

function compareNumbers(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

arr.sort(compareNumbers);

console.log(arr); // 8, 5, 2, 1, -10

/**
 * OR
 * arr.sort((a, b) => b - a);
 * console.log(arr);
 **/
