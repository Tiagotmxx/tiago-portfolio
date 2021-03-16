// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(multiplyNumeric(menu));

function multiplyNumeric(obj) {
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === "number") {
      value *= 2;
      obj[key] = value;
    }
  }
  return obj;
}
// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };
