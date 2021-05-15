let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

users.sort(byField("name"));
users.sort(byField("age"));

function byField(field) {
  return (a, b) => a(a[field] > b[field] ? 1 : -1);
}

// //currying
// function sum(a, b) {
//   return a + b;
// }

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
