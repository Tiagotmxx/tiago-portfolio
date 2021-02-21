//function declaration

function sum(a, b) {
    return a + b;
}

//function expression

const sum = function (a, b) {
    return a + b;
};

//Arrow function

const sum = (a, b) => {
    return a + b;
};

//sum: (a, b) -> a + b

const sum = (a, b) => a + b;


const shout = (str) => return str.toUpperCase();

const yell = (str) => return str + '!!!';

const html = (str) => return `<h1>${str}</h1>`;