/**
 * Calculater is a webapp that asks for two numbers and performs
 * a specific operation on them.
 * 
 * The available operations are:
 * sum
 * subtraction
 * multiplication
 * division
 * power
 * remainder
 * ...
 * 
 * you can use an if-else cascade or the ternary operator(not recommended)
 */

let operationType = prompt('Choose the math operation:');
let num1 = prompt('Choose the first number:');
let num2 = prompt('Choose second number:');
num1 = Number(num1);
num2 = Number(num2);
if (operationType === 'sum') {
    alert(num1 + num2);
} else if (operationType === 'subtraction') {
    alert(num1 - num2);
} else if (operationType === 'multiplication') {
    alert(num1 * num2);
} else if (operationType === 'division') {
    alert(num1 / num2);
} else if (operationType === 'power') {
    alert(num1 ** num2);
} else if (operationType === 'remainder') {
    alert(num1 % num2);
}

//Second option

let operationType = prompt('Choose the math operation:');
let num1 = prompt('Choose the first number:');
let num2 = prompt('Choose the second number:');
num1 = Number(num1);
num2 = Number(num2);
let sum = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let power = num1 ** num2;
let remainder = num1 % num2;
if (operationType === 'sum') {
    alert(sum);
} else if (operationType === 'subtraction') {
    alert(subtraction);
} else if (operationType === 'multiplication') {
    alert(multiplication);
} else if (operationType === 'division') {
    alert(division);
} else if (operationType === 'power') {
    alert(power);
} else if (operationType === 'remainder') {
    alert(remainder);
}

//Third option

let operationType = prompt('Choose the math operation:');
let num1 = prompt('Choose the first number:');
let num2 = prompt('Choose second number:');
num1 = Number(num1);
num2 = Number(num2);
let finalResult;
if (operationType === 'sum') {
    finalResult = num1 + num2;
} else if (operationType === 'subtraction') {
    finalResult = num1 - num2;
} else if (operationType === 'multiplication') {
    finalResult = num1 * num2;
} else if (operationType === 'division') {
    finalResult = num1 / num2;
} else if (operationType === 'power') {
    finalResult = num1 ** num2;
} else if (operationType === 'remainder') {
    finalResult = num1 % num2;
}
alert(finalResult);

// } else if (operationType !== 'sum', 'subtraction', 'multiplication', 'division', 'power', 'remainder'){
//     finalResult = 'Insert a valid operation';