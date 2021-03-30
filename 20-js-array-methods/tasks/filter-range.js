let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
  return arr.filter((i) => i >= a && i <= b);
}

// alert(filtered); // 3,1 (matching values)

// alert(arr); // 5,3,8,1 (not modified)

console.log(filtered);
console.log(arr);
