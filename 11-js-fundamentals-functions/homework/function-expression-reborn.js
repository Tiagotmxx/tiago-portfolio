//Function declaration
function makeMeASandwich(ingredients) {
  console.log(ingredients);
}

makeMeASandwich("avocado, salmon, cream cheese");

//Function expression

const makeMeASandwich = function (ingredients) {
  console.log(ingredients);
};

makeMeASandwich("tomato. mozzarella, basil");

//Arrow function

const sum = (x, y) => x + y;

const square = (x) => x * x;

const square = (x) => {
  return x * x;
};

const square = function (x) {
  return x * x;
};

function square(x) {
  return x * x;
}
