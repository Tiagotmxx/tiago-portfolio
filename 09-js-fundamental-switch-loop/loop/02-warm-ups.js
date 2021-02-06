/**
 * Print all numbers from 0 to 10 (excluded).
 * Try with a while loop, then with a for loop.
 */

/**
 * Print all numbers from 10 to 0 (excluded), reversed.
 * Try with a for loop, then with a while loop.
 */
for (let i = 10; i > 0; i--) {
    console.log(i);
}

let i= 10;
while (i > 0) {
    console.log(i);
    i--;
}
/**
 * Print even numbers from 0 to 10 (excluded) with a for loop.
 * There are at least 3 possible solutions, can you find them all?
 */

/**
 * Guess the number: Prompt the user for a number until it equals the secret number or it's a falsy value
 * 
 * HINT: "until" something is true means "while" the same is false, and viceversa!
 */
let secretNumber = 7;
let guessedNumber = +prompt('Give me a number between 1 and 10');
while (guessedNumber && guessedNumber !== secretNumber);{
    guessedNumber = +prompt('Sorry, not the right number, please try again');
}

if (guessedNumber === secretNumber){
alert('You got it!');
} else {
    alert('You gave up.');
}
/**
 * Sum all numbers from 1 to 5
 *
 * HINT: use a variable to accumulate partial results
 */

/**
 * Build a string that looks like this:
 * "Na Na Na Na Na (...16 times) Batman!"
 * The string should be built by looping 16 times,
 * and at the end of the loop I want to print the result to the 
 * 
 * HINT: we can use string concatenation to build strings
 */
let string = '';
for (let i = 0; i < 16; i++) {
    string += 'Na ';
}
string += 'Batman!';
console.log(string);