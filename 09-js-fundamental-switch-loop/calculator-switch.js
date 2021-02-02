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
 * Use a switch statment
 */

let num1 = +prompt('first operand');
let num2 = +prompt('second operand');
let operation = prompt('operation');

let result;
switch (operation) {
    case '+':
        result = num1 + num2;
        break;

    case '-':
        result = num1 - num2;
        break;

    case '*':
        result = num1 * num2;
        break;

    default:
        alert('Invalid operation');
}

if (typeof result === 'number';) {
    alert(`The result is ${result}`);
}