const milk = { color: "white", quantity: 1 };

shallowClone(milk);

const user = {
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
};
shallowClone(user);

function shallowClone(obj) {
  const clone = Object.assign({}, obj);

  console.log(clone !== obj);
  // console.log(clone.color === obj.color);
  // console.log(clone.quantity === obj.quantity);

  for (let key in clone) {
    console.log(clone[key] === obj[key]);
  }

  console.log(JSON.stringify(clone) === JSON.stringify(obj));
}
