let number = prompt('Give me a number?');
number = Number(number);

let message
if (number > 0) {
    message = 1;
} else if (number < 0) {
    message = -1;
} else if (number === 0) {
    message = 0;
} else {
    message = 'Wrong input';
}

// ternary operators
let message = number > 0
    ? 1
    : number < 0
        ? -1
        : number === 0
            ? 0
            : 'Wrong input'