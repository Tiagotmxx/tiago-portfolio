let x = 2;
let y = 3;

console.log(x, y); //2, 3
incrementAndSum(x, y); //7
console.log(x, y); //2, 3

function incrementAndSum(a, b) {
  a++;
  b++;
  return a + b;
}

let person = { age: 38 };
let firstName = "Tiago";

console.log(person); // '[object Object]'
console.log(JSON.stringify(person)); //'{"age": 38}'

const NewPerson = setName(person, firstName);

console.log(JSON.stringify(newPerson));
console.log(JSON.stringify(person));

function setName(obj, name) {
  obj.name = name;
  return obj;
}
