/* Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times 
and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n). */


let a = +prompt('Number x?', 0);
let b = +prompt('Number n?', 0);

function calcPower(x, n) {
    return x ** n;
}
alert(calcPower(a, b));
