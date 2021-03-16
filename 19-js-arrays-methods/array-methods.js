let arr = ["a", "b", "c"];

for (let i = 0; i < arr.lenght; i++) {
  const item = arr[i];
  console.log(item);
}

for (let item of arr) {
  console.log(item);
}

arr.forEach(function (elem, index, arr) {
  console.log(elem, index, arr);
});

//square arr1 in new array
const arr1 = [1, 2, 3, 4, 5];

let squares = [];
arr1.forEach(function (elem) {
  squares.push(elem * elem);
});
console.log(squares);

const squares = arr1.map(function (item) {
  return item * item;
});
//Or

const square = (item) => item * item;

const squares = arr.map(square);

const isEven = (item) => item % 2 === 0;
const evenNumber = arr.find(isEven);
const evenNumberIndex = arr.findIndex(isEven);
const evenNumbers = arr.filter(isEven);
// let evenNumber = undefined;
// for (let item of arr) {
//   if (isEven(item)) {
//     evenNumver = item;
//     return evenNumber;
//   }
// }

// const filteredArray = [];
// for (let item of arr) {
//   if (isEven(item))
//...}

let arr2 = ['tiagomxx', 'kyza', 'saoferreira', 'jabbataa'];

arr2.sort();// mete por ordem os elementos

let sum = 0;
for (let item of arr) {
  sum = sum + item;
}
console.log(sum);

arr.reduce(function(acc, item, index, arr) {
  return acc + item;
}, 0);

let arr = [5, 2, 87, 4, 6, 3, 9];
arr.sort(); // [2, 3, 4, 5, 6, 87, 9];

arr.sort((a, b) => a - b;
//   {
//   if (a < b) return -1;
//   if a > b) return 1;
//   return 0;
// });


let mappedArr = [];
for (let item of arr) {
  mappedArr.push(square(item));
}
console.log(mappedArr);

const mappedArr = arr.reduce((acc, item) => {
  acc.push(item);
  return acc
}, []);