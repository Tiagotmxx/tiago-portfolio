let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
console.log(sumSalaries(salaries));
console.log(sumSalaries({}));

function sumSalaries(obj) {
  let sum = 0;

  for (let key in obj) {
    let value = obj[key];
    sum += value;
  }

  return sum;
}
