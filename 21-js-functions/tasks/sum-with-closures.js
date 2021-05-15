sum(2)(3);

function sum(a) {
  return function (b) {
    return a + b;
  };
}

//Arrow function

const sum = (a) => (b) =>  a + b
}