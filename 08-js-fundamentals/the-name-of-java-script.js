let year = prompt('In which year was ECMAscript-2015 specification published?', '');
if (year == 2015) {
    alert('You are right!');
}

// = to declare a variable
// == compare
// === to strict compare

let year = +prompt('In which year was ECMAscript-2015 specification published?', '');
let answerIsRight = year === 2015;
let answerIsWrong = year !== 2015;
if (answerIsRight) {
    alert('You are right!');
}
if (answerIsWrong) {
    alert('Nope...');
}

//Another way

let year = +prompt('In which year was ECMAscript-2015 specification published?', '');
let answerIsRight = year === 2015;
if (answerIsRight) {
    alert('You are right!');
} else {
    alert('Nope...');
}

//Or

let year = +prompt('Give me the year?');
if (year < 2015) {
    alert('Too early');
} else if (year >  2015) {
    alert('Too late');
} else {
    alert('You are right!');
}

//Genz

let yearOfBirth = prompt('What is your year of birth?');
let message;
if (yearOfBirth > 2000) {
    message = 'You are a GenZ!';
} else {
    message = 'You are not a GenZ!';
}
alert(message);

//ternary operator (or conditional operator'?')

let year = +prompt('give me the year');
let message = year < 2015
    ? 'Too early'
    : (year>2015 
        ? 'Too late'
        : 'You are right');
alert(message);


let num1 = +prompt('give me num1');
let num2 = +prompt('give me num2');
let operation = prompt('give me operation', 'sum');
let result = operation === 'sum' ? num1 + num2 : num1 - num2;
alert(result);