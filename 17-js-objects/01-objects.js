let emptyObj = {};

//JSON - javascript object notation

let person = {
  name: "Tiago",
  nickname: "tiagomxx",
  age: 27,
  body: {
    eyes: 2,
    nose: 1,
    mouth: 1,
    arms: 2,
    legs: 2,
  },
  speak: function () {
    console.log("Hello world!");
  },
  //calculator: Math,
};

console.log(person.name);
console.log(person.body);
console.log(person.body.arms);
const personsArms = person.body.arms;

const values = {
  property1: 3,
};

values.property1 = 5;
values.property2 = 3;

delete values.property1;

//CRUD operations
//Create
//Read
//Update
//Delete

//factory function
function createPerson(name, age) {
  return {
    name: name.toUpperCase(),
    age: age,
  };
}

function createPerson(name, age) {
  return { name, age }; //just works if the name of the property key is the same of the property value
}
