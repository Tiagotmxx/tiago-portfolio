const user = {
  name: "Tiago",
  age: 27,
  walk() {
    console.log("left foot, right foot");
  },
};

user.speak = speak;

user.speak();

function speak() {
  console.log(`Hi, my name is ${user.name}!`);
}
