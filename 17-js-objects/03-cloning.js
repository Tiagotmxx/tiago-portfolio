//Not a clone, we are creating a new reference to the same object

const obj1 = { name: "Antony" };
const obj2 = obj1;

//Not a clone, they are similar objects

const obj1 = { name: "Antony" };
const obj2 = { name: "Antony" };

function clone(obj) {
  const clonedObject = {};
  for (let key in obj) {
    clonedObject[key] = obj[key];
  }
  return clonedObject;
}

const objectToClone = { name: "Tiago", age: 27, hungry: true };
const clonedObject = clone(objectToClone);

console.log(objectToClone, clonedObject);
console.log(objectToClone === clonedObject); //false
