//REVER ESTE FICHEIRO
let user = { name: "Antony", age: 38 };
let anotherUser = { name: "Angelo", age: 28 };

//factory function
function createUser(name, age) {
  const user = {};
  user.name = name;
  user.age = age;
  return user;
}

function User(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

letyetAnotherUser = new User("Bobby", 30);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //person.speak
  speak() {
    console.log("hi, my name is", this.name);
  }
}
