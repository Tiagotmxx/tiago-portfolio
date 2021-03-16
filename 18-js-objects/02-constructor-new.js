let user = {
  name: "Tiago",
  age: 27,
};

function createUser(name, age) {
  let user = {
    name,
    age,
  };

  return user;
}

//const admin = createUser("Antony", 38);

//constructer function

function User(name, age) {
  let user = {
    name,
    age,
  };

  return user;
}

const admin = new User("Antony", 38);

console.log(User("kyza219", 28));
console.log(User("sao", 28));
console.log(User("tiago", 28));
