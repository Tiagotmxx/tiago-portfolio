console.log(iterativeFactorial(5));

function iterativeFactorial(num) {
  let factorial = 1;
  for (let i = num; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}

console.log(recursiveFactorial(5));

function recursiveFactorial(num) {
  if (num === 1) {
    return num;
  }
  return num * recursiveFactorial(num - 1);
}

//FAZER ESTE EXERCICIO!!!
console.log(powerFunction(5, 2));

function powerFunction(n, m) {
  if (m === 1) {
    return n;
  }
  return n * powerFunction(n, m - 1);
}
